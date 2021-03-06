import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import AtendimentoRepository from '../repositories/AtendimentoRepository'
import EnderecoRepository from '../repositories/EnderecoRepository'
import EnderecoModel from '../models/EnderecoModel'
import OficialModel from '../models/OficialModel'

export default class AtendimentoService {
  constructor() {
    this.atendimentoRepository = new AtendimentoRepository()
    this.enderecoRepository = new EnderecoRepository()
    this.enderecoModel = EnderecoModel.init()
    this.oficialModel = OficialModel.init()
  }

  async index() {
    const atendimentos = await this.atendimentoRepository.findAll({
      order: [['createdAt', 'asc']],
      include: [
        { model: this.enderecoModel, as: 'endereco' },
        { model: this.oficialModel, as: 'oficial' },
      ],
    })

    return atendimentos.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy HH:mm', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.atendimentoRepository.findById(id, {
      include: [
        { model: this.enderecoModel, as: 'endereco' },
        { model: this.oficialModel, as: 'oficial' },
      ],
    })
  }

  async store(body, user) {
    const endereco = await this.enderecoRepository.create({ ...body.endereco })
    return this.atendimentoRepository.create({ ...body, enderecoId: endereco.id, oficialId: user.id })
  }

  async update(id, body) {
    await this.enderecoRepository.update({ ...body.endereco }, body.enderecoId)
    const atendimento = await this.atendimentoRepository.findById(id)

    return atendimento.update(body)
  }

  delete(id) {
    return this.atendimentoRepository.delete(id)
  }
}
