import BaseRepository from '../base/BaseRepository'

import TipoAcidenteModel from '../models/TipoAcidenteModel'

export default class TipoAcidenteRepository extends BaseRepository {
  constructor() {
    super(TipoAcidenteModel)
  }
}
