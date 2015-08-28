Elephant.prototype = Animal.prototype;
Elephant.prototype.constructor = Elephant;

function Elephant(name) {
    this.name = name;
    this.getRoar = function() {
        console.log('####################');
    }
}