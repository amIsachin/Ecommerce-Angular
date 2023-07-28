import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { CardsComponent } from './Components/cards/cards.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'hero-section', component: HeroSectionComponent },
      { path: 'cards', component: CardsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
