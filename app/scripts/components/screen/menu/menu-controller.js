(function(){

  angular
    .module('chainAngularApp')
    .controller('menuController', menuController);

    menuController.$inject = [
      '$scope',
      'menuModel'
    ];

    function menuController(
      $scope,
      menuModel
    ) {
      /*implementation details*/
    }

})();
