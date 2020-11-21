import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class TempoLocalModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_tempo_local'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default TempoLocalModel
