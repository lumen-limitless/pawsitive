import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react'

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-9 text-white">
      <a href="tel:+1-585-210-2385">
        <PhoneIcon />
        <span className="sr-only">phone</span>
      </a>

      <a href="mailto:info.pawsitivepetcare@gmail.com">
        <MailIcon />
        <span className="sr-only">e-mail</span>
      </a>

      <a
        href="https://www.facebook.com/pawsitivepetcareinfo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
        <span className="sr-only">facebook</span>
      </a>

      <a
        href="https://www.instagram.com/pawsitivepet.care/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
        <span className="sr-only">instagram</span>
      </a>
    </div>
  )
}
