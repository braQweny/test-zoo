function Animal() {}
Animal.prototype.getRoar = function() {
    throw new Error('lack implemented roar');
};
Animal.prototype.name = undefined;
module.exports = animal;