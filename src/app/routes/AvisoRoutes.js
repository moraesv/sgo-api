import AvisoController from '../controllers/AvisoController'
import { auth } from '../middlewares/auth'

const avisoController = new AvisoController()

const avisoRoutes = [
  {
    method: 'get',
    path: '/avisos',
    action: avisoController.index.bind(AvisoController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/avisos/:id',
    action: avisoController.show.bind(AvisoController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/avisos',
    action: avisoController.store.bind(AvisoController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/avisos/:id',
    action: avisoController.update.bind(AvisoController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/avisos/:id',
    action: avisoController.delete.bind(AvisoController),
    middlewares: [auth],
  },
]

export default avisoRoutes
