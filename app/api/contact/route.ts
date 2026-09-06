import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 500 }
      );
    }

    // Call Resend REST API directly — no SDK, no peer dependency issues
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['tigistashenafi42@gmail.com'],
        reply_to: email,
        subject: `New message from ${name} — Portfolio`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
            <h2 style="color:#6d28d9;margin-bottom:4px">New Portfolio Message</h2>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin-bottom:20px"/>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <div style="margin-top:16px;padding:16px;background:#f8f7ff;border-left:4px solid #6d28d9;border-radius:4px">
              <strong>Message:</strong>
              <p style="white-space:pre-wrap;margin-top:8px">${message}</p>
            </div>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin-top:24px"/>
            <p style="color:#9ca3af;font-size:12px">Sent from your portfolio contact form</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('Resend API error:', err);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
