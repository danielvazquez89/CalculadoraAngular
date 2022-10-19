import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appcal',
  templateUrl: './appcal.component.html',
  styleUrls: ['./appcal.component.css'],
})
export class AppcalComponent implements OnInit {
  resultado: number;
  temporal: string;
  isNaN: boolean;
  numeros: Array<number>;
  operaciones: Array<string>;
  ansUsado: boolean;

  operacionEntera: string;
  //operacionesPosibles = new Set<string>(['+', '-', '*', '/']);
  constructor() {
    this.resultado = 0.0;
    this.temporal = '';
    this.numeros = [0.0];
    this.operaciones = [''];
    this.operacionEntera = '';
    this.resultado = 0;
    this.ansUsado = false;
    this.isNaN = false;
  }

  ngOnInit(): void {}

  addNumero(input: string) {
    if (
      parseInt(input) ||
      (input === '0' && this.temporal !== '') ||
      input === '.'
    ) {
      this.temporal += input;
      this.operacionEntera += input;
    } else {
      //console.log('Pusheando numero ' + parseFloat(this.temporal));
      if (this.temporal === '' && this.resultado != 0 && !this.ansUsado) {
        this.numeros.push(this.resultado);
        this.operacionEntera += 'Ans ' + input + ' ';
        this.ansUsado = true;
      } else {
        this.numeros.push(parseFloat(this.temporal));
        //console.log('Pusheando operacion ' + input);
        this.operacionEntera += ' ' + input + ' ';
        this.temporal = '';
      }
      this.operaciones.push(input);
    }
    //console.log(input);
  }

  calcular() {
    this.numeros.push(parseFloat(this.temporal));
    //console.log('Pusheando numero ' + parseInt(this.temporal));
    for (let i = 1; i < this.numeros.length - 1; i++) {
      if (this.operaciones[i] === '+')
        this.numeros[i + 1] = this.numeros[i] + this.numeros[i + 1];
      if (this.operaciones[i] === '-')
        this.numeros[i + 1] = this.numeros[i] - this.numeros[i + 1];
      if (this.operaciones[i] === 'X')
        this.numeros[i + 1] = this.numeros[i] * this.numeros[i + 1];
      if (this.operaciones[i] === '/')
        this.numeros[i + 1] = this.numeros[i] / this.numeros[i + 1];
    }
    this.numeros.forEach((element) => {
      console.log(element);
    });
    this.resultado = this.numeros[this.numeros.length - 1];
    if (isNaN(this.resultado)) this.isNaN = true;
    else this.isNaN = false;
    this.numeros = [0];
    this.operaciones = [''];
    this.operacionEntera = '';
    this.temporal = '';
    this.ansUsado = false;
  }

  // Falta reajustarlo lo usa el botón comentado del html CE
  clearError() {
    this.operacionEntera = this.operacionEntera.substring(
      0,
      this.operacionEntera.length - 1
    );
    this.temporal = '';
    this.numeros = [0.0];
    this.operaciones = [''];
    this.ansUsado = false;
    this.isNaN = false;
    for (let i = 0; i < this.operacionEntera.length; i++) {
      this.addNumero(this.operacionEntera.charAt(i));
    }
  }

  refresh() {
    this.temporal = '';
    this.numeros = [0.0];
    this.operaciones = [''];
    this.operacionEntera = '';
    this.resultado = 0;
    this.ansUsado = false;
    this.isNaN = false;
  }
}
