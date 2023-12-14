import { Routes } from '@angular/router';
import {CatalegComponent} from "./components/cataleg/cataleg.component";
import {IniciComponent} from "./components/inici/inici.component";
import {RegistreComponent} from "./components/registre/registre.component";
import {CistellaComponent} from "./components/cistella/cistella.component";
import {ContacteComponent} from "./components/contacte/contacte.component";
import {CondicionsComponent} from "./components/condicions/condicions.component";

export const routes: Routes = [
  { path: '', component:IniciComponent},
  { path: 'cataleg', component:CatalegComponent},
  { path: 'registre', component:RegistreComponent},
  {path: 'cistella', component:CistellaComponent},
  {path: 'contacte', component:ContacteComponent},
  {path: 'condicions', component:CondicionsComponent}
];
