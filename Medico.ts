///<reference path="Funcionario.ts"/>
namespace Hospital{
    export class Medico extends Funcionario{
        private _crm:number;
        private _especialidade:number;
        private _hospital:Hospital;

        public getCRM(){
            return this._crm;
        }
        public setCRM($crm:number){
            this._crm = $crm;
        }

        public getCodEspecialidade(){
            return this._especialidade;
        }
        public setCodEspecialidade(especialidade:number){
            this._especialidade = especialidade;
        }

        public setHospital(hospital:Hospital){
            this._hospital = hospital;
        }
        public getHospital(){
            return this._hospital;
        }
    }
}