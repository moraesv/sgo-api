import bcrypt from 'bcryptjs'

import OficialRepository from '../repositories/OficialRepository'

export default class OficialService {
  constructor() {
    this.oficialRepository = new OficialRepository()
  }

  findAll() {
    return this.oficialRepository.findAll()
  }

  async store(user) {
    const passwordHash = await bcrypt.hash(user.senha, bcrypt.genSaltSync())

    return this.oficialRepository.create({ ...user, senha: passwordHash })
  }

  delete(id) {
    return this.oficialRepository.delete(id)
  }
}
