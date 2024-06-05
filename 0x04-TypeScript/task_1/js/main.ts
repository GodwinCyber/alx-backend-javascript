export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

    // Index signature for additional of attribute
  [key: string]: any;
}

// Define the director interface extending Teacher
export interface Director extends Teacher {
  numberOfReports: number;
}
// Define the interface for the printTeacherFunction
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// Implement export function
export function printTeacher(firstName: string, lastName: string): string {
  // Output format firstInitial Lastname
  return `${firstName.charAt(0)}. ${lastName}`;
}

//Interface for the constructor
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
// Define the StudentClassInterface class method
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
// The StudentClass implementation
export class StudentClass implements StudentClassInterface {
  private _firstName: string;
  private _lastName: string;

    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
    workOnHomework(): string {
      return 'Currently working';
    }
    displayName(): string {
      return this._firstName;
    }
}