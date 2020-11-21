import FormaSinalizacaoController from '../controllers/FormaSinalizacaoController'
import { auth } from '../middlewares/auth'

const formaSinalizacaoController = new FormaSinalizacaoController()

const formaSinalizacaoRoutes = [
  {
    method: 'get',
    path: '/formas-sinalizacao',
    action: formaSinalizacaoController.index.bind(formaSinalizacaoController),
    middlewares: [auth],
  },
  {
    method: 'get',
    path: '/formas-sinalizacao/:id',
    action: formaSinalizacaoController.show.bind(formaSinalizacaoController),
    middlewares: [auth],
  },
  {
    method: 'post',
    path: '/formas-sinalizacao',
    action: formaSinalizacaoController.store.bind(formaSinalizacaoController),
    middlewares: [auth],
  },
  {
    method: 'put',
    path: '/formas-sinalizacao/:id',
    action: formaSinalizacaoController.update.bind(formaSinalizacaoController),
    middlewares: [auth],
  },
  {
    method: 'delete',
    path: '/formas-sinalizacao/:id',
    action: formaSinalizacaoController.delete.bind(formaSinalizacaoController),
    middlewares: [auth],
  },
]

export default formaSinalizacaoRoutes
