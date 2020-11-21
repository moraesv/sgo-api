import IluminacaoLocalController from '../controllers/IluminacaoLocalController'
import { auth } from '../middlewares/auth'

const iluminacaoLocalController = new IluminacaoLocalController()

const iluminacaoLocalRoutes = [
  {
    method: 'get',
    path: '/iluminacoes-local',
    action: iluminacaoLocalController.index.bind(iluminacaoLocalController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/iluminacoes-local/:id',
    action: iluminacaoLocalController.show.bind(iluminacaoLocalController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/iluminacoes-local',
    action: iluminacaoLocalController.store.bind(iluminacaoLocalController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/iluminacoes-local/:id',
    action: iluminacaoLocalController.update.bind(iluminacaoLocalController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/iluminacoes-local/:id',
    action: iluminacaoLocalController.delete.bind(iluminacaoLocalController),
    middlewares: [auth],
  },
]

export default iluminacaoLocalRoutes
