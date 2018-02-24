var app = angular.module('sampleApp', []);
app.controller('HelloWorldController', function($scope, $http) {
    $scope.greeting= "hi";
    $scope.getRandomMeme = function(){
    $http.get('https://www.reddit.com/r/me_irl/comments/7zxd9h/meirl/.json').
        then(function(response) {
            $scope.greeting = response.data;
        });
      }
});
