///<reference path="Pessoa.ts"/>
///<reference path="Paciente.ts"/>
///<reference path="Funcionario.ts"/>
///<reference path="Medico.ts"/>
///<reference path="Enfermeiro.ts"/>
///<reference path="Hospital.ts"/>
namespace Hospital{
    //Instanciando Classe;

    //Hospitais
    let hospital = new Hospital();
    hospital.setNome("Hospital Einstein");

    let hospital2 = new Hospital();
    hospital2.setNome("Hospital Madalena");

    //Pacientes
    let paciente = new Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome('Pelé');
    paciente.setCPF('123.123.123-34');
    paciente.setHospital(hospital);
    paciente.setSetor(24);

    let paciente2 = new Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome('Maradona');
    paciente2.setCPF('231.456.234-23');
    paciente2.setHospital(hospital2);
    paciente2.setSetor(25);

    let paciente3 = new Paciente();
    paciente3.setCodPaciente(3);
    paciente3.setNome('Mendonça');
    paciente3.setCPF('534.567.342-34');
    paciente3.setHospital(hospital);
    paciente3.setSetor(34);

    //Enfermeiros
    let enfermeiro = new Enfermeiro();
    enfermeiro.setCodFuncionario(1);
    enfermeiro.setNome('Abigail');
    enfermeiro.setCPF('394.394.284-96');
    enfermeiro.setCoren(273485);
    enfermeiro.setHospital(hospital2);
    enfermeiro.setSetor(25);
    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setCodFuncionario(2);
    enfermeiro2.setNome('Jezabel');
    enfermeiro2.setCPF('435.592.059-23');
    enfermeiro2.setCoren(273485);
    enfermeiro2.setHospital(hospital);
    enfermeiro2.setSetor(24);
    let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setCodFuncionario(2);
    enfermeiro3.setNome('Ingrid');
    enfermeiro3.setCPF('567.897.879-76');
    enfermeiro3.setCoren(273485);
    enfermeiro3.setHospital(hospital);
    enfermeiro3.setSetor(34);

    //Médicos
    let medico = new Medico();
    medico.setCodFuncionario(1);
    medico.setNome('Dr. Pedro');
    medico.setCPF('398.475.173-57');
    medico.setCodEspecialidade(2);
    medico.setCRM(0984);
    medico.setHospital(hospital2);
    let medico2 = new Medico();
    medico2.setCodFuncionario(2);
    medico2.setNome('Dra. Maria');
    medico2.setCPF('938.765.123-67');
    medico2.setCodEspecialidade(4);
    medico2.setCRM(0984);
    medico2.setHospital(hospital2);
    let medico3 = new Medico();
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
    let tabPaciente = document.getElementById('paciente');

    let conteudo = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Setor</td> </tr>";

    hospital.getPacientes().forEach(element => {
        conteudo += "<tr> <td>"+element.getHospital().getNome()+"</td> <td>"+element.getCodPaciente()+"</td> <td>"+element.getNome()+"</td> <td>"+element.getCPF()+"</td> <td>"+element.mostrarSetor()+"</td> </tr>";
    })

    tabPaciente.innerHTML = conteudo;

    //Enfermeiro
    let tabEnfermeiro = document.getElementById('enfermeiro');

    let conteudo2 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Coren</td> <td>Setor</td>  </tr>";

    hospital.getEnfermeiros().forEach(element => {
        conteudo2 += "<tr> <td>"+element.getHospital().getNome()+"</td> <td>"+element.getCodFuncionario()+"</td> <td>"+element.getNome()+"</td> <td>"+element.getCPF()+"</td> <td>"+element.getCoren()+"</td> <td>"+element.mostrarSetor()+"</td> </tr>";
    })

    tabEnfermeiro.innerHTML = conteudo2;

    //Médico
    let tabMedico = document.getElementById('medico');

    let conteudo3 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>CRM</td> <td>Especialidade</td> </tr>";

    hospital.getMedicos().forEach(element => {
        conteudo3 += "<tr> <td>"+element.getHospital().getNome()+"</td> <td>"+element.getCodFuncionario()+"</td> <td>"+element.getNome()+"</td> <td>"+element.getCPF()+"</td> <td>"+element.getCRM()+"</td> <td>"+element.getCodEspecialidade()+"</td> </tr>";
    })

    tabMedico.innerHTML = conteudo3;

    //Botão com alert para exibir todos
    // document.getElementById('paciente').addEventListener('click',function(){
    //     hospital.getPacientes().forEach(element => {
    //         alert('Paciente: '+element.getNome());
    //     });
    // });
}