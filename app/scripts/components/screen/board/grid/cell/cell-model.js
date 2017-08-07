
(function(){
  angular
  .module('chainAngularApp')
  .factory('cellModel', cellModel);

  cellModel.$inject = ['boardService'];

  function cellModel(boardService) {

      var constructor = function() {

          var model;

          model = {
            targets: {
              up: true,
              down: true,
              left: true,
              right: true
            },
            maxCount: 0,
            currentCount: 0,
            owner: null,
            bursting: false,
            critical: false,
            updateWithMerge: updateWithMerge,
            incrementCount: incrementCount,
            resetCount: resetCount
          };

          function updateWithMerge(newValue){
            model = _.merge(model,newValue);
          }

          function incrementCount(){
            model.currentCount += 1;
            console.log("%cSetting cell owner as player " + boardService.getCurrentPlayer(),"background-color:black;color:white");
            model.owner = boardService.getCurrentPlayer();
            checkForCritical();
            checkForTrigger();
          }

          function resetCount(){
            model.bursting = false;
            model.currentCount = 0;
            model.owner = null;
            model.critical = false;
          }

/*private functions*/
          function checkForTrigger(){
            if(model.currentCount > model.maxCount){
              model.bursting = true;
            }
          }

          function checkForCritical(){
            if(model.currentCount === model.maxCount){
              model.critical = true;
            }
          }

          return model;

      };

      return {
          new: constructor
      };

  }

})();
