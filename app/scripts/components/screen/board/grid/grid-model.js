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

      var constructor = function(loadedGameData) {

          var model;

          model = _.merge({
            columnCount: 6,
            rowCount: 9,
            rowList: [],
            currentPlayer: 1,
            cellIncrement: cellIncrement,
            cellClick: cellClick,
            playerTotals: [0,0],
            exportGameData: exportGameData
          }, loadedGameData);

          if(model.rowList.length === 0){
            model.rowList = gridService.createGrid(model.columnCount, model.rowCount);
          }

          return model;

          function cellClick(cell){
            if(cell.owner == model.currentPlayer || cell.owner == null){
              cellIncrement(cell,model.currentPlayer);
              if(model.currentPlayer == 1){
                model.currentPlayer = 2;
              } else {
                model.currentPlayer = 1;
              }
            }
          }

          function cellIncrement(cell, playerTurn){
            if(window.endGameMessageSeen) return;
            if(cell.owner != playerTurn && cell.owner != null) {
              console.log("overtake");
              model.playerTotals[cell.owner - 1] -= cell.currentCount;
              model.playerTotals[playerTurn - 1] += cell.currentCount;
              if(model.playerTotals[cell.owner - 1] <= 0){
                //end the game!
                if(!window.messageSeen){
                  window.endGameMessageSeen = true;
                  alert("PLAYER " + playerTurn + " wins!!!");
                }
                return;
              }
            }
            cell.currentCount += 1;
            model.playerTotals[playerTurn - 1] += 1;
            cell.owner = playerTurn;

            if(cell.currentCount > cell.maxCount){
              cell.currentCount = cell.currentCount - cell.maxCount - 1;
              model.playerTotals[playerTurn - 1] -= cell.maxCount + 1;
              var cellElements = $("#cell-" + cell.rowIndex + "-" + cell.columnIndex)
              .siblings(".burst-group")
              .find(".burst-cell")
              .addClass("burst");
              $timeout(function(){
                cellElements.removeClass("burst");
                cell.owner = null;
                cell.critical = false;
                if(cell.targets.up){
                  cellIncrement(model.rowList[cell.rowIndex - 1][cell.columnIndex],playerTurn);
                }
                if(cell.targets.down){
                  cellIncrement(model.rowList[cell.rowIndex + 1][cell.columnIndex],playerTurn);
                }
                if(cell.targets.left){
                  cellIncrement(model.rowList[cell.rowIndex][cell.columnIndex - 1],playerTurn);
                }
                if(cell.targets.right){
                  cellIncrement(model.rowList[cell.rowIndex][cell.columnIndex + 1],playerTurn);
                }
              },500);
            } else if(cell.currentCount === cell.maxCount){
              cell.critical = true;
            }

          }

          function exportGameData(){
            return _.pick(model,['columnCount','rowCount','rowList','currentPlayer','playerTotals']);
          }



      };

      return {
          new: constructor
      };

      /* helper functions */


  }

})();
