angular.module('aplicacao').service('AlunosCollectionService', function($filter, $timeout){
    var ordenadoPorNome = false;
    var ordenadoPorIdade = false;
    var alunos = [
        { 'nome': 'Joãozinho', 'idade': 9 },
        { 'nome': 'Ricardinho', 'idade': 11 },
        { 'nome': 'Felipinho', 'idade': 11 },
        { 'nome': 'Zildinha', 'idade': 14 },
        { 'nome': 'Marianinha', 'idade': 10 },
        { 'nome': 'Luluzinha', 'idade': 12 }
    ];
    
    this.getAlunos = function(){
        return angular.copy(alunos); // Retorna uma cópia para evitar problemas de referência
    };

    this.adicionarAluno = function(novoAluno){
        if (novoAluno && novoAluno.nome && novoAluno.idade >= 0) {
            alunos.push(novoAluno);
            $timeout
        }
    };

    this.ordenarPorNome = function(){
        ordenadoPorNome = !ordenadoPorNome;
        alunos.sort((a, b) => {
            return ordenadoPorNome ? b.nome.localeCompare(a.nome) : a.nome.localeCompare(b.nome);
        });
    };

    this.ordenarPorIdade = function(){
        ordenadoPorIdade = !ordenadoPorIdade;
        alunos.sort((a, b) => {
            return ordenadoPorIdade ? b.idade - a.idade : a.idade - b.idade;
        });
    };
});
