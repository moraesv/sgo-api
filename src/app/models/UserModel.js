import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class UserModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'users'

  static columns = {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }

  static relations = [
    {
      relation: 'hasMany',
      model: 'FileModel',
      as: 'files',
      foreignKey: 'userId',
    },
  ]
}

export default UserModel
