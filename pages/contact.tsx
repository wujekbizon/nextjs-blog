import Head from 'next/head';
import ContactForm from '../components/contact/ContactForm';
import ContactHero from '../components/contact/ContactHero';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message." />
      </Head>
      <ContactHero />
      <ContactForm />
    </>
  );
};
export default ContactPage;
