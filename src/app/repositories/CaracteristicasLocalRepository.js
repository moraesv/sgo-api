import BaseRepository from '../base/BaseRepository'

import CaracteristicasLocalModel from '../models/CaracteristicasLocalModel'

export default class CaracteristicasLocalRepository extends BaseRepository {
  constructor() {
    super(CaracteristicasLocalModel)
  }
}
