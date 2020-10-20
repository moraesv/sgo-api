import { Sequelize } from 'sequelize'

import dbConfig from './database'

const connection = new Sequelize(dbConfig)

export default connection
