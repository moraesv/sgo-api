import CaracteristicasLocalService from '../services/CaracteristicasLocalService'

export default class CaracteristicasLocalController {
  constructor() {
    this.caracteristicasLocalService = new CaracteristicasLocalService()
  }

  async index(request, response) {
    try {
      const caracteristicasLocal = await this.caracteristicasLocalService.index()

      return response.okResponse(caracteristicasLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async show(request, response) {
    try {
      const { id } = request.routeParams()
      const caracteristicaLocal = await this.caracteristicasLocalService.show(id)

      return response.okResponse(caracteristicaLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async store(request, response) {
    try {
      const body = request.getBody()
      const caracteristicaLocal = await this.caracteristicasLocalService.store(body)

      return response.okResponse(caracteristicaLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async update(request, response) {
    try {
      const { id } = request.routeParams()
      const body = request.getBody()
      const caracteristicaLocal = await this.caracteristicasLocalService.update(id, body)

      return response.okResponse(caracteristicaLocal)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.routeParams()
      await this.caracteristicasLocalService.delete(id)

      return response.noContentResponse()
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
