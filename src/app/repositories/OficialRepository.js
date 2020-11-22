import BaseRepository from '../base/BaseRepository'

import OficialModel from '../models/OficialModel'

export default class OficialRepository extends BaseRepository {
  constructor() {
    super(OficialModel)
  }
}
