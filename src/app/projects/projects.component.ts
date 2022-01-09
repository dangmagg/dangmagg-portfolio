import { Component, OnInit } from '@angular/core';

export interface ProjectEntry {
  title: string;
  subtitle: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  configPages: any;

  projs: ProjectEntry[] = [
    {title: "a", subtitle: "b", desc1: "c", desc2: "d", desc3: "e", desc4: "lhfkdlshflksdjgkdsjgfsjg;lsjgdlshflksdjgkdsjgfsjg;lsjg;ljgl;dsjg;ljg;ldsjggjgfsjg;lsjg;ljgl;dsjdlshflksdjgkdsjgfsjg;lsjg;ljgl;dsjg;ljg;ldsjggjgfsjg;lsjg;ljgl;dsj;ljgl;dsjg;ljg;ldsjggjgfsjg;lsjg;ljgl;dsjg;ljg;ldsjgkfjg;lsjg;sjgldjgl;sdjgsdjg;ksdjg;djg;sdjgd;sjgdsjggjgkfjg;lsjg;sjgldjgl;sdjgsdjg;ksdjg;djg;sdjgd;sjg;ldgj;sdljg;lsdjg;lgj;s", link: ""},
    {title: "a2", subtitle: "b", desc1: "c2", desc2: "", desc3: "e", desc4: "", link: "link here"},
    {title: "a3", subtitle: "b", desc1: "c", desc2: "d", desc3: "", desc4: "", link: ""},
    {title: "a", subtitle: "b", desc1: "c", desc2: "", desc3: "", desc4: "", link: ""},
    {title: "a", subtitle: "b", desc1: "c", desc2: "d", desc3: "", desc4: "", link: "linkhere"},
    {title: "a", subtitle: "b", desc1: "c", desc2: "d", desc3: "", desc4: "", link: ""},

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
