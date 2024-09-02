import { Component} from '@angular/core';

import { OnInit} from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, NgStyle],
  templateUrl: './sales-person-list-boostrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Fatih","ENES","fatihen.es99@outlook.com", 5000),
    new SalesPerson("Samet","Uslu","samet123@gmail.com",4000)
  ];

  constructor(){}

  ngOnInit(): void {
  }

}
