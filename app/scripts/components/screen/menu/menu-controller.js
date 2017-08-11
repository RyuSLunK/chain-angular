(function(){

  angular
    .module('chainAngularApp')
    .controller('menuController', menuController);

    menuController.$inject = [
      '$scope',
      'menuModel',
      'ngDialog',
      '$q'
    ];

    function menuController(
      $scope,
      menuModel,
      ngDialog,
      $q
    ) {
      /*implementation details*/
      var controller = this;

      _.merge(controller, {
        newGameClicked: newGameClicked,
        saveGameClicked: saveGameClicked,
        loadGameClicked: loadGameClicked,
        deleteGameClicked: deleteGameClicked,
        currentGameKey: ''
      });

      function newGameClicked(){
        openFileSelectModal('menuController.newGame');
      }

      function saveGameClicked(){
        $scope.$root.$broadcast('menuController.saveGame',controller.currentGameKey);
      }

      function loadGameClicked(){
        openFileSelectModal('menuController.loadGame');
      }

      function deleteGameClicked(){
        openFileSelectModal('menuController.deleteGame');
      }

      function openFileSelectModal(mode){
        var modalOptions = {
          template: 'scripts/components/screen/menu/modals/file-select-modal-template.html',
          controller: 'FileSelectController',
          controllerAs: 'controller',
          resolve: {
            mode: function() {
              return mode;
            }
          }
        };
       ngDialog.openConfirm(modalOptions).then(onModalConfirm,onModalCancel);
      }

      function onModalConfirm(modalData){
        var appEvent = modalData.appEvent;
        var gameOptions = {
          gameKey: modalData.gameKey,
          gameInits: {
            columnCount: modalData.columnCount,
            rowCount: modalData.rowCount
          }
        }
        $scope.$root.$broadcast(appEvent,gameOptions);

        if(appEvent === 'menuController.newGame' || appEvent === 'menuController.loadGame'){
          controller.currentGameKey = gameOptions.gameKey;
        }
      }

      function onModalCancel(){

        return;
      }

    }

})();
