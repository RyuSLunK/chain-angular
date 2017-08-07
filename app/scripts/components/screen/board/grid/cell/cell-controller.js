(function(){

  angular
    .module('chainAngularApp')
    .controller('cellController', cellController);

    cellController.$inject = [
      '$scope',
      'cellModel'
    ];

    function cellController(
      $scope,
      cellModel
    ) {
      /*implementation details*/
      var controller = this;
      controller.model = cellModel.new();
      controller.clickHandler = clickHandler;

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
          });
        }

      }

      function notifyBursting(newValue, oldValue){
        if(newValue === true){
          var message = {
            columnIndex: controller.model.columnIndex,
            rowIndex: controller.model.rowIndex
          };
          $scope.$emit("cell-burst", message);
          controller.model.resetCount();
        }
      }

      function clickHandler() {
        controller.model.incrementCount();
      }

      function onNotifyIncrement(){
        controller.model.incrementCount();
      }
    }

})();
