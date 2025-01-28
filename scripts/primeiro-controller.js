angular.module('aplicacao').controller('PrimeiroController', function($scope){
    $scope.nome = 'Jean Lencina';
    var nome = 'Lá Lá Lá';

    $scope.iniciado = true;

    $scope.alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'];

    $scope.finalizar = function(){
        $scope.iniciado = false;
    };

    $scope.iniciar = function() {
        $scope.iniciado = true;
    };

    $scope.submeter = function(){
        if ($scope.nome_aluno) {
            $scope.alunos.push($scope.nome_aluno);
            $scope.nome_aluno = ''; // Limpa o campo após adicionar
        }
    };
});