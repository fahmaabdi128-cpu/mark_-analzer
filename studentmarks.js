// student marks analzer

const students = [
    { name: "amina", marks: [78, 82, 91, 66] },
    { name: "brian", marks: [55, 49, 61,58] },
    { name:  "cynthia", marks:[88, 90,84,92] },
    { name:  "david",   marks:[40, 35, 52, 47]},
    { name:   "elisa",   marks:[70,73,68, 75]}
]

const report = [];
let passcount = 0;
let failcount = 0;
let topstudent = null;
let loweststudent = null;

for (let i= 0; i < students.length; i++)
{
    let total = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
        total += students[i].marks[j];
    }

    let average = total / students[i].marks.length;
    
    let grade
    if (average >= 80) {
        grade = "A";
    }else if (average >= 70) {
        grade = "B";
    }else if (average >= 60) {
        grade = "C";
    }else if (average >= 50) {
        grade ="D";
    }else {
        grade = "E";
    }

  let statu;
  if (average >= 60) {
    status = "pass";
    passcount++;
  } else {
    status = "FAIL";
    failcount++;
  }

 if  (topstudent === null || average > topstudent.average) {
    topstudent = {name: students[i]. name, average: average};
 }

  if (loweststudent === null || average <loweststudent.average){
    loweststudent = {name: students[i]. name, average: average};
  }
  report.push( {
    name: students[i].name,
average: average. toFixed(2),
grade: grade,
status: status
  });
}
// print report
for (let i = 0; i < report.length; i++) {
    console.log(
        report[i].name +
        " |avg" + report[i].average +
        " |grade" + report[i].grade +
        " |    "   + report[i].status
    );
}
// sumarry
console.log("/nclass sumarry");
console.log("student:, students.length");
console.log("pass:passcount");
console .log("fail, failcount");
console.log("top student");

  

  
