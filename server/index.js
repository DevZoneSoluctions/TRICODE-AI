import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables reliably from server/.env or current working directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, ".env") });
config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// CORS — allow only frontend origin
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS policy: origin '${origin}' not allowed`));
    },
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ─── Rate Limiting ─────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,                    // 5 submissions per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes.",
  },
});

// ─── Email Validation ──────────────────────────────────────────────────────
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim().toLowerCase());

// ─── Nodemailer Transporter ────────────────────────────────────────────────
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASS environment variables are required."
    );
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// ─── HTML Email Template ───────────────────────────────────────────────────
const buildEmailHTML = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #F8FAFC; margin: 0; padding: 0; }
    .wrapper { max-width: 620px; margin: 32px auto; background: #fff; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 24px rgba(37,99,235,0.07); }
    .header { background: linear-gradient(135deg, #00D2FF 0%, #2563EB 45%, #7C3AED 100%); padding: 32px 36px 24px; }
    .header h1 { color: #fff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 32px 36px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0F172A; font-weight: 500; line-height: 1.5; }
    .message-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px; color: #334155; font-size: 14px; line-height: 1.7; white-space: pre-wrap; }
    .footer { background: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 18px 36px; text-align: center; color: #94A3B8; font-size: 11px; }
    .badge { display: inline-block; padding: 3px 10px; border-radius: 99px; background: #EFF6FF; color: #2563EB; font-size: 11px; font-weight: 700; border: 1px solid #BFDBFE; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>📬 New Project Inquiry — TRICODE AI</h1>
      <p>A visitor submitted the contact form on your website.</p>
    </div>
    <div class="body">
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:24px;">
        <div class="field" style="flex:1;min-width:180px;">
          <div class="label">Full Name</div>
          <div class="value">${data.name}</div>
        </div>
        <div class="field" style="flex:1;min-width:180px;">
          <div class="label">Work Email</div>
          <div class="value"><a href="mailto:${data.email}" style="color:#2563EB;text-decoration:none;">${data.email}</a></div>
        </div>
      </div>
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:24px;">
        <div class="field" style="flex:1;min-width:180px;">
          <div class="label">Company / Organization</div>
          <div class="value">${data.company || "—"}</div>
        </div>
        <div class="field" style="flex:1;min-width:180px;">
          <div class="label">Target Capability</div>
          <div class="value"><span class="badge">${data.service}</span></div>
        </div>
      </div>
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:24px;">
        <div class="field" style="flex:1;min-width:180px;">
          <div class="label">Estimated Budget</div>
          <div class="value">${data.budget}</div>
        </div>
        <div class="field" style="flex:1;min-width:180px;">
          <div class="label">Target Timeline</div>
          <div class="value">${data.timeline}</div>
        </div>
      </div>
      <div class="field">
        <div class="label">Project Requirements</div>
        <div class="message-box">${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Reply directly to this email — it will go to <strong>${data.email}</strong><br/>
      TRICODE AI Technologies &nbsp;|&nbsp; Automated Contact System</p>
    </div>
  </div>
</body>
</html>
`;

// ─── POST /api/contact ─────────────────────────────────────────────────────
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, company, service, budget, timeline, message } = req.body;

    // ── Validation ──
    const errors = {};
    if (!name || String(name).trim().length < 2) {
      errors.name = "Name is required (at least 2 characters).";
    }
    if (!email || !isValidEmail(email)) {
      errors.email = "A valid email address is required.";
    }
    if (!message || String(message).trim().length < 15) {
      errors.message = "Message must be at least 15 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // ── Build sanitized payload ──
    const payload = {
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().toLowerCase().slice(0, 200),
      company: company ? String(company).trim().slice(0, 150) : "",
      service: service ? String(service).trim().slice(0, 150) : "Not specified",
      budget: budget ? String(budget).trim().slice(0, 50) : "Not specified",
      timeline: timeline ? String(timeline).trim().slice(0, 80) : "Not specified",
      message: String(message).trim().slice(0, 5000),
    };

    // ── Send email ──
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"TRICODE AI Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVE_EMAIL || process.env.EMAIL_USER,
      replyTo: payload.email,
      subject: `[TRICODE] New Inquiry from ${payload.name} — ${payload.service}`,
      html: buildEmailHTML(payload),
      text: `New inquiry from ${payload.name} (${payload.email})\n\nCompany: ${payload.company || "—"}\nService: ${payload.service}\nBudget: ${payload.budget}\nTimeline: ${payload.timeline}\n\nMessage:\n${payload.message}`,
    });

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been received. We will respond within 24 hours.",
    });
  } catch (err) {
    console.error("[TRICODE Contact] Email error:", err.message);

    // Don't leak internal errors to client
    return res.status(500).json({
      success: false,
      message: "We could not process your request right now. Please try again later or email us directly.",
    });
  }
});

// ─── Health check ──────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "TRICODE Contact API" });
});

// ─── 404 handler ──────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

// ─── Start Server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ TRICODE Contact API running on http://localhost:${PORT}`);
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("⚠️  WARNING: EMAIL_USER or EMAIL_PASS not set. Emails will fail until configured.");
  }
});
