// import Response from '../base/Response'

export default (error, req, res) => {
  console.error(`\x1b[41m${error}\x1b[0m`) // Erro em vermelho

  /* new Response(res)

  return res.internalErrorResponse(error) */
  return res.status(500).json({ message: 'Internal server error' })
}
