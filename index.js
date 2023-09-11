import Dog from './Dog.js';
import Cat from './Cat.js';

var dog = new Dog('Banh');

dog.sayHi();

var cat = new Cat();
dog.eat(cat);
console.log(dog);