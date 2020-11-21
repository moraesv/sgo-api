import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import CaracteristicasLocalRepository from '../repositories/CaracteristicasLocalRepository'

export default class CaracteristicasLocalService {
  constructor() {
    this.caracteristicasLocalRepository = new CaracteristicasLocalRepository()
  }

  async index() {
    const caracteristicasLocal = await this.caracteristicasLocalRepository.findAll({ order: [['createdAt', 'asc']] })

    return caracteristicasLocal.map((oficial) => {
      return {
        ...oficial.toJSON(),
        criadoEm: format(new Date(oficial.createdAt), 'dd/MM/yyyy', { locale: ptBr }),
      }
    })
  }

  show(id) {
    return this.caracteristicasLocalRepository.findById(id)
  }

  async store(body) {
    return this.caracteristicasLocalRepository.create({ ...body })
  }

  async update(id, body) {
    const caracteristicaLocal = await this.caracteristicasLocalRepository.findById(id)

    return caracteristicaLocal.update(body)
  }

  delete(id) {
    return this.caracteristicasLocalRepository.delete(id)
  }
}
