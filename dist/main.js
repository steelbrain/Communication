"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}(),EventEmitter=require("zm-event-kit").Emitter,Communication=function(){function e(n,t){_classCallCheck(this,e),this.send=n,this.debug=t}return _createClass(e,[{key:"gotMessage",value:function(e){var n=this;if(e.SB)if(Debug&&console.debug(e),"send"===e.Genre){e.response=null;var t=void 0;try{this.emit(e.Type,e),t=e.response instanceof Promise?e.response:Promise.resolve(e.response)}catch(s){t=Promise.reject(s)}t.then(function(t){n.send({Genre:"response",Status:!0,Result:t,ID:e.ID,SB:!0})},function(t){t instanceof Error&&(t={stack:t.stack,message:t.message}),n.send({Genre:"response",Status:!1,Result:t,ID:e.ID,SB:!0})})}else"response"===e.Genre&&this.emit("JOB:"+e.ID,e)}},{key:"request",value:function(n,t){var s=this;return new Promise(function(r,o){var i=e.randomId(),a=s.on("JOB:"+i,function(e){a.dispose(),e.Status?r(e.Result):o(e.Result)});s.send({Type:n,Genre:"send",Message:t,SB:!0,ID:i})})}}],[{key:"randomId",value:function(){return(Math.random().toString(36)+"00000000000000000").slice(2,9)}}]),e}();module.exports=Communication;