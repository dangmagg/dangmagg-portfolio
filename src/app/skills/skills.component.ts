// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  // best: string = "#55198b";
  // basic: string = "#707070";
  best: string = "primary";
  basic: string = "accent";

  skills: Skill[] = [
    {name: 'Java', color: this.best},
    {name: 'Python', color: this.best},
    {name: 'C', color: this.basic},
    {name: 'Typescript', color: this.best},
    {name: 'JavaScript', color: this.best},
    {name: 'Kotlin', color: this.basic},
    {name: 'Android Development', color: this.best},
    {name: 'Web Development', color: this.best},
    {name: 'Testing / QA', color: this.basic},
    {name: 'Angular', color: this.basic},
    {name: 'Flask', color: this.basic},
    {name: 'Spring', color: this.basic},
    {name: 'Dagger', color: this.basic},
    {name: 'HTML', color: this.basic},
    {name: 'XML', color: this.basic},
    {name: 'DTD', color: this.basic},
    {name: 'JSON', color: this.basic},
    {name: 'CSS', color: this.basic},
    {name: 'SQL', color: this.best},
    {name: 'NOSQL', color: this.basic},
    {name: 'DDL', color: this.basic},
    {name: 'XPath', color: this.basic},
    {name: 'XQuery', color: this.basic},
    {name: 'Cypher', color: this.basic},
    {name: 'PostgreSQL', color: this.basic},
    {name: 'SQLite', color: this.basic},
    {name: 'Neo4j', color: this.basic},
    {name: 'MongoDB', color: this.basic},
    {name: 'Agile Software Development', color: this.best},
    {name: 'Git', color: this.basic},
    {name: 'Github', color: this.basic},
    {name: 'Cryptography', color: this.basic},
    {name: 'Computer Security', color: this.basic},
    {name: 'Machine Learning', color: this.basic},
    {name: 'Artificial Intelligence', color: this.basic},
    {name: 'Jupyter Notebook', color: this.basic},
    {name: 'Numpy', color: this.basic},
    {name: 'Scikit-learn', color: this.basic},
    {name: 'Unix', color: this.basic},
    {name: 'Terminal', color: this.basic},
    {name: 'Command line', color: this.basic},
    {name: 'Shell Scripting', color: this.basic},
    {name: 'Docker', color: this.basic},
    {name: 'Verilog', color: this.basic},
    {name: 'Assembly', color: this.basic},
    {name: 'Docker', color: this.basic},
    {name: 'Visual Studio Code', color: this.basic},
    {name: 'Android Studio', color: this.basic},
    {name: 'IntelliJ', color: this.basic},
    {name: 'Eclipse', color: this.basic},
    {name: 'NetBeans', color: this.basic},
    {name: 'Jira', color: this.basic},
    {name: 'Microsoft Office', color: this.basic},
    {name: 'Visual Paradigm', color: this.basic},
    {name: 'UI/UX Design', color: this.basic},
    {name: 'Adobe Photoshop', color: this.basic},
    {name: 'Adobe Illustrator', color: this.basic},
    {name: 'Figma', color: this.basic},
    {name: 'Teamwork', color: this.basic},
    {name: 'Leadership', color: this.basic},
    {name: 'Management', color: this.basic}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // drop(event: CdkDragDrop<Skill[]>) {
  //   moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  // }

}
