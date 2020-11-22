import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class EnderecoModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_enderecos'

  static columns = {
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    referencia: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }

  static relations = []
}

export default EnderecoModel
