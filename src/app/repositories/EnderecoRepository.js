import BaseRepository from '../base/BaseRepository'

import EnderecoModel from '../models/EnderecoModel'

export default class EnderecoRepository extends BaseRepository {
  constructor() {
    super(EnderecoModel)
  }
}
