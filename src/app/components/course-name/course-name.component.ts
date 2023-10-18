import { Component } from '@angular/core';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {

  public courses = [
    {id: 1, name: 'Angular', fee: 1500},
    {id: 2, name: 'Angular Material', fee: 1000},
    {id: 3, name: 'Bootstrap', fee: 500}
  ];

}
