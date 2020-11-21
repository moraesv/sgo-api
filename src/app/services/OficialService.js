import bcrypt from 'bcryptjs'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import OficialRepository from '../repositories/OficialRepository'

export default class OficialService {
  constructor() {
    this.oficialRepository = new OficialRepository()
  }

  async index() {
    const oficiais = await this.oficialRepository.findAll({ order: [['createdAt', 'asc']] })

    return oficiais.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
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
