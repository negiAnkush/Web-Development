var name = prompt("enter you name");
var len = name.length;
var firstCh = name.slice(0, 1);
var restChar = name.slice(1,len);
alert("hello "+firstCh.toUpperCase()+restChar);



// dog human age converter

var dogAge = prompt("enter you dog age");
var age = ((dogAge-2)*4)+21;
alert("if dog were human, he would be "+age+" years old");




//noumbers of milk bottels

function calculateNum(money){
    alert("hello User");
    var bottels = Math.floor(money / 4);
    console.log(bottels);
}

calculateNum(30);





/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

bmi should equal 20 when it's rounded to the nearest whole number.
*/

function bmiCalculator(weight, height){

    var valueBmi = (weight / (height*height)).toFixed(2);

    return valueBmi;
}

var bmi = bmiCalculator(90, 1.8);
console.log("value of bmi ="+bmi);



// Rand num genrator
function randNumGen()
    {
        var rand = Math.random();
        rand = Math.floor(rand*100) + 1;
        return rand;
    }

prompt("enter your name ");
prompt("enter your's crush name");

console.log("your love calculator is "+randNumGen()+"%");



// who pay the bill
function whosPaying(names) {
/******Don't change the code above*******/

    //Write your code here.
    var arrLen = names.length;
    var randNum = (Math.random()*arrLen);
    randNum = Math.round(randNum);
    alert(names[randNum]+" is going to buy lunch today!");
    //return names[randNum];
/******Don't change the code below*******/
}
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);



// Bmi calc next level
function bmiCalculator (weight, height) {

    //var bmiValue= (weight / (height*height)).toFixed(2);
    var bmiValue= Math.round((weight / (height*height)));
    if(bmiValue < 18.5){
        interpretation = "Your BMI is "+bmiValue+", so you are underweight.";
    }
    if(bmiValue >= 18.5 && bmiValue <= 24.9){
        interpretation = "Your BMI is "+bmiValue+", so you have a normal weight.";
    }
    if(bmiValue > 24.9){
        interpretation = "Your BMI is "+bmiValue+", so you are overweight.";
    }

    return interpretation;
}

var msg = bmiCalculator(60,2);
alert(msg);





//fizzbuzz programm
var output = [];
var count=1;

function fizzBuzz(){

    if(count % 3 === 0 ){
        if(count % 15 === 0){
             output.push("fizzBuzz");
        }
        else{
            output.push("fizz");
        }
    }
    else if(count % 5 === 0){
            if(count % 15 === 0){
                 output.push("fizzBuzz");
            }
            else{
                output.push("buzz");
            }
    }
    else{
         output.push(count);
    }



    console.log(output);

    count++;
}




//guest list using Array
var guestNames = ['ankush', 'rashmi', 'kavita', 'rahul', 'abhishek', 'ruchi'];
var checkName = prompt("please, enter your Name");

if(guestNames.includes(checkName)){
    alert("Welcome, "+checkName+" to the party!!");
}else{
    alert(checkName+", your are un invited guest")
}
