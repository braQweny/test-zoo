var Animal = require('./Animal');
Lion.prototype = new Animal();
Lion.prototype.constructor = Lion;

function Lion(name) {
    this.name = name;
    this.getRoar = function() {
        console.log('xxxxxxxxxxx');
    }
}
module.exports = Lion;