///<reference path="Pessoa.ts"/>
namespace Hospital{
    export class Funcionario extends Pessoa{
        private _codFuncionario:number;

        public getCodFuncionario(){
            return this._codFuncionario;
        }
        public setCodFuncionario(codigo:number){
            this._codFuncionario = codigo;
        }
    }
}