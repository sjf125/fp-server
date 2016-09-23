'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')
.resources('vehicles')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })
.get('/vehicles-regular', 'vehicles#regular')
.get('/vehicles-term', 'vehicles#term')
.get('/vehicles-valet', 'vehicles#valet')
.get('/vehicles-count', 'vehicles#count')

// vehicle routes
// .get('/vehicles/:id', 'vehicles#show')
// .get('/vehicles', 'vehicles#index')
// .post('/vehicles', 'vehicles#create')
// .delete('/vehicles/:id', 'vehicles#destroy')

// all routes created
;
