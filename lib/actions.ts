'use server';

import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  subject: z.string().min(2),
  email: z.string().min(1).email(),
  body: z.string().min(10),
});

export async function submitContactFormAction(
  formData: FormData,
): Promise<{ success: boolean }> {
  try {
    const { name, subject, email, body } = formSchema.parse(
      Object.fromEntries(formData),
    );

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const accessToken = await oAuth2Client.getAccessToken();

    // Configure the email transport using the SMTP server of your choice
    const transporter = (nodemailer as any).createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Configure the email data
    await Promise.all([
      // Send the email to the website owner
      transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${body}`,
      }),
      // Send a confirmation email to the user
      transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Thank you for contacting us!',
        text: `Dear ${name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nBest regards,\nPawsitive Pet Care`,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
