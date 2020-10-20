import Request from '../../base/Request'
import Response from '../../base/Response'

export default (error, req, res, next) => {
  console.error(`\x1b[41m${err}\x1b[0m`) //Erro em vermelho

  const response = new Response(res, new Request(req))

  return response.internalErrorResponse(error)
}
