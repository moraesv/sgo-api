import { Router } from 'express'
import Request from '../base/Request'
import Response from '../base/Response'

import oficialRoutes from './OficialRoutes'
import fileRoutes from './FileRoutes'
import loginRoutes from './LoginRoutes'
import logoutRoutes from './LogoutRoutes'
import profileRoutes from './ProfileRoutes'
import caracteristicasLocalRoutes from './CaracteristicasLocalRoutes'
import formaSinalizacaoRoutes from './FormaSinalizacaoRoutes'
import iluminacaoLocalRoutes from './IluminacaoLocalRoutes'
import statusSemaforoRoutes from './StatusSemaforoRoutes'
import tempoLocalRoutes from './TempoLocalRoutes'
import tipoAcidenteRoutes from './TipoAcidenteRoutes'
import tipoPistaRoutes from './TipoPistaRoutes'
import avisoRoutes from './AvisoRoutes'
import atendimentoRoutes from './AtendimentoRoutes'

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

createRoutes(
  oficialRoutes,
  fileRoutes,
  loginRoutes,
  logoutRoutes,
  profileRoutes,
  caracteristicasLocalRoutes,
  formaSinalizacaoRoutes,
  iluminacaoLocalRoutes,
  statusSemaforoRoutes,
  tempoLocalRoutes,
  tipoAcidenteRoutes,
  tipoPistaRoutes,
  avisoRoutes,
  atendimentoRoutes
)

router.use('/api', router)

export default router
