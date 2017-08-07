(function(){

  angular
    .module('chainAngularApp')
    .controller('boardController', boardController);

    boardController.$inject = [
      '$scope',
      'boardModel',
      '$rootScope',
      '$q',
      '$timeout',
      'boardService'
    ];

    function boardController(
      $scope,
      boardModel,
      $rootScope,
      $q,
      $timeout,
      boardService
    ) {
      /*implementation details*/
      var controller = this;
      controller.model = boardModel.new();

      boardService.subscribe('toggleCurrentPlayer', updateModelFromNotify);
      boardService.subscribe('setProcessing', updateModelFromNotify);
      boardService.subscribe('endProcessing', updateModelFromNotify);

      function updateModelFromNotify(){
        console.log("updating model from notify");
        updateModel();
      }

      function updateModel() {
        controller.model.updateWithMerge({
          isProcessing: boardService.getIsProcessing(),
          currentPlayer: boardService.getCurrentPlayer()
        });
      }


    }

})();
