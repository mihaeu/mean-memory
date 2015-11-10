var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memberSchema = require('../models/Member');

var projectSchema = new Schema({
  name: {type: String, default: '', required: true},
  description: {type: String, default: ''},
  members: [memberSchema]
});

module.exports = {
  model: mongoose.model('Project', projectSchema),
  schema: projectSchema
};

