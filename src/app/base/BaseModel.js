import { Model } from 'sequelize'

import connection from '../config/connection'

class BaseModel extends Model {
  static modelInstances = {}

  static init(model) {
    if (!this.modelInstances[model.tableName]) {
      this.modelInstances[model.tableName] = super.init(model.columns, {
        tableName: model.tableName,
        sequelize: connection,
        paranoid: true,
      })

      if (model.relations) {
        model.relations.forEach(async (association) => {
          const { relation, model: associateModel, ...options } = association

          const getAssociateModel = (await import(`../models/${associateModel}.js`)).default

          model[relation](getAssociateModel.init(), options)
        })
      }
      return this
    }

    return this.modelInstances[model.tableName]
  }
}

export default BaseModel
