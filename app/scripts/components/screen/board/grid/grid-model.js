(function(){
  angular
  .module('chainAngularApp')
  .factory('gridModel',gridModel);

  gridModel.$inject = [
    'cellService',
    'gridService',
    '$timeout'
  ]

  function gridModel(
    cellService,
    gridService,
    $timeout
  ) {

      var constructor = function() {

          var model;

          model = {
            columnCount: 6,
            rowCount: 9,
            rowList: [],
            queueBurst: queueBurst,
            burstList: [],
            notifyIncrementList: [],
            tempNotifyIncrementList: [],
            executeBurst: executeBurst,
            resetNotifyIncrementList: resetNotifyIncrementList
          };

          model.rowList = gridService.createGrid(model.columnCount, model.rowCount);

          return model;

          function queueBurst(coordinates){
            model.burstList.push(coordinates);
            $timeout(serveBursts, 500);
          }

          function serveBursts(){
            if(model.burstList.length > 0){
              /*queue has at least one item*/
              var coordinates = model.burstList.shift()
              var cell = model.rowList[coordinates.rowIndex][coordinates.columnIndex];
              executeBurst(cell);
            } else {
              /* bursting is probably complete */
              model.notifyIncrementList = model.tempNotifyIncrementList;
              model.tempNotifyIncrementList = [];
            }
          }

          function executeBurst(cell){
            if(cell.targets.up){
              model.tempNotifyIncrementList.push({rowIndex: cell.rowIndex - 1, columnIndex: cell.columnIndex});
            }
            if(cell.targets.down){
              model.tempNotifyIncrementList.push({rowIndex: cell.rowIndex + 1, columnIndex: cell.columnIndex});
            }
            if(cell.targets.left){
              model.tempNotifyIncrementList.push({rowIndex: cell.rowIndex, columnIndex: cell.columnIndex - 1});
            }
            if(cell.targets.right){
              model.tempNotifyIncrementList.push({rowIndex: cell.rowIndex, columnIndex: cell.columnIndex + 1});
            }
            $timeout(serveBursts, 500);
          }

          function resetNotifyIncrementList(){
            model.notifyIncrementList = [];
          }

      };

      return {
          new: constructor
      };

      /* helper functions */


  }

})();
