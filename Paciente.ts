///<reference path="Pessoa.ts"/>
namespace Hospital{
    export class Paciente extends Pessoa{
        private _codPaciente:number;
        private _hospital:Hospital;

        public getCodPaciente(){
            return this._codPaciente;
        }
        public setCodPaciente(codigo:number){
            this._codPaciente = codigo;
        }

        public setHospital(hospital:Hospital){
            this._hospital = hospital;
        }
        public getHospital(){
            return this._hospital;
        }
    }
}