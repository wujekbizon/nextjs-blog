import { FormState } from '@/types/actionTypes'

export const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET' as const,
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
}
