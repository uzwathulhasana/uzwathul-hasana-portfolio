import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

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

    // 2. SMTP Environment variables
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const mailTo = process.env.MAIL_TO || 'uzwathuhasana@gmail.com';

    if (!smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        message: 'SMTP credentials missing. Please set SMTP_USER and SMTP_PASS environment variables.'
      });
    }

    const cleanPass = smtpPass.replace(/\s+/g, '');

    // 3. Create Transporter
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

    // 4. Construct Email
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

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    let errorMessage = 'Failed to send message. Please try again.';
    if (error.code === 'EAUTH' || (error.response && error.response.includes('534'))) {
      errorMessage = 'Gmail Authentication Failed: A 16-character Google App Password is required.';
    }
    return res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
}
