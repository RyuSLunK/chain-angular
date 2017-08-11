
(function(){
  'use strict';

  /**
  * @desc description of an example component
  * @example <example-component></example-component>
  */

  angular
    .module('chainAngularApp')
    .component('gridComponent', {
        templateUrl: 'scripts/components/screen/board/grid/grid-template.html',
        controller: 'gridController as controller'
    });

})();
