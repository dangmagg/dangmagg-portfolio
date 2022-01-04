import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';


const modules = [
    MatChipsModule,
    DragDropModule
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: [...modules],
  })
export class MaterialModule {}