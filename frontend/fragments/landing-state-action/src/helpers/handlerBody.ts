import { getPayload } from './handlerPayload'

export const body = (window) => {
  return getPayload(window)
}
