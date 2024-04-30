class Institute {
  name: string;
  student: any = [];
  addStudent(studentObj: student) {
    this.student.push(studentObj);
  }
  constructor(name: string) {
    this.name = name;
  }
}
class student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class teacher {
  name: string;
  course: any = [];

  addCourse(courseObj: course) {
    this.course.push(courseObj);
  }
  constructor(name: string) {
    this.name = name;
  }
}
let i1 = new Institute("Lead University");
let studentObj1 = new student("saim shaikh");
let c1 = new course("maths");
let c2 = new teacher("zia khan");

i1.addStudent(studentObj1);
console.log(i1);

c2.addCourse(c1);
console.log(c2);
