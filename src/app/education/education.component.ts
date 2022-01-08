import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  timeline = [
    {
      title: "Honours Bachelor of Science (HBSc)",
      subtitle: "Computer Science Specialist Co-op Program (Information Systems Stream)",
      yearGrad: "2022",
      duration: "Sep 2017 - Apr 2022",
      school: "University of Toronto Scarborough",
      desc: "Completed HBSc degree in Computer Science at the University of Toronto with a cGPA of 3.2+",
      displayPosition1: "mar-left",
      displayPosition2: "textbox-right"
    },
    {
      title: "Ontario Secondary School Diploma",
      subtitle: "Ontario Scholar Award, MSC2 Certificate",
      yearGrad: "2017",
      duration: "Sept 2014 - June 2017",
      school: "Georges Vanier Secondary School",
      desc: "Completed High School studies as an Ontario Scholar with 93% average and a Certificate of Excellence from a 3 year enriched Math, Science, Computer Science, Communications Technology Program",
      displayPosition1: "mar-right",
      displayPosition2: "textbox-left"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
