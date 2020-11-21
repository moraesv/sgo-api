import TipoAcidenteService from '../services/TipoAcidenteService'

export default class TipoAcidenteController {
  constructor() {
    this.tipoAcidenteService = new TipoAcidenteService()
  }

  async index(request, response) {
    try {
      const tiposAcidente = await this.tipoAcidenteService.index()

      return response.okResponse(tiposAcidente)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const tipoAcidente = await this.tipoAcidenteService.show(id)

      return response.okResponse(tipoAcidente)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const tipoAcidente = await this.tipoAcidenteService.store(body)

      return response.okResponse(tipoAcidente)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const tipoAcidente = await this.tipoAcidenteService.update(id, body)

      return response.okResponse(tipoAcidente)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.tipoAcidenteService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
