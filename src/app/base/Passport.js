import bcrypt from 'bcryptjs'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as AnonymousStrategy } from 'passport-anonymous'
import { Strategy as JwtStrategy } from 'passport-jwt'

import jwtConfig from '../config/jwt'

import { setContextUser } from './auth'

import OficialModel from '../models/OficialModel'

export default class Passport {
  constructor() {
    this.passport = passport
    this.jwtConfig = jwtConfig
    this.oficialModel = OficialModel.init()
    this.init()
  }

  init() {
    this.passport.use(
      new LocalStrategy(
        {
          usernameField: 'nomeUsuario',
          passwordField: 'senha',
        },
        async (nomeUsuario, senha, done) => {
          const user = await this.oficialModel.findOne({
            where: {
              nomeUsuario,
            },
          })

          if (!user || !(await bcrypt.compare(senha, user.senha))) {
            return done(null, false)
          }

          setContextUser(user)
          return done(null, user)
        }
      )
    )

    this.passport.use(
      new JwtStrategy(
        {
          algorithms: jwtConfig.algorithm,
          secretOrKey: jwtConfig.secret,
          jwtFromRequest: (req) => {
            const token = req.cookies.access_token

            if (!token) {
              return null
            }

            return String(token).substring(7)
          },
        },
        async (payload, done) => {
          const { data } = payload

          if (!data) {
            return done(null, false)
          }

          const user = await this.oficialModel.findOne({
            where: {
              id: data.id,
            },
          })

          if (!user) {
            return done(null, false)
          }

          setContextUser(user)
          return done(null, user)
        }
      )
    )

    this.passport.use(new AnonymousStrategy())

    this.passport.serializeUser((user, done) => {
      done(null, user.id)
    })

    this.passport.deserializeUser(async (id, done) => {
      const user = await this.oficialModel.findOne({
        where: {
          id,
        },
      })

      setContextUser(user)
      return done(null, user)
    })

    return this.passport
  }
}
