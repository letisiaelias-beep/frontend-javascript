// Task 6: Functions specific to employees

// Type predicate to check if the employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute the correct task based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Example usage for verification:
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
