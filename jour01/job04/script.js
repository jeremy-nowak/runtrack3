function bisextile(annee){

    for( I=2016;I< 2025;I++){

        if ((I % 4 == 0 && I % 100 != 0) || I % 400 == 0){
    
            console.log(I+" est une annee bisextile");
    }
        else{
            console.log(I+" n'est pas une annee bisextile")
    }
}
        
} bisextile()