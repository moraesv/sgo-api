import Request from '../base/Request'
import Response from '../base/Response'

export default (error, req, res) => {
  console.error(`\x1b[41m${error}\x1b[0m`) // Erro em vermelho

  const response = new Response(res, new Request(req))

  return response.internalErrorResponse(error)
}
