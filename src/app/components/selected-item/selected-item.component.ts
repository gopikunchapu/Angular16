import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent {

  public courseID;

  constructor(private _activatedRoute : ActivatedRoute){
    this.courseID = this._activatedRoute.snapshot.paramMap.get('id');
  }

}
