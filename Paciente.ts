///<reference path="Pessoa.ts"/>
///<reference path="ISetor.ts"/>
namespace Hospital{
    export class Paciente extends Pessoa implements ISetor{
        private _codPaciente:number;
        private _hospital:Hospital;
        private _setor:number;

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

        public setSetor(setor:number){
            this._setor = setor;
        }
        public mostrarSetor(){
            return this._setor;
        }
    }
}