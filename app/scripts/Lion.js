'use strict';

var Animal = require('./Animal');

function Lion(name) {
    this.name = name;
};

Lion.prototype = new Animal();
Lion.prototype.constructor = Lion;

Lion.prototype.getRoar = function () {
    console.log('xxxxxxxxxxx');
};

module.exports = Lion;