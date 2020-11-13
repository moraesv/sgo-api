import express from 'express'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import httpContext from 'express-http-context'

import appConfig from './app/config/app'
import sessionConfig from './app/config/session'

import corsMiddleware from './app/middlewares/cors'
import errorHandler from './app/middlewares/errorHandler'

import Passport from './app/base/Passport'

import routes from './app/routes'

class App {
  constructor() {
    this.app = express()
    this.configure()
  }

  init() {
    this.app.listen(appConfig.port, () => console.log(`Server listening on port ${appConfig.port}!`))
  }

  midlewares() {
    this.app.use(express.json())
    this.app.use(corsMiddleware)
    this.app.use(morgan(':method :url :status :response-time :date[clf]'))
    this.app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
    this.app.use(httpContext.middleware)
    this.app.use(errorHandler)
    this.app.use(cookieParser(sessionConfig.secret))
  }

  routes() {
    this.app.use(routes)
  }

  passport() {
    this.app.use(routes)
    const passport = new Passport().init()

    this.app.use(passport.initialize())

    this.app.use(passport.session())
  }

  configure() {
    this.midlewares()
    this.routes()
    this.passport()

    return this.app
  }
}

export default new App()
