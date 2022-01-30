import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'dv-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
