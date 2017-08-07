
(function(){
  angular
  .module('chainAngularApp')
  .factory('boardModel',
      function() {

          var constructor = function() {

              var model;

              model = {
                isProcessing: false,
                currentPlayer: 1,
                updateWithMerge: updateWithMerge
              };

              return model;

              function updateWithMerge(data){
                model = _.merge(model, data);
              }

          };

          return {
              new: constructor
          };

      }
  );

})();
