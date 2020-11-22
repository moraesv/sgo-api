import AtendimentoController from '../controllers/AtendimentoController'
import { auth } from '../middlewares/auth'

const atendimentoController = new AtendimentoController()

const atendimentoRoutes = [
  {
    method: 'get',
    path: '/atendimentos',
    action: atendimentoController.index.bind(atendimentoController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/atendimentos/:id',
    action: atendimentoController.show.bind(atendimentoController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/atendimentos',
    action: atendimentoController.store.bind(atendimentoController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/atendimentos/:id',
    action: atendimentoController.update.bind(atendimentoController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/atendimentos/:id',
    action: atendimentoController.delete.bind(atendimentoController),
    middlewares: [auth],
  },
]

export default atendimentoRoutes
