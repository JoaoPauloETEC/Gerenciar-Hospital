namespace Hospital{
    export class ProntoSocorro{
        private _codProntoSocorro:number;
        private _endereco:string;

        public getCodProntoSocorro(){
            return this._codProntoSocorro;
        }
        public setCodProntoSocorro(codigo:number){
            this._codProntoSocorro = codigo;
        }

        public setEndereco(endereco:string){
            this._endereco = endereco;
        }
        public getEndereco(){
            return this._endereco;
        }
    }
}