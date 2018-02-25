var app = angular.module('MemeApp', []);
app.controller('MemeController', function($scope, $http) {
  var randNum = 0;
  var after = "null"
  $scope.greeting = "hi";
  $scope.getRandomMeme = function() {
    randNum = Math.floor(Math.random()*5);
    randNumString = randNum.toString();
    $http.get('https://www.reddit.com/r/me_irl/new.json?sort=new&limit=5&after='+after).
    then(function(response) {
      //$scope.greeting = response.data;
      $scope.title = response.data.data.children[randNumString].data.title;
      $scope.imageURL = response.data.data.children[randNumString].data.url;
      console.log(response);
      after = response.data.data.after;
    });
  }
});
