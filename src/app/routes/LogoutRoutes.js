import LogoutController from '../controllers/LogoutController'
import logout from '../middlewares/logout'

const logoutController = new LogoutController()

const logoutRoutes = [
  {
    method: 'post',
    path: '/logout',
    action: logoutController.store.bind(logoutController),
    middlewares: [logout],
  },
]

export default logoutRoutes
