// require the orm
var orm = require('../config/orm.js');

// export the model
module.exports = {
	allBurgers		: burgers,
	wholeBurgers	: wholeBurgers,
	devouredBurgers	: devouredBurgers,
	create			: create,
	singleBurger	: singleBurger,
	update			: update
};

// get all the burgers return object with whole and devoured burgers
function burgers(callBack) {
	var object = {};
	wholeBurgers(function(data) {
		object.whole = data;
		devouredBurgers(function(data) {
			object.devoured = data;
			callBack(object);
		});
	});
}

// query the database for whole burgers
function wholeBurgers(callBack) {
	orm.selectBurger('burgers', 'devoured', false, function(data) {
		callBack(data);
	});
}

// query the database for devoured burgers
function devouredBurgers(callBack) {
	orm.selectBurger('burgers', 'devoured', true, function(data) {
		callBack(data);
	});
}

// query the database for single burger
function singleBurger(burgers, callBack) {
	orm.selectOne('burgers', burgers, function(data) {
		callBack(data);
	});
}

// update a burger
function update(burgers, callBack) {
	orm.updateOne('burgers', 'devoured', true, burgers, function() {
		callBack();
	});
}

// create a burger
function create(burgers, callBack) {
	orm.insertOne('burgers', 'burger_name', burgers, function(){
		callBack();
	});
}