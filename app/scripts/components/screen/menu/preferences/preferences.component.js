
(function(){
  'use strict';

  /**
  * @desc description of an example component
  * @example <example-component></example-component>
  */

  angular
    .module('chainAngularApp')
    .component('preferencesComponent', {
        templateUrl: 'scripts/components/screen/menu/preferences/preferences-template.html',
        controller: 'preferencesController as controller'
    });

})();
