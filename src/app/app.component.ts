import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';

  updateLength() {
    // This method is triggered on each input change to update the length of the entered string.
  }
}
