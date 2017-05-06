// require express and the burgers model
var express = require('express');
var burgers = require('../models/burgers.js');

// export routes
module.exports = function(app) {
	// get root
	app.get('/', function(request, response) {
		burgers.allBurgers(function(data) {
			response.render('index', {
				wholeBurgers: data.whole,
				devouredBurgers: data.devoured
			});
		});
	});

	//api/burgers route all data
	app.get('/api/burgers', function(request, response) {
		burgers.allBurgers(function(data) {
			response.json(data);
		});
	});

	//create burger
	app.post('/', function(request, response) {
		var newBurger = request.body.burger;
		if(newBurger === '') {
			response.redirect('/');
			return;
		}
		burger.create(newBurger, function() {
			response.redirect('/');
		});
	});

	// update burger
	app.put('/:id', function(request, response) {
		response.redirect('/');
	});
};
