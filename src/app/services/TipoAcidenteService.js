import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import TipoAcidenteRepository from '../repositories/TipoAcidenteRepository'

export default class TipoAcidenteService {
  constructor() {
    this.tipoAcidenteRepository = new TipoAcidenteRepository()
  }

  async index() {
    const tiposAcidente = await this.tipoAcidenteRepository.findAll({ order: [['createdAt', 'asc']] })

    return tiposAcidente.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.tipoAcidenteRepository.findById(id)
  }

  async store(body) {
    return this.tipoAcidenteRepository.create({ ...body })
  }

  async update(id, body) {
    const tipoAcidente = await this.tipoAcidenteRepository.findById(id)

    return tipoAcidente.update(body)
  }

  delete(id) {
    return this.tipoAcidenteRepository.delete(id)
  }
}
