angular.module('aplicacao').controller('PrimeiroController', function($scope, $filter){
    $scope.nome = 'Jean Lencina';
    var nome = 'Lá Lá Lá';

    $scope.iniciado = true;

    //$scope.alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'];
    $scope.alunos = [{'nome': 'Joãozinho', 'idade': 9},
        {'nome': 'Ricardinho', 'idade': 11},
        {'nome': 'Felipinho', 'idade': 11},
        {'nome': 'Zildinha', 'idade': 14},
        {'nome': 'Marianinha', 'idade': 10},
        {'nome': 'Luluzinha', 'idade': 12}];

    $scope.hoje = new Date();

    $scope.finalizar = function(){
        $scope.iniciado = false;
    };

    $scope.iniciar = function() {
        $scope.iniciado = true;
    };

    $scope.ordenarPorNome = function(){
        $scope.ordenadoPorNome = !$scope.ordenadoPorNome;
        $scope.alunos = $filter('orderBy')($scope.alunos, 'nome', $scope.ordenadoPorNome);
    }

    $scope.ordenarPorIdade = function(){
        $scope.ordenadoPorIdade = !$scope.ordenadoPorIdade
        $scope.alunos = $filter('orderBy')($scope.alunos, 'idade', $scope.ordenadoPorIdade)
    }

    $scope.submeter = function() {
        if($scope.form_1.$valid) {
            novo_aluno = {};
            novo_aluno['nome'] = $scope.nome_aluno;
            novo_aluno['idade'] = parseInt($scope.idade_aluno);
            $scope.alunos.push(novo_aluno);
            $scope.nome_aluno = "";
            $scope.idade_aluno = "";
        } else {
            alert("Preencha o formulário corretamente");
        }
    };

    //$scope.submeter = function(){
    //    if ($scope.form_1.$valid) {
    //        $scope.alunos.push($scope.nome_aluno);
    //        $scope.nome_aluno = '';
    //    }else{
    //        alert('Preencha o formulário corretamente!')
    //    }
    //};
});