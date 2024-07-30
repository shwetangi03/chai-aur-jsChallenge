// task - 1
class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  print() {
    return "Hii... " + this.fname + " age is " + this.age;
  }
  updatedAge(newAge) {
    this.age = newAge;
  }
  static genericGreet() {
    return "hello!! Shwetangi";
  }
  get fullname() {
    return `${this.fname} ${this.lname}`;
  }
  set name({ firstname, lastname }) {
    return `${firstname} ${lastname}`;
  }
}
const person = new Person("shwetangi", "chaurasiya", 21);
console.log(person.print());

// task - 2
person.updatedAge(22);
console.log(person.print());

// task - 3
class Student extends Person {
  static stuCount = 0;
  constructor(fname, age, studentId) {
    super(fname, age);
    this.studentId = studentId;
    Student.stuCount++;
  }
  printId() {
    return `student ID ${this.studentId}`;
  }
  print() {
    return `${this.fname} ${this.age} student ID ${this.studentId}`;
  }
  static totalStu() {
    return Student.stuCount;
  }
}
const student = new Student("shwetangi", "chaurasiya", 21, 236);
console.log(student.printId());
const student2 = new Student("shwetangi", "chaurasiya", 21, 236);
console.log(student2.printId());

// task - 4
console.log(student.print()); //overriden

// task - 5
console.log(Person.genericGreet());

// task - 6
console.log(`total number ${Student.totalStu()}`);

// task - 7
console.log(person.fullname);

// task - 8
person.name = { firstName: "shwee", lastName: "chaurasiya" };
console.log(person.print());
