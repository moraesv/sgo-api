import StatusSemaforoService from '../services/StatusSemaforoService'

export default class StatusSemaforoController {
  constructor() {
    this.statusSemaforoService = new StatusSemaforoService()
  }

  async index(request, response) {
    try {
      const statusesSemaforo = await this.statusSemaforoService.index()

      return response.okResponse(statusesSemaforo)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const statusSemaforo = await this.statusSemaforoService.show(id)

      return response.okResponse(statusSemaforo)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const statusSemaforo = await this.statusSemaforoService.store(body)

      return response.okResponse(statusSemaforo)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const statusSemaforo = await this.statusSemaforoService.update(id, body)

      return response.okResponse(statusSemaforo)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.statusSemaforoService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
