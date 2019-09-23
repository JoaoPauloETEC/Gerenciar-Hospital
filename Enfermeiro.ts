///<reference path="Funcionario.ts"/>
namespace Hospital{
    export class Enfermeiro extends Funcionario implements ISetor{
        private _coren:number;
        private _hospital:Hospital;
        private _setor:number;

        public getCoren(){
            return this._coren;
        }
        public setCoren($Coren:number){
            this._coren = $Coren;
        }

        public setHospital(hospital:Hospital){
            this._hospital = hospital;
        }
        public getHospital(){
            return this._hospital;
        }

        public setSetor(setor:number){
            this._setor = setor;
        }
        public mostrarSetor(){
            return this._setor;
        }
    }
}