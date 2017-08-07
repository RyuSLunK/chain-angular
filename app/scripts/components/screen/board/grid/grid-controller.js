(function(){

  angular
    .module('chainAngularApp')
    .controller('gridController', gridController);

    gridController.$inject = [
      '$scope',
      'gridModel'
    ];

    function gridController(
      $scope,
      gridModel
    ) {
      /*implementation details*/
      var controller = this;
        controller.model = gridModel.new();
        $scope.$on('cell-burst', onCellBurst);
        $scope.$watch('controller.model.notifyIncrementList', notifyIncrement)

        function onCellBurst(event, coordinates){
          controller.model.queueBurst(coordinates);
        }

        function notifyIncrement(newValue, oldValue){
          if(newValue.length > 0 && newValue !== oldValue){
            /*queue these later*/
            var broadcastList = _.cloneDeep(newValue);
            $scope.$applyAsync(controller.model.resetNotifyIncrementList);
            for(var i = 0; i < broadcastList.length; i++){
              $scope.$broadcast('notifyIncrement:' + broadcastList[i].rowIndex + ':' + broadcastList[i].columnIndex);
            }
          }
        }
    }

})();
