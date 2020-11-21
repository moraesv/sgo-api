import BaseRepository from '../base/BaseRepository'

import TempoLocalModel from '../models/TempoLocalModel'

export default class TempoLocalRepository extends BaseRepository {
  constructor() {
    super(TempoLocalModel)
  }
}
