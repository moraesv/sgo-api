import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class StatusSemaforoModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_status_semaforo'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default StatusSemaforoModel
