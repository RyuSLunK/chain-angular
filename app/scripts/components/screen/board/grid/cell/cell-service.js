(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .service('cellService', cellService);

  function cellService(){

    return {
      createCell: createCell
    };

    function createCell(columnIndex, rowIndex, columnCount, rowCount) {
      var cell = {
        targets: {
          up: true,
          down: true,
          left: true,
          right: true
        },
        maxCount: 0,
        currentCount: 0,
        owner: null,
        columnIndex: columnIndex,
        rowIndex: rowIndex
      };

      if(columnIndex === 0){
        /* first column*/
        if(rowIndex === 0){
          /*upper left corner*/
          cell.targets.up = false;
          cell.targets.left = false;
          cell.maxCount = 1;
        } else if(rowIndex === rowCount - 1){
          /*lower left corner*/
          cell.targets.down = false;
          cell.targets.left = false;
          cell.maxCount = 1;
        } else {
          /*left edge*/
          cell.targets.left = false;
          cell.maxCount = 2;
        }
      } else if(columnIndex === columnCount - 1){
        /*last column*/
        if(rowIndex === 0){
          /*upper right corner*/
          cell.targets.up = false;
          cell.targets.right = false;
          cell.maxCount = 1;
        } else if(rowIndex === rowCount - 1){
          /*lower right corner*/
          cell.targets.down = false;
          cell.targets.right = false;
          cell.maxCount = 1;
        } else {
          /*right edge*/
          cell.targets.right = false;
          cell.maxCount = 2;
        }
      } else {
        /*middle columns*/
        if(rowIndex === 0){
          /* upper edges */
          cell.targets.up = false;
          cell.maxCount = 2;
        } else if (rowIndex === rowCount - 1) {
          /* lower edges */
          cell.targets.down = false;
          cell.maxCount = 2;
        } else {
          /* middle cells */
          cell.maxCount = 3;
        }
      }

      return cell;
    }
  }

})();
