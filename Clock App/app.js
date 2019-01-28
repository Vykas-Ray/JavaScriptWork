var app = angular.module("clockApp", []);
app.controller("timeCtrl", ctrlrFn);
function ctrlrFn(){
  var date = new Date();
  this.time = date.toTimeString();
  this.userName="";
  this.updateTime = function(){
    var date = new Date();
    this.time = date.toTimeString();
  }
}
