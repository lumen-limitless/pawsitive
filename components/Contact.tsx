'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Socials from './Socials'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Section } from './ui/section'
import { Textarea } from './ui/textarea'

export const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
})

export default function Contact() {
  const [loading, setLoading] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.debug(values)
    setLoading(true)
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        throw new Error()
      }
      alert('Message sent successfully!')
    } catch {
      alert('Something went wrong, please try again later.')
    }
    setLoading(false)
  }

  return (
    <Section
      id="contact"
      className="flex-col bg-grape px-5 py-12 text-monochrome-50 xl:px-[269px]"
    >
      <h1 className="text-3xl font-semibold">Any questions?</h1>
      <p>Contact Pawsitive Pet Care today</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-9 w-full max-w-[474px] space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
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
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant={'secondary'}
            disabled={loading}
            className="w-full"
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : 'Send'}
          </Button>
        </form>
      </Form>
      <div className="mt-9">
        <Socials />
      </div>
    </Section>
  )
}
