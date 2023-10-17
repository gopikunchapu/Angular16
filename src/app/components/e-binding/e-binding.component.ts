import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {

  onClick() {
    console.log("You Clicked this Button");
  }
  onDblClick() {
    console.log("You Doubled Clicked this button");
  }
  onOver() {
    console.log("Mouse Over");
  }
  onOut() {
    console.log("Mouse Exit");
  }
  onMove() {
    console.log("Mouse Move");
  }
  kDown() {
    console.log("Key Down");
  }
  kUp() {
    console.log("Key Up");
  }
  kPress() {
    console.log("You Pressed a key");
  }
  onFocus() {
    console.log("Input got Focus");
  }
  onFocusLost() {
    console.log("Input lost focus");
  }
  onInput() {
    console.log("You entered a charactered");
  }

}
