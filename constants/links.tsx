import { SiHomebridge } from 'react-icons/si'
import { GrArticle } from 'react-icons/gr'
import { IoIosContacts } from 'react-icons/io'

export const links = [
  {
    title: 'Home',
    href: '/',
    icon: <SiHomebridge size={30} />,
  },
  {
    title: 'Posts',
    href: '/posts',
    icon: <GrArticle size={30} />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <IoIosContacts size={30} />,
  },
]
