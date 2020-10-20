import UserService from '../services/UserService'

export default class UserController {
  constructor() {
    this.userService = new UserService()
  }

  async index(request, response) {
    try {
      const users = await this.userService.findAll()

      return response.okResponse(users)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
