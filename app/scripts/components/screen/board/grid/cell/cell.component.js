
(function(){
  'use strict';

  /**
  * @desc description of an example component
  * @example <example-component></example-component>
  */

  angular
    .module('chainAngularApp')
    .component('cellComponent', {
        templateUrl: 'scripts/components/screen/board/grid/cell/cell-template.html',
        bindings: {
          cellData: '=',
          onCellClick: '&'
        },
        controller: 'cellController as controller'
    });

})();
