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


// Not sure how to get totals for piechart out of API
const regular = (req, res, next) => {
  Vehicle.count({ type: 'Regular' })
    .then(count => res.json({ count }))
    .catch(err => next(err));
};

const term = (req, res, next) => {
  Vehicle.count({ type: 'Term' })
    .then(count => res.json({ count }))
    .catch(err => next(err));
};

const valet = (req, res, next) => {
  Vehicle.count({ type: 'Valet' })
    .then(vehicles => res.json({ vehicles }))
    .catch(err => next(err));
};

const count = (req, res, next) => {
  Vehicle.aggregate(
    { $group:
      { _id: '$type', total: { $sum: 1 } }
    }
  )
    .then(vehicles => res.json({ vehicles }))
    .catch(err => next(err));
};

module.exports = {
  index,
  show,
  create,
  destroy,
  regular,
  term,
  valet,
  count
};
