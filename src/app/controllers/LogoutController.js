export default class LogoutController {
  async store(req, res) {
    try {
      return res.noContentResponse()
    } catch (e) {
      return res.internalErrorResponse(e)
    }
  }
}
