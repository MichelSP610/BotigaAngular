  import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
  import {CistellaService} from "../../serveis/cistella.service";
  import {CurrencyPipe, NgForOf} from "@angular/common";

  @Component({
    selector: 'app-cistella',
    standalone: true,
    imports: [FooterComponent, CurrencyPipe, NgForOf],
    templateUrl: './cistella.component.html',
    styleUrl: './cistella.component.css'
  })
  export class CistellaComponent {
    cartService = inject(CistellaService)

    deleteFromCart(item: any) {
      this.cartService.deleteFromCart(item)
    }
    trackByProductId(product: any): number {
      return product.id;
    }
  }
