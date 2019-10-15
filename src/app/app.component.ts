import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private query;
  private i;
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.query = document.getElementById('query');
    this.query.addEventListener('input', (event) => this.getCursorText(event));
    
  }

  getCursorText(event) {
      let i;
      let value = event.srcElement.value;
      
      for(i = this.query.selectionStart-1; i>=0; i--) {
          if(value[i] === " ") {
              console.log(value[i]);
              
              break;
          }
      }
      i++;
      const word = value.slice(i).split(" ")[0];
      
      return word;
  }
}