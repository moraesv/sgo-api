import ProfileController from '../controllers/ProfileController'
import { auth } from '../middlewares/auth'

const profileController = new ProfileController()

const profileRoutes = [
  {
    method: 'get',
    path: '/profile',
    action: profileController.show.bind(profileController),
    middlewares: [auth],
  },
]

export default profileRoutes
