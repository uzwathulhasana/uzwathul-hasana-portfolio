import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact Form Submission Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    // 1. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).toLowerCase().trim())) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    // 2. Check SMTP Configuration (Reload dynamically from .env)
    dotenv.config({ path: path.join(__dirname, '../.env'), override: true });
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const mailTo = process.env.MAIL_TO || 'uzwathuhasana@gmail.com';

    if (
      !smtpUser ||
      !smtpPass ||
      smtpUser === 'your_smtp_username_here' ||
      smtpPass.includes('APP PASSWORD') ||
      smtpPass.includes('your_')
    ) {
      console.warn('⚠️ SMTP Credentials missing or placeholder found in .env file');
      return res.status(500).json({
        success: false,
        message: 'SMTP credentials missing. Please add your 16-character Gmail App Password to SMTP_PASS in the .env file.'
      });
    }

    const cleanPass = smtpPass.replace(/\s+/g, '');

    // 3. Create Nodemailer Transporter
    const isGmail = smtpHost.includes('gmail.com') || (smtpUser && smtpUser.includes('@gmail.com'));
    const transporter = nodemailer.createTransport(
      isGmail
        ? {
            service: 'gmail',
            auth: {
              user: smtpUser,
              pass: cleanPass
            }
          }
        : {
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: cleanPass
            }
          }
    );

    // 4. Construct Email Payload
    const formattedSubject = subject && subject.trim() ? subject.trim() : 'New Inquiry';

    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: mailTo,
      replyTo: email.trim(),
      subject: `[Portfolio Contact] ${formattedSubject}`,
      text: `New Portfolio Contact\n\nName:\n${name.trim()}\n\nEmail:\n${email.trim()}\n\nSubject:\n${formattedSubject}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background-color: #ffffff; color: #111111; border: 2px solid #050505;">
          <h2 style="color: #050505; background-color: #FFF04A; padding: 12px; margin: 0 0 20px 0; font-size: 20px; text-transform: uppercase;">
            New Portfolio Contact Message
          </h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name.trim()}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email.trim()}" style="color: #0066cc;">${email.trim()}</a></p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${formattedSubject}</p>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #FFF04A; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</div>
        </div>
      `
    };

    // 5. Send Email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully from ${email.trim()} to ${mailTo}`);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    let errorMessage = 'Failed to send message. Please try again.';
    if (error.code === 'EAUTH' || (error.response && error.response.includes('534'))) {
      errorMessage = 'Gmail Authentication Failed: A 16-character Google App Password is required instead of your regular password.';
    }
    return res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
});

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on port ${PORT}`);
});
