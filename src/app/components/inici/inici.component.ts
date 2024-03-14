import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-inici',
  standalone: true,
  imports: [FooterComponent, NgbModule],
  templateUrl: './inici.component.html',
  styleUrl: './inici.component.css'
})
export class IniciComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
