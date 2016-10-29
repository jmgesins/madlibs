var app = angular.module('myModule');
app.factory('madlibsFactory',function(){

var myObj={};

var setInput=function(madlibsName){
myObj.name=madlibsName;

}

var setOutput = function(){
  return myObj;

}
return {
  setInput: setInput,
  setOutput: setOutput
};
});
