const { ObjectId } = require("mongodb");

class Repository {
  constructor(model) {
    this.model = model;
  }

  /**
   *
   * @param document
   * @returns {Promise<document>}
   */
  async createOne(document) {
    return this.model.create(document);
  }

  /**
   *
   * @param whereClause
   * @param document
   * @returns {Promise<Query|*>}
   */
  async updateOne(whereClause = {}, document) {
    return this.model.updateOne({ _id: whereClause }, document);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>|Promise<*>>}
   */
  async findOne(whereClause = {}, projection = {}) {
    return this.model.findOne({ _id: whereClause }, projection);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>|Promise<*>>}
   */
  async findByUser(whereClause = {}, projection = {}) {
    return this.model.findOne({ email: whereClause }, projection);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<*>}
   */
  async findAll(whereClause = {}, projection = {}) {
    return this.model.find(whereClause, projection);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<*>}
   */
  async findForUser(whereClause = {}, projection = {}) {
    return this.model.find({ _id: { $in: whereClause } }, projection);
  }
}

module.exports = Repository;
