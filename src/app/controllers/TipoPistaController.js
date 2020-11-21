import TipoPistaService from '../services/TipoPistaService'

export default class TipoPistaController {
  constructor() {
    this.tipoPistaService = new TipoPistaService()
  }

  async index(request, response) {
    try {
      const tiposPista = await this.tipoPistaService.index()

      return response.okResponse(tiposPista)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const tipoPista = await this.tipoPistaService.show(id)

      return response.okResponse(tipoPista)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const tipoPista = await this.tipoPistaService.store(body)

      return response.okResponse(tipoPista)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const tipoPista = await this.tipoPistaService.update(id, body)

      return response.okResponse(tipoPista)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.tipoPistaService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
