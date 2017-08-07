
(function(){
  angular
  .module('chainAngularApp')
  .factory('screenModel',
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
