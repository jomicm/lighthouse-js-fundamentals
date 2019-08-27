const sayHello = function() {
  console.log('Hello, world');
}
sayHello();

const sayHello2 = function(name){
  console.log('Hello, ' + name);
}

sayHello2('Juanito');
sayHello2('Mary');
sayHello2('Miranda');

const sayHelloToConsole = function (name) {
  console.log('Hello, ' + name);
}
sayHelloToConsole('Johny');

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);