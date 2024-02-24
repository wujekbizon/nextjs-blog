import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import GlobalError from './global-error'
import { ErrorBoundary } from '@sentry/nextjs'

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
    <html lang="en">
      <body className={poppins.variable}>
        <ErrorBoundary fallback={({ error }) => <GlobalError error={error} />}>
          <Layout>{children}</Layout>
        </ErrorBoundary>
      </body>
    </html>
  )
}
