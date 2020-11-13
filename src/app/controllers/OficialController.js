import OficialService from '../services/OficialService'

export default class OficialController {
  constructor() {
    this.oficialService = new OficialService()
  }

  async index(request, response) {
    try {
      const oficiais = await this.oficialService.index()

      return response.okResponse(oficiais)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const oficial = await this.oficialService.show(id)

      return response.okResponse(oficial)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const oficial = await this.oficialService.store(body)

      return response.okResponse(oficial)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const oficial = await this.oficialService.update(id, body)

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
