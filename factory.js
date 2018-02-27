//Factory function examples

//This is our "base" object. It is an object literal
//and by itself, doesn't return anything. I just defines an object
const animal = {
		animalType: 'animal',
  		describe () {
			return `A ${this.animalType}, with ${this.furColor} fur, ${this.legs} legs, and a ${this.tail} tail.`;
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
const mouseFactory = (f, t) => { 
	return Object.assign(Object.create(animal), {
		animalType: 'mouse',
		furColor: f,
		legs: 4,
		tail: t
	});
};

// Since our factory returns an object,
const mickey = mouseFactory('brown', 'long, skinny');
console.log('mickey \n',mickey);
console.log(mickey.describe());


const birdFactory = (f = 'feathery', t = 'long, feathery') => {
		return Object.assign(Object.create(animal),{
			animalType: 'bird',
			furColor: f,
			legs: 2,
			tail: t
		});
	};

const tweety = birdFactory();
console.log('tweety \n',tweety);
console.log(tweety.describe());

const bluebird = birdFactory('blue');
console.log('bluebird \n', bluebird);
console.log(bluebird.describe());
