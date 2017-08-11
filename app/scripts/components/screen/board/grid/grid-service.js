(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .service('gridService', gridService);

  gridService.$inject = ['cellService'];

  function gridService(cellService){

    var service = {
        createGrid: createGrid,
        simulateIncrements: simulateIncrements
    };

    function createGrid(columnCount, rowCount){
      var rowList = [];
      for(var rowIndex = 0; rowIndex < rowCount; rowIndex++){
        var newRow = [];
        for(var columnIndex = 0; columnIndex < columnCount; columnIndex++){
          newRow.push(cellService.createCell(columnIndex,rowIndex,columnCount,rowCount));
        }
        rowList.push(newRow);
      }
      return rowList;
    }

    function simulateIncrements(broadcastList, rowList){
      
    }


    return service;
  }

})();
