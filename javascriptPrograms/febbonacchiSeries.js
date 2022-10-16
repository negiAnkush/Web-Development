function fibonacciGenerator (n) {
//Do NOT change any of the code above

    //Write your code here:
    var feboArr=[];
    var feb0 = 0;
    var feb1 = 1;
    var febb;

        for(var i=1; i<=n; i++){

            if(i === 1){
                //console.log(feb0);
                feboArr.push(feb0);
            }
            if(i === 2){
                //console.log(feb1);
                feboArr.push(feb1);
            }
            if(i >= 3){
                febb = feb0 + feb1;
                feb0=feb1;
                feb1=febb;
                //console.log(febb);
                feboArr.push(febb);

            }

        }

    console.log(feboArr);
    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below
}

fibonacciGenerator(10);
