import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _url = '../../assets/data/courseData.json';

  constructor(private _http : HttpClient) { }

  getCourseInfo(): Observable<any> {
    return this._http.get<any>(this._url);
  }
}
