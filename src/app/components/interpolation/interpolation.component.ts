import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  public name: string = "Gopi Krishna";
  emp = {
    name: `${this.name}`,
    fname: `${this.name}`,
    lname: null,
    age: 25
  };

  //Array of objects
  employess = [
    {
      name: 'Gopi',
      age: 25
    },
    {
      name: 'Krishna',
      age: 30
    }
  ];

 // imgURL = '../../../assets/quotation.jpg';
  // Image access from internet
  imgURL = 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Nature-Background-Images-4523x2590.jpg';

  public getMyName(){
    return `${this.name}`
  }

}
