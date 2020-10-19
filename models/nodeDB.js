const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
},{timestamps: true});

const NodeDB = mongoose.model('NodeDB', dbSchema);

module.exports = NodeDB;