import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class AvisoModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_Aviso'

  static columns = {
    titulo: DataTypes.STRING,
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
    descricao: DataTypes.TEXT,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default AvisoModel
