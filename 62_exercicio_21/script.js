function checkVar(x){

    if(typeof x === 'string'){

        console.log("Este dado é uma string");

    }   else if(typeof x === "number"){

        console.log("Este dado é um number");

    }   else if(typeof x === 'boolean'){

        console.log("Este dado é um boolean");
    }

}

checkVar("a");
checkVar(3);
checkVar(true);