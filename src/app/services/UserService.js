import FileModel from '../models/FileModel'
import UserRepository from '../repositories/UserRepository'

export default class UserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  findAll() {
    return this.userRepository.findAll({ include: [{ model: FileModel, as: 'files' }] })
  }

  delete(id) {
    return this.userRepository.delete(id)
  }
}
