import httpStatus from 'http-status'

export default class Response {
  constructor(res) {
    this.init(res)
  }

  init(res) {
    function okResponse(data) {
      return res.status(httpStatus.OK).json(data)
    }

    function createdResponse(data) {
      return res.status(httpStatus.CREATED).json(data)
    }

    function noContentResponse() {
      return res.status(httpStatus.NO_CONTENT).send()
    }

    function notFoundResponse(error) {
      return res.status(httpStatus.NOT_FOUND).json(error)
    }

    function badRequestResponse(error) {
      return res.status(httpStatus.BAD_REQUEST).json(error)
    }

    function unauthorizedResponse(error) {
      return res.status(httpStatus.UNAUTHORIZED).json(error)
    }

    function conflictResponse(error) {
      return res.status(httpStatus.CONFLICT).json(error)
    }

    function internalErrorResponse(error = { message: 'Internal server error' }) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }

    res.okResponse = okResponse
    res.createdResponse = createdResponse
    res.noContentResponse = noContentResponse
    res.notFoundResponse = notFoundResponse
    res.badRequestResponse = badRequestResponse
    res.unauthorizedResponse = unauthorizedResponse
    res.conflictResponse = conflictResponse
    res.internalErrorResponse = internalErrorResponse
  }
}
