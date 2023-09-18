import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react'

export default function Socials() {
  return (
    <div className="flex gap-9">
      <a href="tel:+1-585-210-2385">
        <PhoneIcon />
      </a>

      <a href="mailto:info@pawsitivepet.care">
        <MailIcon />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
    </div>
  )
}
