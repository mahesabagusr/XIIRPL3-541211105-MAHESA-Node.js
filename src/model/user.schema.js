const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Harap Masukkan Nama'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Harap Masukkan Email'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Harap Masukkan Email yang valid']
  }
});

module.exports = mongoose.model('User', UserSchema);