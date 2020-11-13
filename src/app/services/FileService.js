import connection from '../config/connection'
import OficialModel from '../models/OficialModel'

import FileRepository from '../repositories/FileRepository'

export default class FileService {
  constructor() {
    this.fileRepository = new FileRepository()
    this.connection = connection
  }

  find(id, name) {
    return this.fileRepository.findOne({
      where: {
        id,
        name,
      },
      include: [{ model: OficialModel, as: 'user' }],
    })
  }

  async upload(data) {
    const transaction = await this.connection.transaction()

    try {
      const fileToUpload = {
        userId: 1,
        name: data.filename,
        mimeType: data.mimetype,
        size: data.size,
      }

      const file = await this.fileRepository.create(fileToUpload, { transaction })

      transaction.commit()
      return file
    } catch (e) {
      transaction.rollback()
      throw e
    }
  }

  setTemporary(id, temporary = false, options = {}) {
    return this.fileRepository.update(
      {
        temporary,
      },
      {
        where: {
          id,
        },
        ...options,
      }
    )
  }
}
