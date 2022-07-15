const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'id is required']
  },
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  username: {
    type: String,
    required: [true, 'Please tell us your username!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  address: {
    street: {
      type: String,
      required: [true, 'Please tell us your address!']
    },
    suite: {
      type: String,
      required: [true, 'Please tell us your suite!']
    },
    city: {
      type: String,
      required: [true, 'Please tell us your city!']
    },
    zipcode: {
      type: String,
      //required: [true, 'Please tell us your zipcode!']
    },
    geo: {
      lat: {
        type: String,
        //required: [true, 'Please tell us your latitude!']
      },
      lng: {
        type: String,
        //required: [true, 'Please tell us your longitude!']
      },
    },
  },
  phone: {
    type: String,
    //required: [true, 'Please tell us your phone number!']
  },
  website: {
    type: String,
    //required: [true, 'Please tell us your website!']
  },
  company: {
    name: {
      type: String,
      //required: [true, 'Please tell us your company name!']
    },
    catchPhrase: {
      type: String,
      //required: [true, 'Please tell us your catch phrase!']
    },
    bs: {
      type: String,
      //required: [true, 'Please tell us your bs!']
    },
  },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
