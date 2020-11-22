import { DataTypes } from 'sequelize'

import BaseModel from '../base/BaseModel'

class AtendimentoModel extends BaseModel {
  static init() {
    return super.init(this)
  }

  static tableName = 'tb_atendimentos'

  static columns = {
    telefone: DataTypes.STRING,
    descricao: DataTypes.STRING,
    horaAtendimento: DataTypes.TIME,
    inicioAtuacao: DataTypes.TIME,
    fimAtuacao: DataTypes.TIME,
    formaSolicitacao: DataTypes.INTEGER,
    nomeSolicitante: DataTypes.STRING,
    qualificadoEnvolvido: DataTypes.BOOLEAN,
    outros: DataTypes.STRING,
    enderecoId: DataTypes.INTEGER,
    oficialId: DataTypes.INTEGER,
    finalizado: DataTypes.BOOLEAN,
  }

  static relations = [
    {
      relation: 'belongsTo',
      model: 'EnderecoModel',
      as: 'endereco',
      foreignKey: 'enderecoId',
    },
    {
      relation: 'belongsTo',
      model: 'OficialModel',
      as: 'oficial',
      foreignKey: 'oficialId',
    },
  ]
}

export default AtendimentoModel
