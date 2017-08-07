
(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('gridDirective', gridDirective);

  function gridDirective(){

    var directive = {
        templateUrl: 'scripts/components/screen/board/grid/grid-template.html',
        scope: {},
        controllerAs: 'controller',
        controller: 'gridController',
        bindToController: true
    };

    return directive;
  }

})();
