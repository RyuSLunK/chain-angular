(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .component('screenComponent', {
        templateUrl: 'scripts/components/screen/screen-template.html',
        controller: 'ScreenController as controller'
    });

})();
