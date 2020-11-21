import AvisoService from '../services/AvisoService'

export default class AvisoController {
  constructor() {
    this.avisoService = new AvisoService()
  }

  async index(request, response) {
    try {
      const avisos = await this.avisoService.index()

      return response.okResponse(avisos)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const aviso = await this.avisoService.show(id)

      return response.okResponse(aviso)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const aviso = await this.avisoService.store(body)

      return response.okResponse(aviso)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const aviso = await this.avisoService.update(id, body)

      return response.okResponse(aviso)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.avisoService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
