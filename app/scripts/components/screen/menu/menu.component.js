
(function(){
  'use strict';

  /**
  * @desc description of an example component
  * @example <example-component></example-component>
  */

  angular
    .module('chainAngularApp')
    .component('menuComponent', {
        templateUrl: 'scripts/components/screen/menu/menu-template.html',
        controller: 'menuController as controller'
    });


})();
