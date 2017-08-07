
(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .directive('preferencesDirective', preferencesDirective);

  function preferencesDirective(){

    var directive = {
        templateUrl: 'scripts/components/screen/menu/preferences/preferences-template.html',
        scope: {},
        controllerAs: 'controller',
        controller: 'preferencesController',
        bindToController: true
    };

    return directive;
  }

})();
