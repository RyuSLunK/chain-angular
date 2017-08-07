
(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('cellDirective', cellDirective);

  function cellDirective(){

    var directive = {
        templateUrl: 'scripts/components/screen/board/grid/cell/cell-template.html',
        scope: {
          cellData: '='
        },
        controllerAs: 'controller',
        controller: 'cellController',
        bindToController: true
    };

    return directive;
  }

})();
