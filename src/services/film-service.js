const filmModel = require("../models/film-model");
const Repository = require("../models/repository");

/**
 *
 * @param data
 * @returns {Promise<document>}
 */
const createOne = async (data) => {
  const repository = new Repository(filmModel);
  return repository.createOne(data);
};

/**
 *
 * @param whereClause
 * @param data
 * @returns {Promise<Query|*>}
 */
const updateOne = async (whereClause, data) => {
  const repository = new Repository(filmModel);
  return repository.updateOne({ ...whereClause, _id: whereClause._id }, data);
};

/**
 *
 * @param whereClause
 * @param projection
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const findOne = async (whereClause, projection = {}) => {
  const repository = new Repository(filmModel);
  return repository.findOne(whereClause, projection);
};

/**
 *
 * @param whereClause
 * @param projection
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const findAll = async (whereClause, projection = {}) => {
  const repository = new Repository(filmModel);
  return repository.findAll(whereClause, projection);
};

/**
 *
 * @param whereClause
 * @param projection
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const findForUser = async (whereClause, projection = {}) => {
  const repository = new Repository(filmModel);
  return repository.findForUser(whereClause, projection);
};

module.exports = { createOne, updateOne, findOne, findAll, findForUser };
