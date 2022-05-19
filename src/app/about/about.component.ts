import { Component, OnInit } from '@angular/core';

export interface About {
  desc: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: About[] = [
    { desc: "Develop nice, modern, and mobile friendly websites on the full stack (MEAN)" },
    { desc: "Create Android Mobile Applications with Android Studio" },
    { desc: "Fluent in using both SQL and NOSQL Database technologies" },
    { desc: "Ability to integrate third party services; Firebase, AWS, Heroku" },
    { desc: "Knowledgeable in Computer Security, Artificial Intelligence, and Machine Learning" },
    { desc: "Work experience in an agile software development lifecycle" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
