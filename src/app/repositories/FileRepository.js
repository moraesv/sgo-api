import BaseRepository from '../base/BaseRepository'

import FileModel from '../models/FileModel'

export default class FileRepository extends BaseRepository {
  constructor() {
    super(FileModel)
  }
}
