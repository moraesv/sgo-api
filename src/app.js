import express from 'express'
import cors from 'cors'
import path from 'path'
import appConfig from './app/config/app'
import clientConfig from './app/config/client'
import errorHandler from './app/middlewares/errorHandler'

import routes from './app/routes'

class App {
  constructor() {
    this.app = express()
    this.configure()
  }

  init() {
    this.app.listen(appConfig.port, () => console.log(`Server listening on port ${appConfig.port}!`))
  }

  configure() {
    /*
    this.app.use(cookieParser(sessionConfig.secret))

    this.app.set('trust proxy', 1)
    this.app.use(session(sessionConfig))

    sequelizePapertrail()

    passport(this.app) */

    this.app.use(express.json())

    const WHITELIST = [appConfig.url, clientConfig.url]

    this.app.use(
      cors({
        origin(origin, callback) {
          if (!origin || WHITELIST.includes(origin)) {
            return callback(null, true)
          }

          return callback(new Error('Not allowed by CORS:', origin))
        },
        credentials: true,
      })
    )

    this.app.use(routes)

    this.app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

    this.app.use(errorHandler)

    return this.app
  }
}

export default new App()
