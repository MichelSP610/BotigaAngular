import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {CistellaService} from "../../serveis/cistella.service";
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CryptoService} from "../../serveis/crypto.service";
import {FormsModule} from "@angular/forms";
import {Web3} from "web3";


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
  web3: Web3;

  constructor(private router: Router, private crypto: CryptoService) {
    this.web3 = new Web3((window as any).ethereum);
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

  guardarCompra() {
    this.comprar(() => {
      this.getCurrentAccount().then((account) => {
        this.cartService.guardarCompra(this.selectedCrypto, this.getConvertedTotal(), account);
      })
    });
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

  async comprar(callback: () => void) {
    //@ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      const total = this.getConvertedTotal();
      //@ts-ignore
      const valueInWei = this.web3.utils.toWei(total.toString(), 'ether');
      const paymentAddress = '0x349A39B4660Fb4b4a41a2592390F9E3BCddb72c3'; // Replace with your recipient address

      try {
        //@ts-ignore
        const accounts = await this.web3.eth.requestAccounts();
        //@ts-ignore
        const transactionId = await this.web3.eth.sendTransaction({
          from: accounts[0],
          to: paymentAddress,
          value: valueInWei
        });
        console.log('Transaction successful with hash:', transactionId);
        callback();
      } catch (err) {
        console.error('Payment failed', err);
      }
    } else {
      console.error('MetaMask is not installed!');
    }
  }

  private toWei(amount: number, decimals: number): string {
    return (amount * Math.pow(10, decimals)).toFixed(0);
  }

  private async getCurrentAccount(): Promise<string> {
    //@ts-ignore
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  }

  private getDecimalPlaces(crypto: string): number {
    switch (crypto) {
      case 'bitcoin':
        return 8;
      case 'ethereum':
        return 18;
      case 'binancecoin':
        return 18;
      default:
        return 18;
    }
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
