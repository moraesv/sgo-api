import connectMemcached from 'connect-memcached'
import session from 'express-session'
import appConfig from './app'

const MemcachedStore = connectMemcached(session)

export default {
  store: new MemcachedStore({ hosts: process.env.SESSION_HOST }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: appConfig.environment === 'production' },
}
