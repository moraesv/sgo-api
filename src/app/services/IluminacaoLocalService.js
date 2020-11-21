import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import IluminacaoLocalRepository from '../repositories/IluminacaoLocalRepository'

export default class IluminacaoLocalService {
  constructor() {
    this.iluminacaoLocalRepository = new IluminacaoLocalRepository()
  }

  async index() {
    const iluminacoesLocal = await this.iluminacaoLocalRepository.findAll({ order: [['createdAt', 'asc']] })

    return iluminacoesLocal.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.iluminacaoLocalRepository.findById(id)
  }

  async store(body) {
    return this.iluminacaoLocalRepository.create({ ...body })
  }

  async update(id, body) {
    const iluminacaoLocal = await this.iluminacaoLocalRepository.findById(id)

    return iluminacaoLocal.update(body)
  }

  delete(id) {
    return this.iluminacaoLocalRepository.delete(id)
  }
}
