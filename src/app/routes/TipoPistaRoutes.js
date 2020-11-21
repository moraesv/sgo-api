import TipoPistaController from '../controllers/TipoPistaController'
import { auth } from '../middlewares/auth'

const tipoPistaController = new TipoPistaController()

const tipoPistaRoutes = [
  {
    method: 'get',
    path: '/tipos-pista',
    action: tipoPistaController.index.bind(tipoPistaController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/tipos-pista/:id',
    action: tipoPistaController.show.bind(tipoPistaController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/tipos-pista',
    action: tipoPistaController.store.bind(tipoPistaController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/tipos-pista/:id',
    action: tipoPistaController.update.bind(tipoPistaController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/tipos-pista/:id',
    action: tipoPistaController.delete.bind(tipoPistaController),
    middlewares: [auth],
  },
]

export default tipoPistaRoutes
