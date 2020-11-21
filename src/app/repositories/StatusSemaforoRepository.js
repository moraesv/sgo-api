import BaseRepository from '../base/BaseRepository'

import StatusSemaforoModel from '../models/StatusSemaforoModel'

export default class CaracteristicasLocalRepository extends BaseRepository {
  constructor() {
    super(StatusSemaforoModel)
  }
}
