import BaseRepository from '../base/BaseRepository'

import TipoPistaModel from '../models/TipoPistaModel'

export default class TipoPistaRepository extends BaseRepository {
  constructor() {
    super(TipoPistaModel)
  }
}
