jest.dontMock('../app/scripts/Elephant');
jest.dontMock('../app/scripts/Lion');
var Animal = require('../app/scripts/Animal');
var Elephant = require('../app/scripts/Elephant');
var Lion = require('../app/scripts/Lion');
var zoo = new Set();
zoo.add(new Lion('Franek')).add(new Elephant('Maciek')).add(new Lion('Bogdan')).add(new Elephant('Wania')).add(new Elephant('Bożena'));
describe('zoo', function() {
    it('inherit from Animal', function() {
        for (var animal of zoo) {
            expect(Animal.prototype.isPrototypeOf(animal)).toBeTruthy();
            expect(animal instanceof Animal).toBeTruthy();
        }
    });
    it('overwrite method getRoar', function() {
        for (var animal of zoo) {
            expect(animal.hasOwnProperty('getRoar')).toBeTruthy();
        }
    });
});

