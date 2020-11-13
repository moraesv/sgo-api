import httpContext from 'express-http-context'

export const setContextUser = (user) => {
  httpContext.set('user', user)
}

export const getContextUser = () => {
  return httpContext.get('user')
}
