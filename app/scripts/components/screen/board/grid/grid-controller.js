(function(){

  angular
    .module('chainAngularApp')
    .controller('gridController', gridController);

    gridController.$inject = [
      '$scope',
      'gridModel',
      '$timeout',
      '$rootScope',
      'boardService',
      'gridService',
      '$window',
      '$timeout'
    ];

    function gridController(
      $scope,
      gridModel,
      $timeout,
      $rootScope,
      boardService,
      gridService,
      $window,
      $timeout
    ) {
      /*implementation details*/
      var controller = this;
      controller.model = gridModel.new();

      $scope.$on('menuController.newGame',newGame);
      $scope.$on('menuController.loadGame',loadGame);
      $scope.$on('menuController.saveGame',saveGame);
      $scope.$on('menuController.deleteGame', deleteGame);

      function newGame(evt, gameOptions){
        delete controller.model;
        controller.model = gridModel.new(gameOptions.gameInits);
      }

      function saveGame(evt,gameKey){
        var key = gameKey || "game";
        $window.localStorage.setItem(key,JSON.stringify(controller.model.exportGameData()));
      }

      function loadGame(evt,gameInits){
        delete controller.model;
        var key = gameInits.gameKey || "game";
        var gameData;
        gameData = JSON.parse($window.localStorage[key]);
        controller.model = gridModel.new(gameData);
      }

      function deleteGame(gameKey){
        var key = gameKey || "game"
        delete $window.localStorage[gameKey];
        $window.localStorage.removeItem(key);
      }

    }

})();
