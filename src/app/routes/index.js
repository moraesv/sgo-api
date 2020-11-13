import { Router } from 'express'
import Request from '../base/Request'
import Response from '../base/Response'

import oficialRoutes from './OficialRoutes'
import fileRoutes from './FileRoutes'
import loginRoutes from './LoginRoutes'
import logoutRoutes from './LogoutRoutes'

const router = Router()

function createRoutes(...allRoutes) {
  allRoutes.map((routes) =>
    routes.forEach((route) => router[route.method](route.path, ...route.middlewares, route.action))
  )
}

router.use('/', (request, response, next) => {
  new Request(request)
  new Response(response)

  next()
})

createRoutes(oficialRoutes, fileRoutes, loginRoutes, logoutRoutes)

router.use('/api', router)

export default router
