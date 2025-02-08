angular.module('aplicacao').controller('ListagemAlunos', function($scope, $filter, AlunosCollectionService){
    $scope.nome = 'Jean Lencina';
    var nome = 'Lá Lá Lá';

    $scope.iniciado = true;

    //$scope.alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'];
    $scope.alunos = AlunosCollectionService.getAlunos();

    $scope.hoje = new Date();

    $scope.finalizar = function(){
        $scope.iniciado = false;
    };

    $scope.iniciar = function() {
        $scope.iniciado = true;
    };

    $scope.ordenarPorNome = function(){
        AlunosCollectionService.ordenarPorNome();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.ordenarPorIdade = function(){
        AlunosCollectionService.ordenarPorIdade();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    //$scope.submeter = function(){
    //    if ($scope.form_1.$valid) {
    //        $scope.alunos.push($scope.nome_aluno);
    //        $scope.nome_aluno = '';
    //    }else{
    //        alert('Preencha o formulário corretamente!')
    //    }
    //};
});