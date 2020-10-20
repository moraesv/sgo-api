export default class BaseRepository {
  constructor(model) {
    this.model = model.init()
  }

  findAll(options = {}) {
    return this.model.findAll(options)
  }

  findById(id, options = {}) {
    return this.model.findByPk(id, options)
  }

  findOne(options = {}) {
    return this.model.findOne(options)
  }

  create(attributes, options) {
    return this.model.create(attributes, options)
  }

  update(data, id, options = {}) {
    return this.model.update(data, { where: { id }, ...options })
  }

  delete(id, options) {
    return this.model.destroy({ where: { id }, ...options })
  }
}
