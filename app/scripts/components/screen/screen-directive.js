(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('screenDirective', screenDirective);

  function screenDirective(){
    console.log("screenDirective");
    var directive = {
        templateUrl: 'scripts/components/screen/screen-template.html',
        scope: {},
        controllerAs: 'controller',
        controller: 'screenController',
        bindToController: true
    };

    return directive;
  }

})();
