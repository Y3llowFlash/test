const prompt=require("prompt-sync")();

function digitSum(num) {
    var sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  console.log("Enter a number: ");
  var num = Number(prompt());
  console.log("The sum of digits in " + num + " is " + digitSum(num));