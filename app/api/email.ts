import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  // Validate the form data
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'One or more fields are missing.' })
  }

  // Configure the email transport using the SMTP server of your choice
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // Configure the email data
  const mailData = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  try {
    // Send the email
    await transporter.sendMail(mailData)
    return NextResponse.json({ message: 'Email sent successfully.' })
  } catch (error) {
    return NextResponse.error()
  }
}
