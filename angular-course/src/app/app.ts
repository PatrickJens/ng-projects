import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data = {
    appTitle: 'angular-course'
  }

  onLogoClicked() {
    alert("Hello World");
  }
  
  onKeyUp(newTitle:string){
    this.data.appTitle = newTitle;
  }
}
