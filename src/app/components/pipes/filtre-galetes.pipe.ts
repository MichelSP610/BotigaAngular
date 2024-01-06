import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtreGaletes',
    pure: false, // Establecer a false para que se actualice en cada cambio
    standalone: true,
})
export class FiltreGaletesPipe implements PipeTransform {
    transform(galetes: any[], filtre: any): any[] {
        if (!galetes || !filtre) {
            return galetes;
        }

        return galetes.filter(galeta => {
            let cumpleixFiltre = true;

            if ((filtre.dolca || filtre.salada) && galeta.gust) {
                cumpleixFiltre = cumpleixFiltre && (filtre.dolca && galeta.gust === 'dolca' || filtre.salada && galeta.gust === 'salada');
            }

            if ((filtre.dura || filtre.tova || filtre.liquida) && galeta.pasta) {
                cumpleixFiltre = cumpleixFiltre && (filtre.dura && galeta.pasta === 'dura' || filtre.tova && galeta.pasta === 'tova' || filtre.liquida && galeta.pasta === 'liquida');
            }

            return cumpleixFiltre;
        });
    }
}
