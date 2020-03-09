import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Estas dos variables pueden venir de afuera @Input
  @Input('nombre') leyenda: String = 'Leyenda';
  @Input() progreso: number = 50;

  constructor() {
    console.log('leyenda ', this.leyenda);
    console.log('progreso ', this.progreso);
   }

  ngOnInit() {
  }

  cambiarValor( valor ) {

    if ( this.progreso >= 100 ) {
      return;
    }

    if ( this.progreso <= 0 ) {
      return;
    }

    this.progreso = this.progreso + valor;
    console.log(this.progreso);
  }

}
