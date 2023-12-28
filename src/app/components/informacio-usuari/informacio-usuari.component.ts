import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-informacio-usuari',
  standalone: true,
  imports: [],
  templateUrl: './informacio-usuari.component.html',
  styleUrl: './informacio-usuari.component.css'
})
export class InformacioUsuariComponent {

  constructor(private router: Router) {
  }

  ngOnInit() {
    if(sessionStorage.getItem('userConnected') === 'false') {
      this.router.navigate(['/login'])
    }
  }
}
