///<reference path="Funcionario.ts"/>
namespace Hospital{
    export class Enfermeiro extends Funcionario{
        private _coren:number;
        private _hospital:Hospital;

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
    }
}