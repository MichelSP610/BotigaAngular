import { Component, OnInit } from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-proveidors',
  standalone: true,
  imports: [
    BaseChartDirective,
    NgForOf
  ],
  templateUrl: './proveidors.component.html',
  styleUrl: './proveidors.component.css'
})
export class ProveidorsComponent implements OnInit{
  cookies: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/cgi/search.pl?search_terms=cookies&json=1')
      .subscribe(data => {
        this.cookies = data.products;
      });
  }
}
