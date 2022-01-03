import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  // TODO: add links for linkedin and resume buttons
  greet = {
    fullname: "Maggie Dang",
    title: "Hello, I'm Maggie",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat. Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et tincidunt libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue eros. In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
