'use strict';

var Animal = require('./Animal');

function HalfManHalfBearHalfPig(name) {
    this.name = name;
};

HalfManHalfBearHalfPig.prototype = new Animal();
HalfManHalfBearHalfPig.prototype.constructor = HalfManHalfBearHalfPig;

module.exports = HalfManHalfBearHalfPig;
