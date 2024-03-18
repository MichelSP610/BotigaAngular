import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {SessioService} from "../../serveis/sessio.service";
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-inici',
  standalone: true,
  imports: [FooterComponent, NgbModule],
  templateUrl: './inici.component.html',
  styleUrl: './inici.component.css'
})
export class IniciComponent {

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  galetesImg: any;
  galetasImg: any;
  fabricaImg: any;
  constructor(private modalService: NgbModal ,private sessioService: SessioService) {
    this.galetesImg = this.sessioService.getImageLink('chocolate-chip-cookies.jpg')
    this.galetasImg = this.sessioService.getImageLink('galletas.png')
    this.fabricaImg = this.sessioService.getImageLink('Fabrica.jpg')
  }

}
