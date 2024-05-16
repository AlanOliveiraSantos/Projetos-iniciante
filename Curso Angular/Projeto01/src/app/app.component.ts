import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Variavel e definir o tipo //
  exibehome: boolean = true;
  destruir(){
    this.exibehome = false;
  }
  exibefooter: boolean = true;
  esconder(){
    this.exibefooter = false;
  }
}
