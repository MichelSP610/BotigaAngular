import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {CistellaService} from "../../serveis/cistella.service";
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CryptoService} from "../../serveis/crypto.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-cistella',
  standalone: true,
  imports: [
    FooterComponent,
    CurrencyPipe,
    NgForOf,
    HttpClientModule,
    FormsModule,
    UpperCasePipe,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './cistella.component.html',
  styleUrl: './cistella.component.css'
})
export class CistellaComponent {
  cartService = inject(CistellaService);
  selectedCrypto: string = 'eur';
  conversionRate: number = 1;

  constructor(private router: Router, private crypto: CryptoService) {
    let checkUser = sessionStorage.getItem('username');
    if (!checkUser || checkUser === '') {
      this.router.navigate(['/login']);
    } else if (this.cartService.getItems().length === 0) {
      this.router.navigate(['/cataleg']);
    } else {
      this.cartService.setCartData();
    }
  }

  ngOnInit(): void {
    this.getCryptoPrice(this.selectedCrypto);
  }

  getCryptoPrice(cryptoId: string): void {
    if (cryptoId === 'eur') {
      this.conversionRate = 1;
    } else {
      this.crypto.getCurrency(cryptoId).subscribe(
        data => {
          if (data && data.market_data && data.market_data.current_price && data.market_data.current_price.eur) {
            this.conversionRate = data.market_data.current_price.eur;
          } else {
            console.error('Unexpected data format', data);
          }
        },
        error => {
          console.error('Error fetching crypto price', error);
        }
      );
    }
  }

  onCryptoChange(): void {
    this.getCryptoPrice(this.selectedCrypto);
  }

  getConvertedTotal(): number {
    const totalInEur = this.cartService.getTotal();
    return this.selectedCrypto === 'eur' ? totalInEur : totalInEur / this.conversionRate;
  }

  deleteFromCart(item: any) {
    this.cartService.deleteFromCart(item);
    if (this.cartService.getItems().length === 0) {
      this.router.navigate(['/cataleg']);
    }
  }

  trackByProductId(product: any): number {
    return product.id;
  }
}
