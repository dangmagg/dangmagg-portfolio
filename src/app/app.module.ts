import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'src/global/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialsComponent } from './socials/socials.component';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopToolBarComponent,
    GreetingComponent,
    EducationComponent,
    SkillsComponent,
    WorkComponent,
    ProjectsComponent,
    SocialsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
