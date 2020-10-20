import UserRepository from '../repositories/UserRepository'

export default class UserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  findAll() {
    return this.userRepository.findAll()
  }
}
