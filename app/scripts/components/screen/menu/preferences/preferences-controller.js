(function(){

  angular
    .module('chainAngularApp')
    .controller('exampleController', exampleController);

    exampleController.$inject = [
      '$scope'
    ];

    function exampleController(
      $scope
    ) {
      /*implementation details*/
    }

})();
