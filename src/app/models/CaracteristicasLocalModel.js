import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class CaracteristicasLocalModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_caracteristicas_local'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default CaracteristicasLocalModel
