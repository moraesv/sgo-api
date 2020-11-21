import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import FormaSinalizacaoRepository from '../repositories/FormaSinalizacaoRepository'

export default class FormaSinalizacaoService {
  constructor() {
    this.formaSinalizacaoRepository = new FormaSinalizacaoRepository()
  }

  async index() {
    const formasSinalizacao = await this.formaSinalizacaoRepository.findAll({ order: [['createdAt', 'asc']] })

    return formasSinalizacao.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.formaSinalizacaoRepository.findById(id)
  }

  async store(body) {
    return this.formaSinalizacaoRepository.create({ ...body })
  }

  async update(id, body) {
    const formaSinalizacao = await this.formaSinalizacaoRepository.findById(id)

    return formaSinalizacao.update(body)
  }

  delete(id) {
    return this.formaSinalizacaoRepository.delete(id)
  }
}
