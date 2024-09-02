import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalesPersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sales-project';
}
