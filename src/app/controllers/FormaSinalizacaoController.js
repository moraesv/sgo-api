import FormaSinalizacaoService from '../services/FormaSinalizacaoService'

export default class FormaSinalizacaoController {
  constructor() {
    this.formaSinalizacaoService = new FormaSinalizacaoService()
  }

  async index(request, response) {
    try {
      const formasSinalizacao = await this.formaSinalizacaoService.index()

      return response.okResponse(formasSinalizacao)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const formaSinalizacao = await this.formaSinalizacaoService.show(id)

      return response.okResponse(formaSinalizacao)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const formaSinalizacao = await this.formaSinalizacaoService.store(body)

      return response.okResponse(formaSinalizacao)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const formaSinalizacao = await this.formaSinalizacaoService.update(id, body)

      return response.okResponse(formaSinalizacao)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.formaSinalizacaoService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
