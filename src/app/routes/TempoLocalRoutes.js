import TempoLocalController from '../controllers/TempoLocalController'
import { auth } from '../middlewares/auth'

const tempoLocalController = new TempoLocalController()

const tempoLocalRoutes = [
  {
    method: 'get',
    path: '/tempos-local',
    action: tempoLocalController.index.bind(tempoLocalController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/tempos-local/:id',
    action: tempoLocalController.show.bind(tempoLocalController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/tempos-local',
    action: tempoLocalController.store.bind(tempoLocalController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/tempos-local/:id',
    action: tempoLocalController.update.bind(tempoLocalController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/tempos-local/:id',
    action: tempoLocalController.delete.bind(tempoLocalController),
    middlewares: [auth],
  },
]

export default tempoLocalRoutes
