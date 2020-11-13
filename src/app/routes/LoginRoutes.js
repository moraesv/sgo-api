import LoginController from '../controllers/LoginController'
import { local } from '../middlewares/auth'

const loginController = new LoginController()

const loginRoutes = [
  {
    method: 'post',
    path: '/api/login',
    action: loginController.store.bind(loginController),
    middlewares: [local],
  },
]

export default loginRoutes
