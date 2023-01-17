function fizzbuzz() {

    for (let I = 1; I < 152; I++) {

        if (I %5==0 && I %3==0) {
            console.log("fizzbuzz")
            
        }
        else if (I %3 == 0 ) {
            console.log("fizz")
            
        }
        else if(I %5 == 0){
            console.log("buzz")

        }
        else{
            console.log(I)
        }

        
    }
    
}
fizzbuzz()