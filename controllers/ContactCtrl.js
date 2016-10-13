jacksonSite.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.email = 'jackson_duhon@yahoo.com';
  $scope.linkedInImg = '../img/linkedin-2-48.png';
  $scope.gitHubImg = '../img/github-9-48.png';
  $scope.linkedIn = "https://www.linkedin.com/in/jackson-duhon"

  $scope.scroll = function() {
    var paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = paths.indexOf($location.path);

    if(index !== -1) {
      $location.path = paths[index + 1]
    } else {
      $location.path = paths[0];
    }
  }

}])
