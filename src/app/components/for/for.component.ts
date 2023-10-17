import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {

  public names = ['Gopi', 'Krishna', 'GK', 'Bhavya Sri'];
  public emp = {
    id : 1,
    name : 'Gopi',
    age : 25
  };
  //Array of objects
  public emp1 = [
    {
      id : 1,
      name : 'Gopi',
      age : 25
    },
    {
      id : 2,
      name : 'Krishna',
      age : 26
    },
    {
      id : 3,
      name : 'GK',
      age : 27
    }
  ];

}
