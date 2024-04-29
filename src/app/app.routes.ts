import { Routes } from '@angular/router';
import {CatalegComponent} from "./components/cataleg/cataleg.component";
import {IniciComponent} from "./components/inici/inici.component";
import {RegistreComponent} from "./components/registre/registre.component";
import {CistellaComponent} from "./components/cistella/cistella.component";
import {ContacteComponent} from "./components/contacte/contacte.component";
import {CondicionsComponent} from "./components/condicions/condicions.component";
import {PrivacitatComponent} from "./components/privacitat/privacitat.component";
import {IniciSessioComponent} from "./components/inici-sessio/inici-sessio.component";
import {PerfilUsuariComponent} from "./components/perfil-usuari/perfil-usuari.component";
import {CambiarDadesComponent} from "./components/cambiar-dades/cambiar-dades.component";
import {EnviarEmailComponent} from "./components/enviar-email/enviar-email.component";
import {AfegirProducteComponent} from "./components/afegir-producte/afegir-producte.component";
import {GrafiquesComponent} from "./components/grafiques/grafiques.component";

export const routes: Routes = [
  {path: '', component:IniciComponent},
  {path: 'cataleg', component:CatalegComponent},
  {path: 'registre', component:RegistreComponent},
  {path: 'cistella', component:CistellaComponent},
  {path: 'contacte', component:ContacteComponent},
  {path: 'condicions', component:CondicionsComponent},
  {path: 'privacitat', component:PrivacitatComponent},
  {path: 'login', component:IniciSessioComponent},
  {path: 'perfil', component:PerfilUsuariComponent},
  {path: 'enviar-email', component:EnviarEmailComponent},
  {path: 'cambiarDades', component:CambiarDadesComponent},
  {path: 'afegirProductes', component:AfegirProducteComponent},
  {path: 'grafiques', component:GrafiquesComponent}
];
