
(function(){
  'use strict';

  /**
  * @desc description of an example component
  * @example <example-component></example-component>
  */

  angular
    .module('chainAngularApp')
    .component('boardComponent', {
        templateUrl: 'scripts/components/screen/board/board-template.html',
        controller: 'boardController as controller'
    });
})();
