Lion.prototype = Animal.prototype;
Lion.prototype.constructor = Lion;

function Lion(name) {
    this.name = name;
    this.getRoar = function() {
        console.log('xxxxxxxxxxx');
    }
}