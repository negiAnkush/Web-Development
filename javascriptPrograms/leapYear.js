function isLeap(year) {

/**************Don't change the code above****************/

    //Write your code here.

    if(year%4===0){

        if(year%100===0){

            if(year%400===0){

                console.log("leap year.");

                    }
                else {

                    console.log("Not leap year.");

                    }

                }
        else {
            console.log("leap year.");
            }

    }
    else{
        console.log("Not leap year.");
    }

}

isLeap(1948);
