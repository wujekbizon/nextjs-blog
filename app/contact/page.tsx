import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send me your message.',
}

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}
export default ContactPage
