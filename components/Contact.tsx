'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Socials from './Socials'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Section } from './ui/section'
import { Textarea } from './ui/textarea'

export const formSchema = z.object({
  subject: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  body: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
})

export default function Contact() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Section
      id="contact"
      className="flex-col items-center bg-grape px-5 py-12 text-monochrome-50 xl:px-[269px]"
    >
      <h1 className="text-3xl font-semibold">Any questions?</h1>
      <p>Contact Pawsitive Pet Care today</p>
      <Form {...form}>
        <form
          action="mailto:info.pawsitivepetcare@gmail.com"
          method="GET"
          encType="text/plain"
          className="mt-9 w-full max-w-[474px] space-y-8"
        >
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            value="Send"
            variant={'secondary'}
            className="w-full"
          >
            Send
          </Button>
        </form>
      </Form>
      <div className="mt-9">
        <Socials />
      </div>
    </Section>
  )
}
