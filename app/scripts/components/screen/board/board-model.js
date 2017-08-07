
(function(){
  angular
  .module('chainAngularApp')
  .factory('boardModel',
      function() {

          var constructor = function() {

              var model;

              model = {

              };

              return model;

          };

          return {
              new: constructor
          };

      }
  );

})();
