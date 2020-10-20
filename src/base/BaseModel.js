import { Model } from 'sequelize'

import connection from '../app/config/connection'

class BaseModel extends Model {
  static init(model) {
    return super.init(model.columns, {
      tableName: model.tableName,
      sequelize: connection,
    })
  }
}

export default BaseModel
