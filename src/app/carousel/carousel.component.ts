import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  index = 2;
 
  readonly items = [
      'John Cleese',
      'Eric Idle',
      'Michael Palin',
      'Graham Chapman',
      'Terry Gilliam',
      'Terry Jones',
  ];

}
