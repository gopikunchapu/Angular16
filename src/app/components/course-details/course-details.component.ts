import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  
  public courses = [
    {id: 1, name: 'Angular', fee: 1500},
    {id: 2, name: 'Angular Material', fee: 1000},
    {id: 3, name: 'Bootstrap', fee: 500}
  ];

}
