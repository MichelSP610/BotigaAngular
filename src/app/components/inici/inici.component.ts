import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {SessioService} from "../../serveis/sessio.service";

@Component({
  selector: 'app-inici',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './inici.component.html',
  styleUrl: './inici.component.css'
})
export class IniciComponent {

  galetesImg: any;
  galetasImg: any;
  fabricaImg: any;
  constructor(private sessioService: SessioService) {
    this.galetesImg = this.sessioService.getImageLink('chocolate-chip-cookies.jpg')
    this.galetasImg = this.sessioService.getImageLink('galletas.png')
    this.fabricaImg = this.sessioService.getImageLink('Fabrica.jpg')
  }

}
