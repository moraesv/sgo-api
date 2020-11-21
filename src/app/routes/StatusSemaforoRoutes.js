import StatusSemaforoController from '../controllers/StatusSemaforoController'
import { auth } from '../middlewares/auth'

const statusSemaforoController = new StatusSemaforoController()

const statusSemaforoRoutes = [
  {
    method: 'get',
    path: '/status-semaforo',
    action: statusSemaforoController.index.bind(statusSemaforoController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/status-semaforo/:id',
    action: statusSemaforoController.show.bind(statusSemaforoController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/status-semaforo',
    action: statusSemaforoController.store.bind(statusSemaforoController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/status-semaforo/:id',
    action: statusSemaforoController.update.bind(statusSemaforoController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/status-semaforo/:id',
    action: statusSemaforoController.delete.bind(statusSemaforoController),
    middlewares: [auth],
  },
]

export default statusSemaforoRoutes
