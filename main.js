"use strict";
class Institute {
    name;
    student = [];
    addStudent(studentObj) {
        this.student.push(studentObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class teacher {
    name;
    course = [];
    addCourse(courseObj) {
        this.course.push(courseObj);
    }
    constructor(name) {
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
