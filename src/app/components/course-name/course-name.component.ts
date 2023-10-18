import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {

  public courses = [];
  public errMsg = '';
  
  constructor(private _courseService : CourseService) {// Here we created instance property for that service. So that by using this instance we call every thing which is in service class
    this._courseService.getCourseInfo().subscribe(res => {
      this.courses = res;
    },
    err => {
      this.errMsg = err;
    });
  }

}
