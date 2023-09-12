import Dog from './Dog.js';
import Cat from './Cat.js';
import Mouse from './Mouse.js';

var dog = new Dog('Banh');

dog.sayHi();

var cat = new Cat();
var mouse = new Mouse('ngu');
try {
    cat.eat(dog);
} catch (e) {
    console.log('Error while cat eating a dog');
}
console.log(cat);