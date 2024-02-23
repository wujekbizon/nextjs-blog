import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import { NotificationContextProvider } from '@/store/notificationContext'
import ErrorBoundary from '@/components/error/ErrorBoundary'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Grzegorz Wolfinger Blog',
  description: 'I post about programming and web development.',
  icons: {
    icon: '/assets/images/logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <NotificationContextProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <ErrorBoundary>
            <Layout>{children}</Layout>
          </ErrorBoundary>
        </body>
      </html>
    </NotificationContextProvider>
  )
}
