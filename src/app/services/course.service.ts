import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseInfo() {
    return [
      {id: 1, name: 'Angular', fee: 1500},
      {id: 2, name: 'Angular Material', fee: 1000},
      {id: 3, name: 'Bootstrap', fee: 500}
    ];
  }
}
