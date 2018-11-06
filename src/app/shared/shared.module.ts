import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrToArrayPipe } from './pipes/str-to-array.pipe';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    StrToArrayPipe,
    MyDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StrToArrayPipe,
    MyDirectiveDirective
  ]
})
export class SharedModule { }
