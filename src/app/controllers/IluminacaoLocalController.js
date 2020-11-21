import IluminacaoLocalService from '../services/IluminacaoLocalService'

export default class IluminacaoLocalController {
  constructor() {
    this.iluminacaoLocalService = new IluminacaoLocalService()
  }

  async index(request, response) {
    try {
      const iluminacoesLocal = await this.iluminacaoLocalService.index()

      return response.okResponse(iluminacoesLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const iluminacaoLocal = await this.iluminacaoLocalService.show(id)

      return response.okResponse(iluminacaoLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const iluminacaoLocal = await this.iluminacaoLocalService.store(body)

      return response.okResponse(iluminacaoLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const iluminacaoLocal = await this.iluminacaoLocalService.update(id, body)

      return response.okResponse(iluminacaoLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.iluminacaoLocalService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
