(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('example-directive', exampleDirective);

  function exampleDirective(){

    var directive = {
        templateUrl: 'skeletons/components/example-template.html',
        scope: {},
        controllerAs: 'controller',
        controller: 'exampleController',
        bindToController: true
    };

    return directive;
  }

})();
