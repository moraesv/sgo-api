import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class FormaSinalizacaoModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_forma_sinalizacao'

  static columns = {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default FormaSinalizacaoModel
