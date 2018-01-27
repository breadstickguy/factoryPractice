//Factory function examples

//This is our "base" object. It is an object literal
//and by itself, doesn't return anything. I just defines an object
let animal = {
		animalType: 'animal',
  		describe () {
			return `A ${this.animalType}, with ${this.furColor} fur, 
			${this.legs} legs, and a ${this.tail} tail.`;
		}
};
console.log('animal \n',animal);

/* By using .assign, we can copy the enumerable properites of an object. 
 * Official docs for Object.assign() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * By using .create, we can create another object.
 * Official docs for Object.create() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * 
 * mouseFactory is a a factory funtion that gives us entirely new objects.
 * By using .create, we leverage the prototype of animal and add in the properties 
 * for the object we want. Since we are using assign, we copy the properties on the 
 * animal object
 */
let mouseFactory = () => { 
	return Object.assign(Object.create(animal), {
		animalType: 'mouse',
		furColor: 'brown',
		legs: 4,
		tail: 'long, skinny'
	});
};

// Since our factory returns an object,
let mickey = mouseFactory();
console.log('mickey \n',mickey);
console.log(mickey.describe());


let birdFactory = (f = 'feathery') => {
		return Object.assign(Object.create(animal),{
			animalType: 'bird',
			furColor: f,
			legs: 2,
			tail: 'long, feathery'
		});
	};

let tweety = birdFactory();
console.log('tweety \n',tweety);
console.log(tweety.describe());

let bluebird = birdFactory('blue');
console.log('bluebird \n', bluebird);
console.log(bluebird.describe());




// console.log(mouse.describe());
// console.log(bluebird.describe());