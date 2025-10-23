import { NextResponse } from 'next/server';
import AdminApplicationNotification from '@/emails/AdminApplicationNotification';
import ApplicantConfirmation from '@/emails/ApplicantConfirmation';
import { Resend } from 'resend';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@whitewhalesoft.in';

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Server configuration error: missing API key' }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const jobTitle = formData.get('jobTitle') as string;
  const coverLetter = formData.get('coverLetter') as string;
  const resume = formData.get('resume') as File;

  if (!name || !email || !phone || !jobTitle || !resume) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // Send admin notification
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ADMIN_EMAIL,
      subject: `New Application: ${jobTitle}`,
      react: AdminApplicationNotification({
        jobTitle,
        applicantName: name,
        applicantEmail: email,
        applicantPhone: phone,
        applicantCoverLetter: coverLetter,
      }),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    // Send applicant confirmation
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Application Received: ${jobTitle}`,
      react: ApplicantConfirmation({ jobTitle, applicantName: name }),
    });

    return NextResponse.json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}
