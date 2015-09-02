var Animal = require('./Animal');
Lion.prototype = new Animal();
Lion.prototype.getRoar = function() {
    console.log('xxxxxxxxxxx');
}

function Lion(name) {
    this.name = name;
}
Lion.prototype.constructor = Lion;
module.exports = Lion;