import TempoLocalService from '../services/TempoLocalService'

export default class TempoLocalController {
  constructor() {
    this.tempoLocalService = new TempoLocalService()
  }

  async index(request, response) {
    try {
      const temposLocal = await this.tempoLocalService.index()

      return response.okResponse(temposLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const tempoLocal = await this.tempoLocalService.show(id)

      return response.okResponse(tempoLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const tempoLocal = await this.tempoLocalService.store(body)

      return response.okResponse(tempoLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const tempoLocal = await this.tempoLocalService.update(id, body)

      return response.okResponse(tempoLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.tempoLocalService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
