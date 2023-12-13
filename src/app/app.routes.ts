import { Routes } from '@angular/router';
import {CatalegComponent} from "./components/cataleg/cataleg.component";
import {IniciComponent} from "./components/inici/inici.component";
import {RegistreComponent} from "./components/registre/registre.component";
import {CistellaComponent} from "./components/cistella/cistella.component";

export const routes: Routes = [
  { path: '', component:IniciComponent},
  { path: 'cataleg', component:CatalegComponent},
  { path: 'registre', component:RegistreComponent},
  {path: 'cistella', component:CistellaComponent}
];
