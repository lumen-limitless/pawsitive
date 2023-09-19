import { formSchema } from '@/components/Contact'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, message } = formSchema.parse(body)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailData = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }

    await transporter.sendMail(mailData)
    return NextResponse.json({ message: 'Email sent successfully.' })
  } catch (error) {
    return NextResponse.error()
  }
}
