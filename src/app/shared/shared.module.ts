import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrToArrayPipe } from './pipes/str-to-array.pipe';

@NgModule({
  declarations: [
    StrToArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StrToArrayPipe
  ]
})
export class SharedModule { }
