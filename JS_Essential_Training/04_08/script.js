// const MYCONSTANT = 10;
// console.log(MYCONSTANT);


function logScope(){
    var localVar = 10;

    if (localVar) {
        let localVar = "I'm 7";
        console.log("Nested localVar: ", localVar);
    }
    console.log("logScope localVar: ", localVar);

}

logScope();