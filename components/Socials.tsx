import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react'

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-9 text-white">
      <a href="tel:+1-585-210-2385">
        <PhoneIcon />
      </a>

      <a href="mailto:info@pawsitivepet.care">
        <MailIcon />
      </a>

      <a
        href="https://www.facebook.com/pawsitivepetcareinfo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>

      <a
        href="https://www.instagram.com/pawsitivepet.care/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
    </div>
  )
}
