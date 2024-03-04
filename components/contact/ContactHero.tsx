import Designer from '../animated-icons/Designer'
import ProgressiveWeb from '../animated-icons/ProgressiveWeb'
import styles from './ContactHero.module.css'

const ContactHero = () => {
  return (
    <section className={styles.contact}>
      <div className="gradient-divider"></div>
      <div className={styles.title}>
        <h4> Hey everyone, and welcome to my blog!</h4>
        <p>
          I&apos;m thrilled to be here and share my passion for technology with all of you. Whether you&apos;re a
          seasoned techie or just starting to explore the digital world, I hope you&apos;ll find something interesting,
          inspiring, or even helpful here.{' '}
        </p>
        <br />
        <p>
          My main goal is to share my experiences with some of the latest and greatest technologies I&apos;m
          encountering. I&apos;ll be diving deep into the tools and platforms that are shaping the future, from
          cutting-edge software and revolutionary hardware to the latest advancements in artificial intelligence and
          machine learning.
        </p>
        <div className={styles.icon_container}>
          <Designer primary="#161621" secondary="rgba(255, 68, 18, 0.7)" width={60} height={60} />
        </div>
        <p>
          I&apos;m constantly learning and experimenting with new technologies, and I&apos;ll be sharing my experiences
          and insights with you. We&apos;ll delve into everything from cutting-edge software and hardware to emerging
          trends in artificial intelligence, cybersecurity, and more.
        </p>
        <br />
        <p>
          But it&apos;s not just about the newest gadgets and trends. I&apos;m also passionate about showcasing the cool
          things I&apos;ve been able to create using technology. From building custom software applications to designing
          compelling websites or even experimenting with creative coding projects, I&apos;ll share my successes and
          failures, offering insights and lessons learned along the way.
        </p>
        <div className={styles.icon_container}>
          <ProgressiveWeb primary="#161621" secondary="rgba(255, 68, 18, 0.7)" width={60} height={60} />
        </div>
        <p>
          Ultimately, I believe technology has the power to positively impact our lives in countless ways. If my
          experiences can help others on their own tech journeys, whether it&apos;s by providing clear explanations of
          complex concepts, offering practical tutorials, or simply sparking curiosity and inspiration, then I&apos;ve
          achieved my goal.
        </p>
        <br />
        <p>
          This is a two-way street, of course! I&apos;m always eager to learn from others and foster a vibrant
          community. So, if you have any questions about something you&apos;ve read here, don&apos;t hesitate to reach
          out. I&apos;m also happy to hear your stories and experiences with technology. Whether you&apos;re a fellow
          enthusiast, a complete beginner, or somewhere in between, I welcome your comments and feedback.
        </p>
      </div>
      <div className="gradient-divider"></div>
      <h2 className={styles.form_title}>Want to start a conversation? Get in touch by using the contact form below.</h2>
    </section>
  )
}
export default ContactHero
