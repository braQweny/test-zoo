'use strict';

function Animal() {
    this.name = undefined;
};

Animal.prototype.getRoar = function () {
    throw new Error('lack implemented roar');
};

module.exports = Animal;
