
(function(){
  angular
  .module('chainAngularApp')
  .factory('cellModel',
      function() {

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
                updateWithMerge: updateWithMerge,
                incrementCount: incrementCount,
                resetCount: resetCount
              };

              function updateWithMerge(newValue){
                model = _.merge(model,newValue);
              }

              function incrementCount(){
                model.currentCount += 1;
                checkForTrigger();
              }

              function resetCount(){
                model.bursting = false;
                model.currentCount = 0;
              }

/*private functions*/
              function checkForTrigger(){
                if(model.currentCount > model.maxCount){
                  model.bursting = true;
                }
              }

              return model;

          };

          return {
              new: constructor
          };

      }
  );

})();
