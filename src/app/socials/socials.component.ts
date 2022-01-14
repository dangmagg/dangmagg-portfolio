import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {


  links = {
    linkedin: "https://www.linkedin.com/in/maggie-dang-08138014a/",
    github: "https://github.com/dangmagg",
    devpost: "https://devpost.com/dangmagg?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
