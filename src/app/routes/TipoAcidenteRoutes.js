import TipoAcidenteController from '../controllers/TipoAcidenteController'
import { auth } from '../middlewares/auth'

const tipoAcidenteController = new TipoAcidenteController()

const tipoAcidenteRoutes = [
  {
    method: 'get',
    path: '/tipos-acidente',
    action: tipoAcidenteController.index.bind(tipoAcidenteController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/tipos-acidente/:id',
    action: tipoAcidenteController.show.bind(tipoAcidenteController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/tipos-acidente',
    action: tipoAcidenteController.store.bind(tipoAcidenteController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/tipos-acidente/:id',
    action: tipoAcidenteController.update.bind(tipoAcidenteController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/tipos-acidente/:id',
    action: tipoAcidenteController.delete.bind(tipoAcidenteController),
    middlewares: [auth],
  },
]

export default tipoAcidenteRoutes
