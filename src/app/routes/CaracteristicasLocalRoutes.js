import CaracteristicasLocalController from '../controllers/CaracteristicasLocalController'
import { auth } from '../middlewares/auth'

const caracteristicasLocalController = new CaracteristicasLocalController()

const caracteristicasLocalRoutes = [
  {
    method: 'get',
    path: '/caracteristicas-local',
    action: caracteristicasLocalController.index.bind(caracteristicasLocalController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/caracteristicas-local/:id',
    action: caracteristicasLocalController.show.bind(caracteristicasLocalController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/caracteristicas-local',
    action: caracteristicasLocalController.store.bind(caracteristicasLocalController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/caracteristicas-local/:id',
    action: caracteristicasLocalController.update.bind(caracteristicasLocalController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/caracteristicas-local/:id',
    action: caracteristicasLocalController.delete.bind(caracteristicasLocalController),
    middlewares: [auth],
  },
]

export default caracteristicasLocalRoutes
