
(function(){
  angular
  .module('chainAngularApp')
  .factory('menuModel',
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
