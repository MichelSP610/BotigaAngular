
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import { Productesvenuts } from '../models/detall.js';

@Component({
  selector: 'app-historial-productes',
  standalone: true,
  imports: [],
  templateUrl: './historialProductes.component.html',
  styleUrl: './historialProductes.component.css'
})
export class HistorialProductesComponent {

  historialProductos: Productesvenuts[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.http.get<Productesvenuts[]>('http://localhost:3080/historial').subscribe(
      (data: Productesvenuts[]) => {
        this.historialProductos = data;
      },
      (err) => {
        console.error('Error al obtener el historial de productos:', err);
      }
    );
  }
}



