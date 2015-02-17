/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var restaurant = require('./restaurant.model');

exports.register = function(socket) {
  restaurant.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  restaurant.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('restaurant:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('restaurant:remove', doc);
}