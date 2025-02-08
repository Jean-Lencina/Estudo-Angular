var app = angular.module('aplicacao', ['ngResource', 'ui.router'])
    .config(function($stateprovider){
        $stateprovider
            .state('aplicacao_inicial', {
            name: 'aplicacao_inicial',
            url: '/inicial.html',
            templateUrl: 'veiws/inicial.html'
    }).state('aplicacao_listagem',{
        name: 'aplicacao_listagem', 
        url: '/listagem.html',
        templateUrl: 'views/listagem-alunos.html',
    }).state('aplicacao_cadastro',{
        name: 'aplicacao_cadastro', 
        url: '/cadastro.html',
        templateUrl: 'views/cadastro-alunos.html',
    }).state('aplicacao_previsao',{
        name: 'aplicacao_previsao', 
        url: '/previsao.html',
        templateUrl: 'views/previsao-do-tempo.html',
    })
    });

app.run(function($rootscope, $state){
    $state.go('aplicacao_inicial')
});