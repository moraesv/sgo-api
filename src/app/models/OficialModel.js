import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class OficialModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_oficial'

  static columns = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id_oficial' },
    nomeOficial: { type: DataTypes.STRING, field: 'nome_oficial' },
    nomeUsuario: { type: DataTypes.STRING, field: 'nome_usuario' },
    chapa: DataTypes.STRING,
    funcional: DataTypes.STRING,
    senha: DataTypes.STRING,
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

export default OficialModel
