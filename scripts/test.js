for (var animal of zoo) {
	console.log(animal);
	console.log(Animal.prototype.isPrototypeOf(animal));
	console.log(animal instanceof Animal);
	console.log(animal.hasOwnProperty('getRoar'));
}