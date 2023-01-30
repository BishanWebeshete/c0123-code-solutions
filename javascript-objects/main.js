var student = {
  firstName: 'Bishan',
  lastName: 'Webeshete',
  age: 23
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Operations Associate';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Volvo',
  model: 'XC90',
  year: 2008
};
var color = vehicle['color'] = 'silver';
console.log('value of vehicle["color"]: ', color);
var isConvertible = vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]: ', isConvertible);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Lord Stanley',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
