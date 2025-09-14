// Define the student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only set during initialization
  readonly lastName: string;  // only set during initialization
  fullTimeEmployee: boolean;  // must always be defined
  yearsOfExperience?: number; // optional attribute
  location: string;           // must always be defined
  [key: string]: any;         // allow adding additional properties
}

// Create two students with placeholder values
const student1: Student = {
  firstName: "FirstName1",
  lastName: "LastName1",
  age: 20,
  location: "Location1"
};

const student2: Student = {
  firstName: "FirstName2",
  lastName: "LastName2",
  age: 22,
  location: "Location2"
};

// ✅ Declare studentsList exactly as required
const studentsList: Student[] = [student1, student2];

// Example usage
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Nairobi",
  yearsOfExperience: 5,
  subject: "Mathematics" // extra property allowed
};

console.log(teacher1);


// Type predicate to check if the employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute the correct task based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  else {
  return employee.workTeacherTasks();
}

// Example usage for verification:
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
