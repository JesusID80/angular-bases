import { Component } from '@angular/core';
import { CounterComponent } from './counter/components/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'hola mundo!';
}
