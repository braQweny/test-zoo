var Animal = require('./Animal');
Elephant.prototype = new Animal();
Elephant.prototype.getRoar = function () {
    console.log('####################');
}

function Elephant(name) {
    this.name = name;
}
Elephant.prototype.constructor = Elephant;
module.exports = Elephant;