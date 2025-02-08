angular.module('aplicacao').controller('NovaInscricaoController', function($scope, $timeout, AlunosCollectionService) {
    $scope.submeter = function() {
        if ($scope.form_1.$valid) {
            let novo_aluno = {
                nome: $scope.nome_aluno,
                idade: parseInt($scope.idade_aluno, 10) || 0 // Evita NaN
            };

            AlunosCollectionService.adicionarAluno(novo_aluno);

            // Resetando os campos do formulário
            $scope.nome_aluno = "";
            $scope.idade_aluno = "";

            // Retornar o foco para o campo "Nome"
            $timeout(function() {
                document.getElementById('nome_aluno').focus();
            }, 0);
        } else {
            alert("Preencha o formulário corretamente");
        }
    };
});