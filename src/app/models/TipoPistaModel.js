import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class TipoPistaModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_tipo_pista'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default TipoPistaModel
