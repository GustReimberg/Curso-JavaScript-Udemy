function varString(str){

    if(str.length > 10){

        console.log("Texto muito longo");

    } else {

        console.log("Texto dentro do limite");

    }
        console.log(str.length);
}

varString("aaaaaaaaaa");
varString("aaaaaaaaaaaaaaaaaa");