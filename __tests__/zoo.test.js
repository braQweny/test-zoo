// __tests__/sum-test.js
jest.dontMock('../scripts/Animal');
jest.dontMock('../scripts/Elephant');
jest.dontMock('../scripts/Lion');
// jest.dontMock('../scripts/Zoo');
describe('zoo', function() {
            var Animal = require('../scripts/Animal');
            var Elephant = require('../scripts/Elephant');
            var Lion = require('../scripts/Lion');
            var zoo = new Set();
          
            zoo.add(new Lion('Franek')).add(new Elephant('Maciek')).add(new Lion('Bogdan')).add(new Elephant('Wania')).add(new Elephant('Bożena'));
             it('animal', function() {
            for (var animal of zoo) 
            {
               
                	console.log(animal);
                        expect(Animal.prototype.isPrototypeOf(animal)).toBe(true);
                        expect(animal instanceof Animal).toBe(true);
                        expect(animal.hasOwnProperty('getRoar')).toBe(true);
                       

                }
               } );
            });