import { SiHomebridge } from 'react-icons/si'
import { GrArticle } from 'react-icons/gr'
import { IoIosContacts } from 'react-icons/io'

export const links = [
  {
    title: 'Home',
    href: '/',
    icon: <SiHomebridge size={30} />,
    imageUrl: '/assets/images/home1.jpg',
    text: 'Tech news on the go! Get the latest tech updates and stay ahead of the curve.',
  },
  {
    title: 'Posts',
    href: '/posts',
    icon: <GrArticle size={30} />,
    imageUrl: '/assets/images/posts.jpg',
    text: 'Dive into our collection of articles. Find insightful reads on various subjects.',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <IoIosContacts size={30} />,
    imageUrl: '/assets/images/contact.jpg',
    text: 'Want to know more, please contact us and we will be happy to assist you.',
  },
]
