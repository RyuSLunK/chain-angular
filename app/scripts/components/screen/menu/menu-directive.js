
(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('menuDirective', menuDirective);

  function menuDirective(){

    var directive = {
        templateUrl: 'scripts/components/screen/menu/menu-template.html',
        scope: {},
        controllerAs: 'controller',
        controller: 'menuController',
        bindToController: true
    };

    return directive;
  }

})();
