namespace Subjects {
  export class Subject {
    // attribute teacher that implement Teacher interface
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}