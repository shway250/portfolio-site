jacksonSite.controller('PortfolioCtrl', ['$scope', function($scope) {
  //links
  $scope.accioBikeLink = 'https://accio-bike.herokuapp.com/';
  $scope.wubbaLubbaLink = 'https://shway250.github.io/Rick-Morty-Four-Square/';
  $scope.artemisLink = 'http://artemistracker.herokuapp.com/';
  $scope.euclidLink = 'https://miguelapou.github.io/Euclid/';
  //images
  $scope.wubbaLubbaImg = '../img/wubba-lubba.png';
  $scope.accioBikeImg = '../img/accio-bike.png';
  $scope.artemisImg = '../img/artemis.png';
  $scope.euclidImg = '../img/euclid.png';

  $scope.scroll = function() {
    var paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = paths.indexOf($location.path);

    if(index !== -1) {
      $location.path = paths[index + 1]
    } else {
      $location.path = paths[0];
    }
  }

}]);
