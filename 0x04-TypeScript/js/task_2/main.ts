// task_2/js/main.ts

// 1) Interfaces
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2) Classes implementing the interfaces
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 3) createEmployee function
export function createEmployee(salary: number | string) {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  return new Director();
}

// 4) Type predicate to check Director (Task 6)
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// 5) executeWork - calls the correct task method (Task 6)
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// ======= Example logs (manual verification) =======
console.log(createEmployee(200).constructor.name);    // Teacher
console.log(createEmployee(1000).constructor.name);   // Director
console.log(createEmployee('$500').constructor.name); // Director

console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
