jacksonSite.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.email = 'email: jackson_duhon@yahoo.com';
  $scope.linkedIn = "insert linkedin thingy"

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
