/* exported getStudentNames */
function getStudentNames(students) {
  var studentsList = [];
  for (let i = 0; i < students.length; i++) {
    studentsList.push(students[i].name);
  }
  return studentsList;
}
