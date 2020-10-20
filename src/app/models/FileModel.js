import { DataTypes } from 'sequelize'

import appConfig from '../config/app'

import BaseModel from '../base/BaseModel'

class FileModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'files'

  static columns = {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mimeType: DataTypes.STRING,
    size: DataTypes.STRING,
    temporary: DataTypes.BOOLEAN,
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${appConfig.url}:${appConfig.port}/uploads/${this.name}`
      },
    },
  }

  static relations = [
    {
      relation: 'belongsTo',
      model: 'UserModel',
      as: 'user',
      foreignKey: 'userId',
    },
  ]
}

export default FileModel
