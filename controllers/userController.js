const UserModel = require('../models/userModel');
const factory = require('./handlerFactory');
const dev_data = require('./../dev-data/data/import-dev-data');

exports.createUser = factory.createOne(UserModel)
exports.getUser = factory.getOne(UserModel);
exports.getAllUsers = factory.getAll(UserModel);
exports.deleteUser = factory.deleteOne(UserModel);
exports.updateUser = factory.updateOne(UserModel);

