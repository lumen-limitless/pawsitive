'use client';
import { submitContactFormAction } from '@/lib/actions';
import Flower2SVG from '@/public/flower-2.svg';
import PawOutlineSVG from '@/public/paw-outline.svg';
import { Check, Loader2, X } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import Socials from './Socials';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
export default function Contact() {
  const handleSubmit = async (formData: FormData) => {
    return submitContactFormAction(formData).then(({ success }) => {
      if (success) {
        toast(
          <>
            <Check className="mr-2 h-4 w-4 text-green-500" />{' '}
            <p>Message sent!</p>
          </>,
        );
      } else {
        toast(
          <>
            <X className="mr-2 h-4 w-4 text-red-500" />{' '}
            <p>Message failed to send</p>
          </>,
        );
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-clip bg-grape py-12 text-monochrome-50 md:py-20"
    >
      <PawOutlineSVG className="pointer-events-none absolute left-10 top-20 hidden h-[400px] w-[400px] lg:inline" />
      <PawOutlineSVG className="pointer-events-none absolute -bottom-72 right-0 hidden h-[680px]  w-[680px] -rotate-45 lg:inline" />
      <Flower2SVG className="pointer-events-none absolute right-16 top-16 hidden h-[125px] w-[125px] lg:inline" />
      <div className="container flex flex-col items-center">
        <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
          Any questions?
        </h1>
        <p>Contact Pawsitive Pet Care today.</p>

        <form
          action={handleSubmit}
          className="z-10 mt-9 w-full max-w-[474px] space-y-8"
        >
          <Input
            name="name"
            id="name"
            placeholder="Name"
            type="text"
            min={2}
            required
          />
          <Input
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            required
          />
          <Input
            name="subject"
            id="subject"
            min={2}
            placeholder="Subject"
            type="text"
            required
          />
          <Textarea
            name="body"
            id="body"
            placeholder="Message"
            required
            minLength={10}
          />

          <SubmitButton />
        </form>
        <div className="z-10 mt-9">
          <Socials />
        </div>
      </div>
    </section>
  );
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-roledescription="submit button for contact form"
      className="w-full"
      variant={'submit'}
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? <Loader2 className="animate-spin" /> : 'Send message'}
    </Button>
  );
};
