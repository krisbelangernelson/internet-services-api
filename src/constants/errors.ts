import config from '@/config'

const { email } = config

export const httpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500
}

export const internalError = {
  code: '500',
  msg: `Internal error. Please try again. If the problem persists, please contact the support group ${email}`,
  reason: 'Internal Server Error'
}

export const gatewayError = {
  code: '504',
  msg: `Gateway error reaching service. Please try again. If the problem persists, please contact the support group ${email}`
}

export const badRequestError = {
  code: '400',
  msg: 'Invalid request',
  reason: 'Bad Request'
}
