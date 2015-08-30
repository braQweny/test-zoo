var Animal = require('./Animal');
var Elephant = require('./Elephant');
var Lion = require('./Lion');

var zoo = new Set();
zoo.add(new Lion('Franek'))
	.add(new Elephant('Maciek'))
	.add(new Lion('Bogdan'))
	.add(new Elephant('Wania'))
	.add(new Elephant('Bożena'));


module.exports = zoo;