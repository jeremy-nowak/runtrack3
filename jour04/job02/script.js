
const tableau = 'tableau.json'

function jsonValueKey(key) {

    fetch(tableau)
    .then((response) => response.json())
    .then(data => console.log(data[key]))


}