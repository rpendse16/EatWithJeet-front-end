'use strict';

var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Restaurant;
var Schema = mongoose.Schema;

var keywordSchema = new Schema({
	text: String,
	relevance: String,
	sentiment: {}
});

var restaurantSchema = new Schema({
  name:  String,
  url_name: String,
  keywords: [keywordSchema]
});

Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = mongoose.model('Restaurant', restaurantSchema);