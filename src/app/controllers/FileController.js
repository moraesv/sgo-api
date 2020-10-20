import FileService from '../services/FileService'

export default class FileController {
  constructor() {
    this.fileService = new FileService()
  }

  async show(request, response) {
    try {
      const { id, name } = request.routeParams()

      const file = await this.fileService.find(id, name)

      return response.okResponse(file)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }

  async upload(request, response) {
    try {
      const file = await this.fileService.upload(request.file)

      return response.okResponse(file)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
