angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){
    var WeatherChannel = $resource('https://api.openweathermap.org/data/2.5/weather?lat=-30.033056&lon=-51.230000&units=metric&appid=cdfd09a5c4ab3588ef5e4e8dd0e8f9ef');

    var getWeather = function () {
        WeatherChannel.get().$promise.then(function(response){
            $scope.tempo = response;
            console.log(response);
        }, function (promise){
            alert("Erro ao Requisitar o Recurso!")
        })
    }

    getWeather();
});