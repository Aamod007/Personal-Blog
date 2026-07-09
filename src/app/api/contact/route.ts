import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(str: string) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER || '',
                pass: process.env.EMAIL_APP_PASSWORD || ''
            },
        });

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subject || 'No Subject');
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'aamoddev23@gmail.com',
            to: 'aamoddev23@gmail.com', // Exactly where you want to receive it
            subject: `New Project Inquiry: ${safeSubject}`,
            html: `
                <div style="font-family: 'Inter', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <div style="background-color: #000000; padding: 32px 24px; text-align: center;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">New Project Inquiry</h2>
                        <p style="color: #a1a1aa; margin: 8px 0 0 0; font-size: 14px;">Via Personal Portfolio Website</p>
                    </div>
                    <div style="padding: 32px 24px;">
                        <div style="margin-bottom: 24px;">
                            <p style="margin: 0 0 4px 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Client Name</p>
                            <p style="margin: 0; font-size: 16px; color: #18181b; font-weight: 500;">${safeName}</p>
                        </div>
                        <div style="margin-bottom: 24px;">
                            <p style="margin: 0 0 4px 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email Address</p>
                            <a href="mailto:${safeEmail}" style="margin: 0; font-size: 16px; color: #2563eb; font-weight: 500; text-decoration: none;">${safeEmail}</a>
                        </div>
                        <div style="margin-bottom: 24px;">
                            <p style="margin: 0 0 4px 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Subject</p>
                            <p style="margin: 0; font-size: 16px; color: #18181b; font-weight: 500;">${safeSubject}</p>
                        </div>
                        <div style="background-color: #f4f4f5; border-radius: 8px; padding: 20px; margin-top: 32px;">
                            <p style="margin: 0 0 12px 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Message</p>
                            <p style="margin: 0; font-size: 15px; color: #3f3f46; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
                        </div>
                    </div>
                    <div style="background-color: #fafafa; border-top: 1px solid #eaeaea; padding: 16px 24px; text-align: center;">
                        <p style="margin: 0; font-size: 12px; color: #a1a1aa;">This email was sent securely from your portfolio's contact form.</p>
                    </div>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email. Ensure Gmail App Password is set.' }, { status: 500 });
    }
}
