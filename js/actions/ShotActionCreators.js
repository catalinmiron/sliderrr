var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var WebAPI;
setTimeout(function() {
   WebAPI = require('../utils/WebAPI');
   // For some retarded reason, browserify dones't handle cyclical
   // dependancies. So have to wait for the next tick before defining
   // WebAPI. This is OK because it's only used when `setActive` is run.
}, 0);

var ShotActionCreators = {
  setActive: function(id) {
    var action = {
      type: ActionTypes.SET_ACTIVE_SHOT,
      id: id
    };
    AppDispatcher.handleViewAction(action);
    WebAPI.emitShotActivated(id);
  },
  setActiveFromServer: function(id) {
    var action = {
      type: ActionTypes.SET_ACTIVE_SHOT,
      id: id
    };
    AppDispatcher.handleServerAction(action);
  },
  recieveAll: function(rawShots, shotCategory) {
    var action = {
      type: ActionTypes.RECIEVE_RAW_SHOTS,
      rawShots: rawShots,
      shotCategory: shotCategory
    };
    AppDispatcher.handleServerAction(action);
  },
  recieveSocketCount: function(count) {
    console.log("count", count);
    var action = {
      type: ActionTypes.RECIEVE_SOCKET_COUNT,
      count: count
    };
    AppDispatcher.handleServerAction(action);
  }
};

module.exports = ShotActionCreators;