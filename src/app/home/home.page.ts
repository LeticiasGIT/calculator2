import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  operacao="";
  operador="";
  numeroA: any;
  numeroB: any;
  numero: number=0;

  adicionarDigito(digito: number) {
    this.numero += digito;
  }
  
  adicionarOperador(operador: string) {
    this.operador = operador;
    this.numero = parseFloat(this.numeroA);
    this.numero = parseFloat(this.numeroB);
    this.operacao = '';
  }


  calcular(){
    if (this.operador && this.operacao && this.numeroA !== undefined && this.numeroB !== undefined){
      this.numero = parseFloat(this.numeroB);
      let resultado:number =0;
      switch (this.operador) {
        case '/':
          resultado =this.numeroA/this.numeroB;
          break;
        case '*':
          resultado =this.numeroA * this.numeroB;
          break;
        case '-':
          resultado = this.numeroA - this.numeroB;
          break;
        case "+":
          resultado = this.numeroA + this.numeroB;
          break;
      }
      this.operacao = resultado.toString();
      this.operador = "";
      this.numeroA = undefined;
      this.numeroB = undefined;
    }
  }

  limpar(){
    this.operacao = "";
    this.operador ="";
    this.numeroA = undefined;
    this.numeroB = undefined;
  }


}
