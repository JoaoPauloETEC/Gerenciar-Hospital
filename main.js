var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hospital;
(function (Hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getCPF = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCPF = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
    Hospital.Pessoa = Pessoa;
})(Hospital || (Hospital = {}));
///<reference path="Pessoa.ts"/>
///<reference path="ISetor.ts"/>
var Hospital;
(function (Hospital) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype.setCodPaciente = function (codigo) {
            this._codPaciente = codigo;
        };
        Paciente.prototype.setHospital = function (hospital) {
            this._hospital = hospital;
        };
        Paciente.prototype.getHospital = function () {
            return this._hospital;
        };
        Paciente.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Paciente.prototype.mostrarSetor = function () {
            return this._setor;
        };
        return Paciente;
    }(Hospital.Pessoa));
    Hospital.Paciente = Paciente;
})(Hospital || (Hospital = {}));
///<reference path="Pessoa.ts"/>
var Hospital;
(function (Hospital) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (codigo) {
            this._codFuncionario = codigo;
        };
        return Funcionario;
    }(Hospital.Pessoa));
    Hospital.Funcionario = Funcionario;
})(Hospital || (Hospital = {}));
///<reference path="Funcionario.ts"/>
var Hospital;
(function (Hospital) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype.setCoren = function ($Coren) {
            this._coren = $Coren;
        };
        Enfermeiro.prototype.setHospital = function (hospital) {
            this._hospital = hospital;
        };
        Enfermeiro.prototype.getHospital = function () {
            return this._hospital;
        };
        Enfermeiro.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Enfermeiro.prototype.mostrarSetor = function () {
            return this._setor;
        };
        return Enfermeiro;
    }(Hospital.Funcionario));
    Hospital.Enfermeiro = Enfermeiro;
})(Hospital || (Hospital = {}));
///<reference path="Funcionario.ts"/>
var Hospital;
(function (Hospital) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.getCRM = function () {
            return this._crm;
        };
        Medico.prototype.setCRM = function ($crm) {
            this._crm = $crm;
        };
        Medico.prototype.getCodEspecialidade = function () {
            return this._especialidade;
        };
        Medico.prototype.setCodEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        Medico.prototype.setHospital = function (hospital) {
            this._hospital = hospital;
        };
        Medico.prototype.getHospital = function () {
            return this._hospital;
        };
        return Medico;
    }(Hospital.Funcionario));
    Hospital.Medico = Medico;
})(Hospital || (Hospital = {}));
var Hospital;
(function (Hospital_1) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
            this._prontoSocorros = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        //Enfermeiro
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        //Medico
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addMedico = function (medico) {
            this._medicos.push(medico);
        };
        //Paciente
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this._pacientes.push(paciente);
        };
        Hospital.prototype.getProntoSocorro = function () {
            return this._prontoSocorros;
        };
        Hospital.prototype.addProntoSocorro = function (ProntoSocorro) {
            this._prontoSocorros.push(ProntoSocorro);
        };
        return Hospital;
    }());
    Hospital_1.Hospital = Hospital;
})(Hospital || (Hospital = {}));
var Hospital;
(function (Hospital) {
    var ProntoSocorro = /** @class */ (function () {
        function ProntoSocorro() {
        }
        ProntoSocorro.prototype.getCodProntoSocorro = function () {
            return this._codProntoSocorro;
        };
        ProntoSocorro.prototype.setCodProntoSocorro = function (codigo) {
            this._codProntoSocorro = codigo;
        };
        ProntoSocorro.prototype.setEndereco = function (endereco) {
            this._endereco = endereco;
        };
        ProntoSocorro.prototype.getEndereco = function () {
            return this._endereco;
        };
        return ProntoSocorro;
    }());
    Hospital.ProntoSocorro = ProntoSocorro;
})(Hospital || (Hospital = {}));
///<reference path="Pessoa.ts"/>
///<reference path="Paciente.ts"/>
///<reference path="Funcionario.ts"/>
///<reference path="Medico.ts"/>
///<reference path="Enfermeiro.ts"/>
///<reference path="Hospital.ts"/>
var Hospital;
(function (Hospital) {
    //Instanciando Classe;
    //Hospitais
    var hospital = new Hospital.Hospital();
    hospital.setNome("Hospital Einstein");
    var hospital2 = new Hospital.Hospital();
    hospital2.setNome("Hospital Madalena");
    //Pacientes
    var paciente = new Hospital.Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome('Pelé');
    paciente.setCPF('123.123.123-34');
    paciente.setHospital(hospital);
    paciente.setSetor(24);
    var paciente2 = new Hospital.Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome('Maradona');
    paciente2.setCPF('231.456.234-23');
    paciente2.setHospital(hospital2);
    paciente2.setSetor(25);
    var paciente3 = new Hospital.Paciente();
    paciente3.setCodPaciente(3);
    paciente3.setNome('Mendonça');
    paciente3.setCPF('534.567.342-34');
    paciente3.setHospital(hospital);
    paciente3.setSetor(34);
    //Enfermeiros
    var enfermeiro = new Hospital.Enfermeiro();
    enfermeiro.setCodFuncionario(1);
    enfermeiro.setNome('Abigail');
    enfermeiro.setCPF('394.394.284-96');
    enfermeiro.setCoren(273485);
    enfermeiro.setHospital(hospital2);
    enfermeiro.setSetor(25);
    var enfermeiro2 = new Hospital.Enfermeiro();
    enfermeiro2.setCodFuncionario(2);
    enfermeiro2.setNome('Jezabel');
    enfermeiro2.setCPF('435.592.059-23');
    enfermeiro2.setCoren(273485);
    enfermeiro2.setHospital(hospital);
    enfermeiro2.setSetor(24);
    var enfermeiro3 = new Hospital.Enfermeiro();
    enfermeiro3.setCodFuncionario(2);
    enfermeiro3.setNome('Ingrid');
    enfermeiro3.setCPF('567.897.879-76');
    enfermeiro3.setCoren(273485);
    enfermeiro3.setHospital(hospital);
    enfermeiro3.setSetor(34);
    //Médicos
    var medico = new Hospital.Medico();
    medico.setCodFuncionario(1);
    medico.setNome('Dr. Pedro');
    medico.setCPF('398.475.173-57');
    medico.setCodEspecialidade(2);
    medico.setCRM(0984);
    medico.setHospital(hospital2);
    var medico2 = new Hospital.Medico();
    medico2.setCodFuncionario(2);
    medico2.setNome('Dra. Maria');
    medico2.setCPF('938.765.123-67');
    medico2.setCodEspecialidade(4);
    medico2.setCRM(0984);
    medico2.setHospital(hospital2);
    var medico3 = new Hospital.Medico();
    medico3.setCodFuncionario(3);
    medico3.setNome('Dr. Alan');
    medico3.setCPF('798.345.456-56');
    medico3.setCodEspecialidade(2);
    medico3.setCRM(0984);
    medico3.setHospital(hospital);
    //Exibir dados
    //document.getElementById('codP').textContent = paciente.getCodPaciente().toString();
    //document.getElementById('nomeP').textContent = paciente.getNome();
    //document.getElementById('cpfP').textContent = paciente.getCPF();
    //Adicionar membros ao hospital
    hospital.addPaciente(paciente);
    hospital.addPaciente(paciente2);
    hospital.addPaciente(paciente3);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);
    hospital.addMedico(medico);
    hospital.addMedico(medico2);
    hospital.addMedico(medico3);
    //Paciente
    var tabPaciente = document.getElementById('paciente');
    var conteudo = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Setor</td> </tr>";
    hospital.getPacientes().forEach(function (element) {
        conteudo += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodPaciente() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCPF() + "</td> <td>" + element.mostrarSetor() + "</td> </tr>";
    });
    tabPaciente.innerHTML = conteudo;
    //Enfermeiro
    var tabEnfermeiro = document.getElementById('enfermeiro');
    var conteudo2 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Coren</td> <td>Setor</td>  </tr>";
    hospital.getEnfermeiros().forEach(function (element) {
        conteudo2 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCPF() + "</td> <td>" + element.getCoren() + "</td> <td>" + element.mostrarSetor() + "</td> </tr>";
    });
    tabEnfermeiro.innerHTML = conteudo2;
    //Médico
    var tabMedico = document.getElementById('medico');
    var conteudo3 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>CRM</td> <td>Especialidade</td> </tr>";
    hospital.getMedicos().forEach(function (element) {
        conteudo3 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCPF() + "</td> <td>" + element.getCRM() + "</td> <td>" + element.getCodEspecialidade() + "</td> </tr>";
    });
    tabMedico.innerHTML = conteudo3;
    //Botão com alert para exibir todos
    // document.getElementById('paciente').addEventListener('click',function(){
    //     hospital.getPacientes().forEach(element => {
    //         alert('Paciente: '+element.getNome());
    //     });
    // });
})(Hospital || (Hospital = {}));
