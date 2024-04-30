
import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component"
import {CistellaService} from "../../serveis/cistella.service";
import {CurrencyPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FiltreGaletesPipe} from "../pipes/filtre-galetes.pipe";
import {SessioService} from "../../serveis/sessio.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [FooterComponent, NgForOf, CurrencyPipe, FormsModule, NgClass, FiltreGaletesPipe, NgIf],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.css'
})
export class CatalegComponent {
  cartService = inject(CistellaService)
  Products: any[] = [];

  constructor(private sessioService: SessioService, private http: HttpClient) {
    this.cartService.setCartData()
    this.getProducts();
  }

  getProducts() {
    this.http.get<any[]>('http://localhost:3080/getProducts').subscribe((data) => {
      this.Products = data.map(prod => {
        return {
          name: prod.producte_nom,
          id: prod.producte_id,
          quantity: 1,
          image: this.sessioService.getImageLink(prod.producte_imatge),
          gust: prod.producte_gust,
          pasta: prod.producte_pasta,
          oferta: prod.producte_oferta,
          price: prod.producte_preu,
          description: prod.producte_descripcio
        };
      });
    });
  }

  filtreSeleccionat: { dolca: boolean, salada: boolean, dura: boolean, tova: boolean, liquida: boolean } = {
    dolca: false,
    salada: false,
    dura: false,
    tova: false,
    liquida: false
  };


  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  trackByProductId(product: any): number {
    return product.id;
  }


}
