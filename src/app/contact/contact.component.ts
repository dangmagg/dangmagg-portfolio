import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  info = {
    textContent: "Need a software developer? Or have any questions about me? Feel free to message me on LinkedIn or e-mail me at,",
    email: "maggiedang11@gmail.com"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
