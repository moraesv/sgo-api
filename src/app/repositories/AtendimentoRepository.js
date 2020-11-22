import BaseRepository from '../base/BaseRepository'

import AtendimentoModel from '../models/AtendimentoModel'

export default class AtendimentoRepository extends BaseRepository {
  constructor() {
    super(AtendimentoModel)
  }
}
