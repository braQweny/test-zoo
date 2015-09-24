jest.dontMock('../app/scripts/Animal');
jest.dontMock('../app/scripts/Elephant');
jest.dontMock('../app/scripts/Lion');

var Animal = require('../app/scripts/Animal');
var Elephant = require('../app/scripts/Elephant');
var Lion = require('../app/scripts/Lion');

var zoo = new Set();
zoo.add(new Lion('Franek'));
zoo.add(new Elephant('Maciek'));
zoo.add(new Lion('Bogdan'));
zoo.add(new Elephant('Wania'));
zoo.add(new Elephant('Bożena'));

describe('zoo', function () {

    it('inherit from Animal', function () {

        for (var animal of zoo) {
            expect(Animal.prototype.isPrototypeOf(animal)).toBeTruthy();
            expect(animal instanceof Animal).toBeTruthy();
        }

    });

    it('overwrite method getRoar', function () {

        expect(Elephant.prototype.hasOwnProperty('getRoar')).toBeTruthy();
        expect(Lion.prototype.hasOwnProperty('getRoar')).toBeTruthy();

        for (var x of zoo) {
            expect(x.getRoar()==='xxxxxxxxxxx'||x.getRoar()==='####################').toBeTruthy();
        };

    });

    it('has own name', function () {

        for (var animal of zoo) {
            expect(animal.hasOwnProperty('name')).toBeTruthy();
            expect(animal.name).toBeDefined();
        }

    });

    it('!(getRoar implementation)', function () {

        var testAnimal = new Animal();

        try{
            testAnimal.getRoar();
        }
        
        catch(e){
            expect(e.message).toBe('lack implemented roar');
        }

    });

});
