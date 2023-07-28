import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: []
})
export class ShareModule { }