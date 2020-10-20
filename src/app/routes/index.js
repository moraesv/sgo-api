import { Router } from 'express'
import Request from '../../base/Request'
import Response from '../../base/Response'

import userRoutes from './UserRoutes'

const router = Router()

function createRoutes(...allRoutes) {
  allRoutes.map((routes) =>
    routes.forEach((route) => router[route.method](route.path, ...route.middlewares, route.action))
  )
}

createRoutes(userRoutes)

router.use('/', (request, response, next) => {
  new Request(request)
  new Response(response)

  next()
})

router.use('/api', router)

export default router
