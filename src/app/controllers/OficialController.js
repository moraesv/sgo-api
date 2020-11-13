import OficialService from '../services/OficialService'

export default class OficialController {
  constructor() {
    this.oficialService = new OficialService()
  }

  async index(request, response) {
    try {
      const oficiais = await this.oficialService.findAll()

      return response.okResponse(oficiais)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const oficial = await this.oficialService.store(request.getBody())

      return response.okResponse(oficial)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.oficialService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
