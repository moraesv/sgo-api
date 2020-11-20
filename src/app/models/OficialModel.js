import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class OficialModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_oficial'

  static columns = {
    nomeOficial: { type: DataTypes.STRING, field: 'nome_oficial' },
    nomeUsuario: { type: DataTypes.STRING, field: 'nome_usuario' },
    chapa: DataTypes.STRING,
    funcional: DataTypes.STRING,
    senha: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    ativo: DataTypes.BOOLEAN,
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
