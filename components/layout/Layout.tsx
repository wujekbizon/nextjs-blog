'use client'

import MainNavigation from './MainNavigation'
import ToastProvider from './ToastProvider'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainNavigation />
      <ToastProvider>{children}</ToastProvider>
    </>
  )
}
export default Layout
