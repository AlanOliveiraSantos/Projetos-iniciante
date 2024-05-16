import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy, DoCheck{

  num: number = 1;

  ngOnDestroy(): void {
      console.log('Destruiu')
  }
  ngDoCheck(): void {
      console.log('Uma mudança foi feita')
  }
  adiciona1() {
    this.num++;
  }
}
