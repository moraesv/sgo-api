import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import StatusSemaforoRepository from '../repositories/StatusSemaforoRepository'

export default class StatusSemaforoService {
  constructor() {
    this.statusSemaforoRepository = new StatusSemaforoRepository()
  }

  async index() {
    const statusSemaforo = await this.statusSemaforoRepository.findAll({ order: [['createdAt', 'asc']] })

    return statusSemaforo.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.statusSemaforoRepository.findById(id)
  }

  async store(body) {
    return this.statusSemaforoRepository.create({ ...body })
  }

  async update(id, body) {
    const statusSemaforo = await this.statusSemaforoRepository.findById(id)

    return statusSemaforo.update(body)
  }

  delete(id) {
    return this.statusSemaforoRepository.delete(id)
  }
}
