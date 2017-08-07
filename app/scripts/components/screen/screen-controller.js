(function(){

  angular
    .module('chainAngularApp')
    .controller('screenController', screenController);

    screenController.$inject = [
      '$scope',
      'screenModel'
    ];

    function screenController(
      $scope,
      screenModel
    ) {
      /*implementation details*/
    }

})();
