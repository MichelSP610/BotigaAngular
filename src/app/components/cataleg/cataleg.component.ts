import { Component, NgModule, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from "@angular/forms";
import { FiltreGaletesPipe } from "../pipes/filtre-galetes.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cataleg',
    standalone: true,
    imports: [FooterComponent, FormsModule, FiltreGaletesPipe, CommonModule],
    templateUrl: './cataleg.component.html',
    styleUrls: ['./cataleg.component.css'],
})
export class CatalegComponent implements OnInit {
    filtreSeleccionat: { dolca: boolean, salada: boolean, dura: boolean, tova: boolean, liquida: boolean } = {
        dolca: false,
        salada: false,
        dura: false,
        tova: false,
        liquida: false
    };

    catalegGaletes: any[] = [
        { nom: 'Galetes de llet condensada', gust: 'dolca', pasta: 'liquida', preu: '9,99€' },
        { nom: 'Galetes de xocolata', gust: 'dolca', pasta: 'tova', preu: '12,99€' },
        { nom: 'Galetes integrals', gust: 'dolca', pasta: 'dura', preu: '14,99€' },
        { nom: 'Galeta Saladitas', gust: 'salada', pasta: 'tova', preu: '11,99€' },
        { nom: 'Galeta Snakers', gust: 'salada', pasta: 'dura', preu: '10,99€' },
        { nom: 'Galeta de Pizza', gust: 'salada', pasta: 'liquida', preu: '12,49€' }
    ];

    getGaletaImage(galeta: any): string {
        switch (galeta.nom) {
            case 'Galetes de llet condensada':
                return 'assets/condensed-milk-cookies.jpg';
            case 'Galetes de xocolata':
                return 'assets/chocolate-chip-cookies.jpg';
            case 'Galetes integrals':
                return 'assets/integral-cookies.jpg';
            case 'Galetes Saladitas':
                return 'assets/Saladitas.jpg';
            case 'Galetes Snakers':
                return 'assets/Snakers.jpg';
            case 'Galetes de Pizza':
                return 'assets/GalletaPizza.jpg';
            default:
                return '';
        }
    }

    ngOnInit() {}
}
