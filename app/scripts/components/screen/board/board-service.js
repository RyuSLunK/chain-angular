(function(){
  'use strict';

  /**
  * @desc description of an example directive
  * @example <example-directive></example-directive>
  */

  angular
    .module('chainAngularApp')
    .factory('boardService', boardService);

  boardService.$inject = [
    '$timeout',
    '$q'
  ];

  function boardService($timeout, $q){
    console.log("boardService Initialized!!!");
    var service = {
        getCurrentPlayer: getCurrentPlayer,
        toggleCurrentPlayer: toggleCurrentPlayer,
        getIsProcessing: getIsProcessing,
        startEndProcessingTimer: startEndProcessingTimer,
        setProcessing: setProcessing,
        subscribe: subscribe
    };

    var currentPlayer = 2;
    var isProcessing = false;
    var endProcessingTimer;
    var subscriptions = [];

    function getCurrentPlayer(){
      return currentPlayer;
    }

    function toggleCurrentPlayer(fromEndProcessing){
      if(fromEndProcessing){
        console.log("%ctoggling from end processing","background-color:black;color:yellow;");
      } else {
        console.log("%ctoggling from non critical click move","background-color:black;color:yellow;");
      }
      if(currentPlayer === 1){
        currentPlayer = 2;
      } else {
        currentPlayer = 1;
      }
      notify('toggleCurrentPlayer');
    }

    function getIsProcessing(){
      return isProcessing;
    }

    function setProcessing(){
      isProcessing = true;
      notify('setProcessing');
      startEndProcessingTimer();
    }

    function startEndProcessingTimer(){
      if(endProcessingTimer) $timeout.cancel(endProcessingTimer);
      endProcessingTimer = $timeout(endProcessing, 2000);
    }

    function endProcessing(){
      isProcessing = false;
      endProcessingTimer = null;
      toggleCurrentPlayer(true);
      notify('endProcessing');
    }

    function subscribe(functionName, callback){

      if(!_.find(subscriptions,{'functionName': functionName})){
        subscriptions.push({functionName: functionName, callbacks: []});
      }
      _.find(subscriptions, {'functionName': functionName}).callbacks.push(callback);

    }

    function notify(functionName){
      console.log("notifying",functionName);
      var storedFunction = _.find(subscriptions, {'functionName': functionName});
      if(storedFunction){
        for(var i = 0; i < storedFunction.callbacks.length; i++){
          storedFunction.callbacks[i]();
        }
      }
    }

    return service;
  }

})();
