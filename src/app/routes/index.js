import { Router } from 'express'
import Request from '../base/Request'
import Response from '../base/Response'

import userRoutes from './UserRoutes'
import fileRoutes from './FileRoutes'

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

createRoutes(userRoutes, fileRoutes)

router.use('/api', router)

export default router
