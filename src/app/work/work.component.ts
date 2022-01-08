import { Component, OnInit } from '@angular/core';

export interface WorkExp {
  employer: string;
  duration: string;
  title: string;
  imagelink: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works: WorkExp[] = [
    { employer: 'Clearbridge Mobile', duration: 'Jan 2019 – Dec 2019', title: 'Android Developer, Co-op', imagelink: 'assets/logos/cbmobile-logo.jpg', 
      desc1: `Contributed to the building and maintenance of 5+ mobile applications for North America’s leading enterprise app developer.`,
      desc2: `Part of the 4-member Android developer team in building and improving fitness app “ParticipACTION” for the full 4 months before their release.`,
      desc3: `Greatly improved the efficiency of a popular sports network’s mobile app by refactoring a major implementation into an external Java library to be used by their multiple apps.`,
      desc4: `Built a quality-of-life changing developer tool app made to accelerate testing and flow of implementation understanding for developers working on the sports streaming app.`,
      desc5: `Participated in the development of a web application by analyzing its REACT codebase and fixing notable bugs.`,
      desc6: `Effectively and adept to program features and bugfixes based on the specification of a user story assigned as a task by team leads in an agile development environment.` 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
