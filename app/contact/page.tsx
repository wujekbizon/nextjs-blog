import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import Hero from '@/components/home-page/Hero'
import FooterSocials from '@/components/layout/FooterSocials'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send me your message.',
}

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Hero />
      <FooterSocials />
    </>
  )
}
export default ContactPage
