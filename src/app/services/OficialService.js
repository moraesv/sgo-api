import bcrypt from 'bcryptjs'

import OficialRepository from '../repositories/OficialRepository'

export default class OficialService {
  constructor() {
    this.oficialRepository = new OficialRepository()
  }

  index() {
    return this.oficialRepository.findAll()
  }

  show(id) {
    return this.oficialRepository.findById(id)
  }

  async store(body) {
    const passwordHash = await bcrypt.hash(body.senha, bcrypt.genSaltSync())

    return this.oficialRepository.create({ ...body, senha: passwordHash })
  }

  async update(id, body) {
    const oficial = await this.oficialRepository.findById(id)

    return oficial.update(body)
  }

  delete(id) {
    return this.oficialRepository.delete(id)
  }
}
