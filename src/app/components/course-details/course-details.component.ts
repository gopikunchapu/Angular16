import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  
  public courses = [];
  constructor(private _courseService : CourseService) {
    this.courses = this._courseService.getCourseInfo();
  }

}
