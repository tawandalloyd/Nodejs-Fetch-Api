const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./../../models/userModel');

// READ JSON FILE
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async (req,res) => {
  try {
    await User.create(users, { validateBeforeSave: false });
    console.log('Data successfully loaded!');
    res.status(200).json({
      status: 'success',
      message: 'loaded data successfully!'
    });

  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async (req,res) => {
  try {
    await User.deleteMany();
    res.status(200).json({
      status: 'success',
      message: 'deleted!'
    });
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// if (process.argv[2] === '--import') {
//   importData();
// } else if (process.argv[2] === '--delete') {
//   deleteData();
// }


exports.importData = importData;
exports.deleteAllData = deleteData;
