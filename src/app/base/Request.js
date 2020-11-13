import { setContextUser, getContextUser } from './auth'

export default class Request {
  constructor(req) {
    this.init(req)
  }

  init(req) {
    function getBody() {
      return {
        ...req.body,
      }
    }

    function queryParams() {
      return {
        ...req.query,
      }
    }

    function routeParams() {
      return {
        ...req.params,
      }
    }

    function getUser() {
      return getContextUser()
    }

    function setUser(user) {
      setContextUser(user)
    }

    req.getBody = getBody
    req.queryParams = queryParams
    req.routeParams = routeParams
    req.getUser = getUser
    req.setUser = setUser
  }
}
