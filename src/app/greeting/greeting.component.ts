import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  // TODO: add links for linkedin and resume buttons
  greet = {
    fullname: "Maggie Dang",
    title: "Hello, I'm Maggie",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
