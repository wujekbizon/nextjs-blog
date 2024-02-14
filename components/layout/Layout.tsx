'use client'

import MainNavigation from './MainNavigation'
import Notification from '../ui/Notifications'
import NotificationContext from '../../store/notificationContext'
import { useContext } from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const notificationCtx = useContext(NotificationContext)
  const activeNotification = notificationCtx.notification
  const isActive = notificationCtx.isActive

  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      {isActive && <Notification {...activeNotification} />}
    </>
  )
}
export default Layout
