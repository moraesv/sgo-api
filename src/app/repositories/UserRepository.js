import BaseRepository from '../../base/BaseRepository'

import UserModel from '../models/UserModel'

export default class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel)
  }
}
