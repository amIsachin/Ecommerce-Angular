import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';

import { MatCardModule } from '@angular/material/card';
import { CardsComponent } from './Components/cards/cards.component';
import { MatButtonModule } from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [HeroSectionComponent, CardsComponent]
})
export class HomeModule { }
