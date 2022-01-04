import { Component, OnInit } from '@angular/core';

export interface WorkExp {
  employer: string;
  duration: string;
  title: string;
  imagelink: string;
  desc: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  works: WorkExp[] = [
    { employer: 'a', duration: 'b', title: 'c', imagelink: 'd', desc: 'e'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
