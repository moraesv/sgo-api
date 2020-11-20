import OficialRepository from '../repositories/OficialRepository'

export default class ProfileService {
  constructor() {
    this.oficialRepository = new OficialRepository()
  }

  show(id) {
    return this.oficialRepository.findById(id)
  }
}
