
(function(){
  angular
  .module('chainAngularApp')
  .factory('preferencesModel',
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
