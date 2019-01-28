var toDoApp = angular.module("toDoApp", []);
toDoApp.controller("appCtrl", ctrl);

function ctrl(){
    this.toDo = new Array();
    this.todo = new Array();
    this.editMode = false;
    this.addToDo = function(){
    //  console.log(toDo.indexOf(this.toDoEntry));
    if(this.todo.indexOf(this.toDoEntry)===-1){
        this.todo.push(this.toDoEntry);
        this.toDo = this.todo;
        //console.log(this.toDo);
      }
    }

    this.remove = function(index) {
      this.todo.splice(index, 1);
      console.log(this.toDo);
    }

}
