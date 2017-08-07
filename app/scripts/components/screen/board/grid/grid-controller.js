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
      'gridService'
    ];

    function gridController(
      $scope,
      gridModel,
      $timeout,
      $rootScope,
      boardService,
      gridService
    ) {
      /*implementation details*/
      var controller = this;
      controller.model = gridModel.new();
      controller.expectedIncrementCount = 0;
      $scope.$on('cell-burst', onCellBurst);
      $scope.$watch('controller.model.notifyIncrementList', notifyIncrement)

      function onCellBurst(event, coordinates){
        controller.model.queueBurst(coordinates);
      }

      function notifyIncrement(newValue, oldValue){
        if(newValue.length > 0 && newValue !== oldValue){
          /*queue these later*/
          // boardService.setProcessing();
          var broadcastList = _.cloneDeep(newValue);
          controller.model.resetNotifyIncrementList();
          gridService.simulateIncrements(broadcastList,controller.model.rowList);
          for(var i = 0; i < broadcastList.length; i++){
            $scope.$broadcast('notifyIncrement:' + broadcastList[i].rowIndex + ':' + broadcastList[i].columnIndex);
            $scope.$on('uniqueIncrement:' + broadcastList[i].rowIndex + ':' + broadcastList[i].columnIndex, expectedIncrement);
          }
          controller.incrementCount += broadcastList.length;
        }
      }

      function expectedIncrement(isBursting, rowIndex, columnIndex){
        $scope.$off('uniqueIncrement:' + rowIndex + ':' + columnIndex, expectedIncrement);
        controller.incrementCount -= 1;
        checkExpectedIncrements();
      }

      function checkExpectedIncrements(){
        console.log("%c" + controller.incrementCount,"background-color:red;color:black;font-size:16px;");
        if(controller.incrementCount > 0){
          //still have kids who haven't finished
        }
      }

    }

})();
