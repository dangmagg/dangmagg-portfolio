import { Component, OnInit } from '@angular/core';

export interface ProjectEntry {
  title: string;
  subtitle: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  link: string;
  linkTitle: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  configPages: any;

  /*TODO: Add Image and Github link for portfolio website, Image for Gallery */
  projs: ProjectEntry[] = [
    {title: "SportCRED Social Media Website", subtitle: "Angular, TypeScript, Django, Python", 
      desc1: "Designed and developed a social media platform for sport enthusiasts in a team of 6 for our client, SportCRED.", 
      desc2: "Chosen as the website the client liked best out of 7+ teams and was utilized as the company’s first functional prototype.", 
      desc3: "Implemented front-end features for users to register, login, access admin privileges, view news, user posts, setting bets, and playing sports trivia.", 
      desc4: "Practiced agile software development lifecycle with daily scrum meetings.", 
      link: "", linkTitle: "", image: "assets/sportcred.gif"},
    {title: "Visual Chat Room", subtitle: "MEAN (MongoDB, Express, Angular, Node), GraphQL, Heroku", 
      desc1: "Cooperated with a partner to develop a unique website allowing users to use voice commands to display images and messages in a generated private web link chat room.", 
      desc2: "Implemented a majority of the front-end with contribution to the back-end resulting in a fully functional website deployed on Heroku.", 
      desc3: "Video Presentation Link: https://youtu.be/1wd_bkrDR1o", desc4: "", link: "https://visual-chat-room.herokuapp.com/", linkTitle: "Website Link", 
      image: "assets/vcr.gif"},
    {title: "Web Gallery Application", subtitle: "JavaScript, Express, Node, NeDB, REST, AJAX", 
      desc1: "Constructed an image viewing web application allowing users to login and create accounts to upload any image to display on their page.", 
      desc2: "Enable users to comment on any post with the original poster having the authority to remove comments or images.", 
      desc3: "Developed both the front and back end, achieving an overall project grade of A.", desc4: "", link: "", linkTitle: "", 
      image: "assets/web-gallery.PNG"},
    {title: "Farm Citi App", subtitle: "Android Studio, Java, Photoshop", 
      desc1: "Participated in Hackathon “Hack Lassonde” with a team of 4 to create an android application to visualize the environmental impact of food choices a user makes.", 
      desc2: "Implemented and designed the main dashboard screen and splash screen.", 
      desc3: "", desc4: "", link: "https://devpost.com/software/test-3g8sir", linkTitle: "Devpost + Github Link", 
      image: "assets/farmciti.PNG"},
    {title: "ReAccess UI/UX Prototype", subtitle: "Figma, Photoshop", 
      desc1: "Worked with a team of 6 to research, design, create, and present a prototype of an accessibility software modeled to help the hard-of-seeing and deaf community to navigate the web more effectively.", 
      desc2: "Chosen by group members as the one with the best initial UI/UX design to base the project off on.", 
      desc3: "", desc4: "", 
      link: "https://www.figma.com/proto/ckO1twVQuNm3bor5DnZEWC/Group-C10-ReAccess-Hi-Fi-Prototype-UPDATED?node-id=0%3A1", 
      linkTitle: "Figma Demo Link", image: "assets/ReAccess.PNG"},
    {title: "Personal Portfolio Website", subtitle: "Angular, Typescript", 
      desc1: "Developed and designed this portfolio website meant to showcase personal and work experience to employers.", 
      desc2: "", desc3: "", desc4: "", link: "todo", linkTitle: "Github Link", 
      image: "assets/portfolio.png"},
    {title: "Computer Science Course Website", subtitle: "JavaScript, Python, HTML, CSS, Flask, SQLite", 
      desc1: "Designed and developed a working course website in a team of 2. (Image shown is an old mockup)", 
      desc2: "Created features to allow users to view course materials, updates from instructors, enter marks, submit remark requests, anonymous feedback, and download files.", 
      desc3: "Implemented register and login features with a factor to distinguish a user as student or admin.", 
      desc4: "Utilized SQLite to store and query student grades, requests, encrypted account data.", 
      link: "", linkTitle: "", image: "assets/courseweb.png"},
    {title: "Scikit-learn Reverse Engineer Project", subtitle: "Python, Visual Paradigm", 
      desc1: "Created new features and implemented bug fixes with a team of 7 students for open-sourced machine learning Python library, Scikit-learn.", 
      desc2: "Led the new feature implementation meant to fetch third party datasets from an external website and allow that data to be processed into consumable formats.", 
      desc3: "Participated in an agile software development environment, written thorough documentation, unit tests, and UML models.", desc4: "", link: "", linkTitle: "", 
      image: "assets/scikit-learn.png"},

  ];

  constructor() { }

  ngOnInit(): void {
    this.configPages = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.projs.length
    };
  }

  onPageChanged(event){
    this.configPages.currentPage = event;
  }

}
