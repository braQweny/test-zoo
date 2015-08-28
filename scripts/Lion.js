Lion.prototype = new Animal();
Lion.prototype.constructor = Elephant;

function Lion(name) {
    this.name = name;
    this.getRoar = function() {
        console.log('xxxxxxxxxxx');
    }
}