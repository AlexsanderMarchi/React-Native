export class Conta{

  get saldo(){
    return this._saldo;
  }
  constructor(saldo){
    this._saldo = saldo
  }
  sacar(valor){
    let saldoAtual = this._saldo 
    this._saldo = saldoAtual - valor;
      let multa = (2.5 * this._saldo)/100;
      this._saldo = this._saldo - multa;
      return this._saldo;
    
  }
  depositar(valor){
    let saldoAtual = this._saldo 
    this._saldo = saldoAtual + parseFloat(valor);
    let bonus = valor/100;
    this._saldo = this._saldo + bonus;
    return this._saldo;
     
  }
}