'use strict';

const models = require('app/models');
const Vehicle = models.vehicle;


const index = (req, res, next) => {
  Vehicle.find()
    .then(vehicles => res.json({ vehicles }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Vehicle.findById(req.params.id)
    .then(vehicle => vehicle ? res.json({ vehicle }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let vehicle = Object.assign(req.body.vehicle);
  Vehicle.create(vehicle)
    .then(vehicle => res.json({ vehicle }))
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id };
  Vehicle.findOne(search)
    .then(vehicle => {
      if (!vehicle) {
        return next();
      }

      return vehicle.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = {
  index,
  show,
  create,
  destroy,
};
