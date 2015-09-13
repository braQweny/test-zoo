'use strict';

function Animal() {};

Animal.prototype.name = undefined;
Animal.prototype.getRoar = function () {
    throw new Error('lack implemented roar');
};

module.exports = Animal;