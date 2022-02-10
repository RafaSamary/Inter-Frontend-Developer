

                          // classe pai
class contaBancaria{

    constructor(agencia, numero, tipo){

        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0  // usar _ para diferenciar o uso do GET e SET
    }

    get saldo(){

        return this._saldo;
    }

    set saldo(valor){

        this._saldo = valor;
    }

    sacar(valor){

        if(valor > this._saldo){

            return 'Operação Negada'
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

     depositar(valor){

        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}
   // classe filho herda os parametros do pai + cartão 
class contaCorrente extends contaBancaria{

     constructor(agencia, numero, cartaoCredito){
         super(agencia, numero);

         this.tipo = 'corrente';
         this._cartaoCredito = cartaoCredito;
     }

     get cartaoCredito(){

        return this._cartaoCredito;

     }

     set cartaoCredito (valor){

        this._cartaoCredito = valor;
     }

}
  // classe filho herda os parametros do pai
class contaPoupanca extends contaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);

        this.tipo = 'poupanca';
        
    }

    
}

class contaUniversitaria extends contaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);

        this.tipo = 'universitaria';
        
    }

    sacar(valor){

        if(valor > 500){

            return "Operação Negada"
        }

        this._saldo = this._saldo - valor;

    }
}