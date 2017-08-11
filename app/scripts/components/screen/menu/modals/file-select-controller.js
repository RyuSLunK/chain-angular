(function(){

  angular
    .module('chainAngularApp')
    .controller('FileSelectController', fileSelectController);

    fileSelectController.$inject = [
      '$scope',
      'mode'
    ];

    function fileSelectController(
      $scope,
      mode
    ) {
      /*implementation details*/
      var controller = this;
      controller.mode = mode;
      controller.maxFiles = 9;
      controller.files = [];
      controller.selectedGameKey = '';
      controller.rowCount = 9;
      controller.columnCount = 6;
      controller.setGameKey = setGameKey;
      controller.isFileButtonDisabled = isFileButtonDisabled;
      controller.isSubmitDisabled = isSubmitDisabled;
      controller.save = save;

      for(var i = 0; i < controller.maxFiles; i++) {
        var key = "game" + (i + 1);
        var file = {
          gameKey: key,
          exists: !!localStorage[key]
        };
        controller.files.push(file);
      }

      function setGameKey(file) {
        controller.selectedGameKey = file.gameKey;
      }

      function isFileButtonDisabled(file){
        var isDisabled = false;
        if(controller.mode === 'menuController.newGame'){
          isDisabled = !!file.exists;
        } else if(controller.mode === 'menuController.loadGame'){
          isDisabled = !file.exists;
        } else if(controller.mode === 'menuController.deleteGame'){
          isDisabled = !file.exists;
        }
        return isDisabled;
      }

      function isSubmitDisabled(){
        var isDisabled = false;
        if(controller.selectedGameKey === ''){
          isDisabled = true;
        } else if(controller.mode === 'menuController.newGame') {
          isDisabled = !controller.columnCount || !controller.rowCount;
        }
        return isDisabled;
      }

      function save(){
        var saveObj = {
          gameKey: controller.selectedGameKey,
          appEvent: controller.mode,
          columnCount: controller.columnCount,
          rowCount: controller.rowCount
        }
        $scope.confirm(saveObj);
      }

    }

})();
