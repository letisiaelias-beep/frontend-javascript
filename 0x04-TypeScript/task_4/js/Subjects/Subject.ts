/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher!: Teacher;  // This tells TS: "I will assign teacher later"

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

