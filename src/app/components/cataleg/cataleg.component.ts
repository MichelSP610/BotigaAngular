
import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component"
import {CistellaService} from "../../serveis/cistella.service";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FiltreGaletesPipe} from "../pipes/filtre-galetes.pipe";

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [FooterComponent, NgForOf, CurrencyPipe, FormsModule, NgClass, FiltreGaletesPipe],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.css'
})
export class CatalegComponent {
  cartService = inject(CistellaService)

  filtreSeleccionat: { dolca: boolean, salada: boolean, dura: boolean, tova: boolean, liquida: boolean } = {
    dolca: false,
    salada: false,
    dura: false,
    tova: false,
    liquida: false
  };

  products: any[] = [
    {name: 'Galetes de llet condensada', id: 1, quantity: 1, image: 'assets/condensed-milk-cookies.jpg', gust: 'dolca', pasta: 'liquida', price: 9.99, description: '1kg de galetes de llet condensada de la marca Fornais'},
    {name: 'Galetes de chocolata', id: 2, quantity: 1, image: 'assets/chocolate-chip-cookies.jpg', gust: 'dolca', pasta: 'tova', price: 12.99, description: '1kg de galetes de chocolata de la marca Fornais'},
    {name: 'Galetes de integrals', id: 3, quantity: 1, image: 'assets/integral-cookies.jpg', gust: 'dolca', pasta: 'dura', price: 14.99, description: '1kg de galetes itegrals de la marca Fornais'},
    {name: 'Galetes de pizza', id: 4, quantity: 1, image: 'assets/GalletaPizza.jpg', gust: 'salada', pasta: 'tova', price: 9.99, description: '1kg de galetes de llet condensada de la marca Fornais'},
    {name: 'Galetes saladitas', id: 5, quantity: 1, image: 'assets/Saladitas.jpg', gust: 'salada', pasta: 'dura', price: 12.99, description: '1kg de galetes de chocolata de la marca Fornais'},
    {name: 'Galetes snakers', id: 6,  quantity: 1, image: 'assets/Snakers.jpg', gust: 'salada', pasta: 'liquida', price: 14.99, description: '1kg de galetes itegrals de la marca Fornais'}
  ];

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  trackByProductId(product: any): number {
    return product.id;
  }


}
