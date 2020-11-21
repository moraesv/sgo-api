import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import TipoPistaRepository from '../repositories/TipoPistaRepository'

export default class TipoPistaService {
  constructor() {
    this.tipoPistaRepository = new TipoPistaRepository()
  }

  async index() {
    const tiposPista = await this.tipoPistaRepository.findAll({ order: [['createdAt', 'asc']] })

    return tiposPista.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.tipoPistaRepository.findById(id)
  }

  async store(body) {
    return this.tipoPistaRepository.create({ ...body })
  }

  async update(id, body) {
    const tipoPista = await this.tipoPistaRepository.findById(id)

    return tipoPista.update(body)
  }

  delete(id) {
    return this.tipoPistaRepository.delete(id)
  }
}
