// Create a file Cpp.ts and make the following modifications in the same namespace.
// Using declaration merging, add a new optional attribute experienceTeachingC
// (number) to the Teacher interface
// Create a class Cpp extending from Subject
// Write a method named getRequirements that will return a string Here is the list
// of requirements for Cpp
// Write a method named getAvailableTeacher that will return a string Available
// Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching C, then the method
// should return a string No available teacher

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // added optional attribute
    }
    export class Cpp extends Subjects.Subject {
      getRequirement(): string {
        return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher'
    }
    return `Available Teacher: ${this.teacher.firstName}`;
}
}
}