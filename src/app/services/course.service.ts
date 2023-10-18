import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _url = '../../assets/data/courseData123.json';

  constructor(private _http : HttpClient) { }

  getCourseInfo(): Observable<any> {
    return this._http.get<any>(this._url).pipe(catchError(this.inCommingError));
  }

  inCommingError(err : HttpErrorResponse) {
    return throwError(err.message);
  }
}
