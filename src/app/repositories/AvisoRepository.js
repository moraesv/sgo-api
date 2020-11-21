import BaseRepository from '../base/BaseRepository'

import AvisoModel from '../models/AvisoModel'

export default class AvisoRepository extends BaseRepository {
  constructor() {
    super(AvisoModel)
  }
}
