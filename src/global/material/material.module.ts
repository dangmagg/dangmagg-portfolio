import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
// import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';


const modules = [
    MatChipsModule,
    DragDropModule,
    MatCardModule,
    MatGridListModule
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: [...modules],
  })
export class MaterialModule {}