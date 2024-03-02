import { FormState } from '@/types/actionTypes'
import { ZodError } from 'zod'

export const fromErrorToFormState = (error: unknown) => {
  // if validation error with Zod, return first error message
  if (error instanceof ZodError) {
    return {
      status: 'ERROR' as const,
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      timestamp: Date.now(),
    }
    // if another error instance, return error message
    // e.g. database error
  } else if (error instanceof Error) {
    return {
      status: 'ERROR' as const,
      message: error.message,
      fieldErrors: {},
      timestamp: Date.now(),
    }
    // if not an error instance but something else crashed
    // return generic error message
  } else {
    return {
      status: 'ERROR' as const,
      message: 'An unknown error occurred',
      fieldErrors: {},
      timestamp: Date.now(),
    }
  }
}

export const toFormState = (status: FormState['status'], message: string): FormState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  }
}
