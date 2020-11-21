import BaseRepository from '../base/BaseRepository'

import IluminacaoLocalModel from '../models/IluminacaoLocalModel'

export default class IluminacaoLocalRepository extends BaseRepository {
  constructor() {
    super(IluminacaoLocalModel)
  }
}
