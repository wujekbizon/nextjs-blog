import { JSX } from 'react'

export type NavLinkProps = {
  title: string
  href: string
  icon: JSX.Element
}

export type ModalLinksProps = NavLinkProps & { imageUrl: string; onCloseHandler: () => void; text: string }
