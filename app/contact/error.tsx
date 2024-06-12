'use client'

export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  )
}
