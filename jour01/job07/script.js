

    // let month = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre']
    // let year = ['2020']

    // const ferie = [new Date('2020-01-01'),new Date('2020-04-13'),new Date('2020-05-1'),new Date('2020-05-08'),new Date('2020-06-01'),new Date('2020-07-14'),new Date('2020-08-15'),new Date('2020-11-11'),new Date('2020-12-25')]
        // const ferie = [new Date('Mercredi 1 janvier'),new Date('Lundi 13 avril'), new Date('Vendredi 1 mai'),new Date('Vendredi 8 mai'),new Date('Jeudi 21 mai'),new Date('Lundi 1er juin'),new Date('Mardi 14 juillet'),new Date('Samedi 15 août'),new Date('Dimanche 1er novembre'),new Date('Mercredi 11 novembre'),new Date('Vendredi 25 décembre')]

        function jourtravaille(date){
    
            let ferie = [
            "01/01/2020", // Jour de l’An
            "13/04/2020", // Pâques
            "01/05/2020", // Fête du Travail
            "08/05/2020", // Victoire des Alliés en 1945
            "21/05/2020", // Ascension
            "01/06/2020", // Pentecôte
            "14/07/2020", // Fête nationale
            "15/08/2020", // Assomption
            "01/11/2020", //Toussaint
            "11/11/2020", // Armistice 1918
            "25/12/2020" // Noël
            ]
        
            if (ferie.includes(date.toLocaleDateString("fr"))){
                console.log(date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), 'est ferié');
              } else {
                console.log(date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), "n'est pas ferié");
              }
        }
        function getdate() {
        
            let input_date = document.getElementById('selected_date').value
            const converted_date = new Date (input_date)
            
            jourtravaille(converted_date);
            is_weekend(converted_date);
            
            }
        function is_weekend (date) {
            let res = date.getDay();
            if(res === 0 || res === 6){
            console.log(`Non ${date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} est un week end`);
            }
            else  console.log(`Oui ${date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} est un jour travaillé`);
            
        
         }






// function jourtravaille(date) {
//     const ferie = [new Date('2020-01-01'),new Date('2020-04-13'),new Date('2020-05-1'),new Date('2020-05-08'),new Date('2020-06-01'),new Date('2020-07-14'),new Date('2020-08-15'),new Date('2020-11-11'),new Date('2020-12-25')]

//     for (let month = 0; month < 12; month++) {
//         let daysInMonth = new Date(2020, month + 1, 0).getDate(); // nombre de jours dans le mois en question

//         for (let day = 1; day <= daysInMonth; day++) {
//             date.setFullYear(2020, month, day);
//             let jour = date.getDay();
//             if (jour != 0 && jour != 6 && !ferie.includes(date)) { // Si c'est un jour de semaine et pas un jour férié
//                 console.log(date);
//             }
//         }
//     }
// }
// jourtravaille(new Date());