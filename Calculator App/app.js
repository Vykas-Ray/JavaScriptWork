var app = angular.module("calApp", []);
app.controller("calCtrl", ctrlrFn);
function ctrlrFn(){
  var answer=0;
       this.getSign = function(sign){
         this.operation = sign;
       }

       this.calculate = function() {
         if(this.operation === '+'){
           answer = parseFloat(this.firstNumber) + parseFloat(this.secondNumber);
           this.dispAns = answer;
         }
         else if(this.operation === '-'){
           answer = parseFloat(this.firstNumber) - parseFloat(this.secondNumber);
           this.dispAns = answer;
         }
         else if(this.operation === '/'){
           answer = parseFloat(this.firstNumber) / parseFloat(this.secondNumber);
           this.dispAns = answer;
         }
         else if(this.operation === '*'){
           answer = parseFloat(this.firstNumber) * parseFloat(this.secondNumber);
           this.dispAns = answer;
         }
       }
}
