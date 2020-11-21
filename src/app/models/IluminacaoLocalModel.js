import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class IluminacaoLocalModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_iluminacao_local'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default IluminacaoLocalModel
