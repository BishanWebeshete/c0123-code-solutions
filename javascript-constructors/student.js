/* exported Student */
function Student(first, last, subject) {
  this.firstName = first;
  this.lastName = last;
  this.subject = subject;
  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  this.getIntroduction = function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  };
}

Student.prototype.getFullName = function () {
  return this.getFullName;
};

Student.prototype.getIntroduction = function () {
  return this.getIntroduction;
};
