
(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('boardDirective', boardDirective);

  function boardDirective(){

    var directive = {
        templateUrl: 'scripts/components/screen/board/board-template.html',
        scope: {},
        controllerAs: 'controller',
        controller: 'boardController',
        bindToController: true
    };

    return directive;
  }

})();
