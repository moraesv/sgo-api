import AtendimentoService from '../services/AtendimentoService'

export default class AtendimentoController {
  constructor() {
    this.atendimentoService = new AtendimentoService()
  }

  async index(request, response) {
    try {
      const atendimentos = await this.atendimentoService.index()

      return response.okResponse(atendimentos)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const atendimento = await this.atendimentoService.show(id)

      return response.okResponse(atendimento)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const user = request.getUser()
      const body = request.getBody()
      const atendimento = await this.atendimentoService.store(body, user)

      return response.okResponse(atendimento)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const atendimento = await this.atendimentoService.update(id, body)

      return response.okResponse(atendimento)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.atendimentoService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
