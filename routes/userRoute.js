const express = require('express');
const ImportJSONDATA = require('../dev-data/data/import-dev-data');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/upload', ImportJSONDATA.importData);
router.delete('/', ImportJSONDATA.deleteAllData);

router.post('/', userController.createUser);

router
  .route('/')
  .get(userController.getAllUsers)

router
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser)

module.exports = router;

module.exports = router;
