(function(){
  angular
  .module('chainAngularApp')
  .factory('exampleModel',
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
