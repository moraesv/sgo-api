import AvisoController from '../controllers/AvisoController'
import { auth } from '../middlewares/auth'

const avisoController = new AvisoController()

const avisoRoutes = [
  {
    method: 'get',
    path: '/avisos',
    action: avisoController.index.bind(avisoController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/avisos/:id',
    action: avisoController.show.bind(avisoController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/avisos',
    action: avisoController.store.bind(avisoController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/avisos/:id',
    action: avisoController.update.bind(avisoController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/avisos/:id',
    action: avisoController.delete.bind(avisoController),
    middlewares: [auth],
  },
]

export default avisoRoutes
