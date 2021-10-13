const userModel = require("../models/user-model");
const Repository = require("../models/repository");

/**
 *
 * @param data
 * @returns {Promise<document>}
 */
const createOne = async (data) => {
  const repository = new Repository(userModel);
  return repository.createOne(data);
};

/**
 *
 * @param whereClause
 * @param data
 * @returns {Promise<Query|*>}
 */
const updateOne = async (whereClause, data) => {
  const repository = new Repository(userModel);
  return repository.updateOne({ ...whereClause, _id: whereClause._id }, data);
};

/**
 *
 * @param whereClause
 * @param projection
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const findOne = async (whereClause, projection = {}) => {
  const repository = new Repository(userModel);
  return repository.findOne(
    { ...whereClause, _id: whereClause._id },
    projection
  );
};

const findByUser = async (whereClause, projection = {}) => {
  const repository = new Repository(userModel);
  return repository.findByUser(whereClause, projection);
};

module.exports = { createOne, updateOne, findOne, findByUser };
