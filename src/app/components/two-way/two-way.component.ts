import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  public myName : string = '';
  public myCourse : string = '';
  public myFee : number = 0;
  public myText : string = '';

  onClick1(val) {
    console.log("Welcome: ", val);
    this.myName = val;
  }
  onClick2(val) {
    console.log("Course Name: ", val);
    this.myCourse = val;
  }
  onClick3(val) {
    console.log("Fee Details: ", val);
    this.myFee = val;
  }

}
