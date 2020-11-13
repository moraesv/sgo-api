import cors from 'cors'

import appConfig from '../config/app'
import clientConfig from '../config/client'

const WHITELIST = [appConfig.url, clientConfig.url]

const corsMiddleware = cors({
  origin(origin, callback) {
    if (!origin || WHITELIST.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS:', origin))
  },
  credentials: true,
})

export default corsMiddleware
