import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class TipoAcidenteModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_tipo_acidente'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default TipoAcidenteModel
