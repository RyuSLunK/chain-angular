(function(){

  angular
    .module('chainAngularApp')
    .controller('boardController', boardController);

    boardController.$inject = [
      '$scope',
      'boardModel'
    ];

    function boardController(
      $scope,
      boardModel
    ) {
      /*implementation details*/
    }

})();
