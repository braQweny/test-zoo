Elephant.prototype = new Animal();
Elephant.prototype.constructor = Elephant;

function Elephant(name) {
    this.name = name;
    this.getRoar = function() {
        console.log('####################');
    }
}
var test2 = new Elephant();