import { Routes } from '@angular/router';
import {CatalegComponent} from "./components/cataleg/cataleg.component";
import {IniciComponent} from "./components/inici/inici.component";

export const routes: Routes = [
  { path: 'cataleg', component:CatalegComponent},
  { path: '', component:IniciComponent}
];
