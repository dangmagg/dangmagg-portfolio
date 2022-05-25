import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  // TODO: add links resume button
  greet = {
    fullname: "Maggie Dang",
    title: "Hello, I'm Maggie",
    bio: "Highly motivated Computer Science Specialist graduate from the University of Toronto. Looking for positions as a Software Developer / Full-Stack Developer."
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClickContact() {
    window.scrollTo(0, document.body.scrollHeight);
  }

}
