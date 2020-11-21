import BaseRepository from '../base/BaseRepository'

import FormaSinalizacaoModel from '../models/FormaSinalizacaoModel'

export default class FormaSinalizacaoRepository extends BaseRepository {
  constructor() {
    super(FormaSinalizacaoModel)
  }
}
