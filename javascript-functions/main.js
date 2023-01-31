function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var minutesToSecondsResult = convertMinutesToSeconds(5);
console.log('minutesToSecondsResult:', minutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}
var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}
var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
