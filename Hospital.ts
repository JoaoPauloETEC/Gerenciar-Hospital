namespace Hospital{
    export class Hospital{
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];
        private _prontoSocorros:Array<ProntoSocorro> = [];

        public getNome(){
            return this._nome;
        }
        public setNome(nome:string){
            this._nome = nome;
        }

        //Enfermeiro
        public getEnfermeiros(){
            return this._enfermeiros;
        }
        public addEnfermeiro(enfermeiro:Enfermeiro){
            this._enfermeiros.push(enfermeiro);
        }

        //Medico
        public getMedicos(){
            return this._medicos;
        }
        public addMedico(medico:Medico){
            this._medicos.push(medico);
        }

        //Paciente
        public getPacientes(){
            return this._pacientes;
        }
        public addPaciente(paciente:Paciente){
            this._pacientes.push(paciente);
        }

        public getProntoSocorro(){
            return this._prontoSocorros;
        }
        public addProntoSocorro(ProntoSocorro:ProntoSocorro){
            this._prontoSocorros.push(ProntoSocorro);
        }

    }
}