(function(){

  angular
    .module('chainAngularApp')
    .controller('preferencesController', preferencesController);

    preferencesController.$inject = [
      '$scope',
      'preferencesModel'
    ];

    function preferencesController(
      $scope,
      preferencesModel
    ) {
      /*implementation details*/
    }

})();
