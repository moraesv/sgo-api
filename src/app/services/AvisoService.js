import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import AvisoRepository from '../repositories/AvisoRepository'

export default class AvisoService {
  constructor() {
    this.avisoRepository = new AvisoRepository()
  }

  async index() {
    const tiposPista = await this.avisoRepository.findAll({ order: [['createdAt', 'asc']] })

    return tiposPista.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.avisoRepository.findById(id)
  }

  async store(body) {
    return this.avisoRepository.create({ ...body })
  }

  async update(id, body) {
    const aviso = await this.avisoRepository.findById(id)

    return aviso.update(body)
  }

  delete(id) {
    return this.avisoRepository.delete(id)
  }
}
