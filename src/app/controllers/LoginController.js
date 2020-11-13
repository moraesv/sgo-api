import jwt from 'jsonwebtoken'

import jwtConfig from '../config/jwt'

export default class LoginController {
  async store(request, response) {
    try {
      const user = request.getUser()

      const { secret, ...options } = jwtConfig

      const data = {
        id: user.id,
      }

      const token = jwt.sign({ data }, secret, options)

      response.setCookie('access_token', `Bearer ${token}`, this.cookieConfig)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
