import cookieConfig from '../config/cookie'

const logout = (req, res, next) => {
  res.removeCookie('access_token', cookieConfig)
  next()
}

export default logout
