(function(){

  angular
    .module('chainAngularApp')
    .controller('cellController', cellController);

    cellController.$inject = [
      '$scope',
      'cellModel',
      '$rootScope',
      'boardService'
    ];

    function cellController(
      $scope,
      cellModel,
      $rootScope,
      boardService
    ) {
      /*implementation details*/
      var controller = this;
      controller.model = cellModel.new();
      controller.clickHandler = clickHandler;
      controller.isProcessing = isProcessing;
      $scope.$watch('controller.cellData', updateCellData);
      $scope.$watch('controller.model.bursting', notifyBursting);

      function updateCellData(newValue, oldValue){
        if(newValue){
          $scope.$applyAsync(function(){
            if(!controller.isNotificationListenerSet) {
              $scope.$on('notifyIncrement:' + newValue.rowIndex + ':' + newValue.columnIndex, onNotifyIncrement);
              controller.isNotificationListenerSet = true;
            }
            controller.model.updateWithMerge(newValue);
            console.log("%cUpdating Cell Data","background-color:black;color:white;");
          });
        }

      }

      function notifyBursting(newValue, oldValue){
        if(newValue === true){
          // boardService.setProcessing();
          var message = {
            columnIndex: controller.model.columnIndex,
            rowIndex: controller.model.rowIndex
          };
          $scope.$emit("cell-burst", message);
          controller.model.resetCount();
        }
      }

      function clickHandler() {

        if(!!controller.model.owner && controller.model.owner == boardService.getCurrentPlayer()) {
          return;
        }
        if(!controller.model.critical){
          console.log("togglingPlayer within click handler");
          boardService.toggleCurrentPlayer();
        } else {
          console.log("deferring player toggle for after chain reaction!");
        }
        controller.model.incrementCount();
      }

      function onNotifyIncrement(){
        controller.model.incrementCount();
      }

      function isProcessing(){
        return boardService.getIsProcessing();
      }
    }

})();
