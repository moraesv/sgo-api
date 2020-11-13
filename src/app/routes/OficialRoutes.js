import OficialController from '../controllers/OficialController'
import { auth } from '../middlewares/auth'

const oficialController = new OficialController()

const oficialRoutes = [
  {
    method: 'get',
    path: '/oficiais',
    action: oficialController.index.bind(oficialController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/oficiais',
    action: oficialController.store.bind(oficialController),
    middlewares: [],
  },
  {
    method: 'delete',
    path: '/oficiais/:id',
    action: oficialController.delete.bind(oficialController),
    middlewares: [auth],
  },
]

export default oficialRoutes
