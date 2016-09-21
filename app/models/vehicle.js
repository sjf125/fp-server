'use strict';

const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Regular', 'Term', 'Valet'],
    default: 'Regular'
  },
}, {
  timestamps: true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
