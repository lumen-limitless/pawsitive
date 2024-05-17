'use client';
import { submitContactFormAction } from '@/lib/actions';
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
      className="bg-grape py-12 text-monochrome-50 xl:px-[269px]"
    >
      <div className="container flex flex-col items-center">
        <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
          Any questions?
        </h1>
        <p>Contact Pawsitive Pet Care today.</p>

        <form
          action={handleSubmit}
          className="mt-9 w-full max-w-[474px] space-y-8"
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
        <div className="mt-9">
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
