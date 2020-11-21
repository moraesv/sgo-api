import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import TempoLocalRepository from '../repositories/TempoLocalRepository'

export default class TempoLocalService {
  constructor() {
    this.tempoLocalRepository = new TempoLocalRepository()
  }

  async index() {
    const temposLocal = await this.tempoLocalRepository.findAll({ order: [['createdAt', 'asc']] })

    return temposLocal.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.tempoLocalRepository.findById(id)
  }

  async store(body) {
    return this.tempoLocalRepository.create({ ...body })
  }

  async update(id, body) {
    const tempoLocal = await this.tempoLocalRepository.findById(id)

    return tempoLocal.update(body)
  }

  delete(id) {
    return this.tempoLocalRepository.delete(id)
  }
}
