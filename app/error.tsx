'use client'

import CustomError from '@/components/layout/CustomError'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <CustomError error={error} reset={reset} />
}
