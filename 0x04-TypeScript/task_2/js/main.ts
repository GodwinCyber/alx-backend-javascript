export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
// Define teacher interface 
export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
// Class the implement DirectorInterace
export class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting coffee break";
    }
    workDirectorTasks(): string {
        return "Working on director tasks";
    }
}
// define class Teacher that will implement  TeacherInterface
export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}
// Create the CreateEmployee function
export  function CreateEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
// Create employee and determine employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}
// Create employee and determine employee is a Teacher
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Define subject type with only two possible value
export type Subject = ('Math' | 'History');
// Function to return the string based on todayClass
export function teachClass(todayClass: Subject): string {
  if (todayClass === 'Math') {
     return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    throw new Error('Invalid class');
}