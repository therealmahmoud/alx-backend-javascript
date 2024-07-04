interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak?(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  workFromHome (): string {
      return `Working from home`
  }
  getToWork(): string {
      return `Getting a coffee break`
  }
  workDirectorTasks(): string {
      return `Getting to director tasks`
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`
  }
  getCoffeeBreak(): string {
    return `Cannot have a break`
  }
  workTeacherTasks(): string {
    return `Getting to work`
  }
}

export default function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher;
  }
  return new Director;
}

export function isDirector(employee: any) {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}
export function executeWork(employee: any) {
  if(isDirector(employee)) {
    return new Director().workDirectorTasks()
  }
  return new Teacher().workTeacherTasks()
}

export type Subjects = ('Math' | 'History')

export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return `Teaching Math`
  }
  if (todayClass === 'History') {
    return `Teaching History`
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
