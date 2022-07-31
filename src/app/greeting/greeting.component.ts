import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  greet = {
    fullname: "Maggie Dang",
    title: "Hello, I'm Maggie",
    bio: "Highly motivated Computer Science Specialist graduate from the University of Toronto. Looking for a position as a Software Developer."
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClickContact() {
    window.scrollTo(0, document.body.scrollHeight);
  }

}
