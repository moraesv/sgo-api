import UserController from '../controllers/UserController'

const userController = new UserController()

const userRoutes = [
  {
    method: 'get',
    path: '/users',
    action: userController.index.bind(userController),
    middlewares: [],
  },
]

export default userRoutes
