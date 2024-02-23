'use client'

import { Component, ErrorInfo } from 'react'
import * as Sentry from '@sentry/nextjs'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo })
    Sentry.captureException(error)
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button type="button" onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      )
    }

    // Return children components in case of no error

    return this.props.children
  }
}

export default ErrorBoundary
