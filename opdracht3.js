//Opdracht 3 - Array methoden en functies
//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina
//weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
//Dat er dubbele namen in zitten, is niet erg.

const tvBrands = inventory.map((tv)=>{
    return tv.brand;
})

//Om de dubbelen er uit te filteren
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
let unique = tvBrands.filter(onlyUnique);

console.log(unique);
//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
//Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
//Tip: vergeet deze functie -declaratie niet aan te roepen!

let tvBrandsArray = '';

function uniqueTvBrands(arrayOfTVs){
    const tvBrandsArray = inventory.map((tv)=>{
        return tv.brand;
    })

//Om de dubbelen er uit te filteren
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let unique = tvBrandsArray.filter(onlyUnique);

  return unique;
}

unique = console.log(uniqueTvBrands(inventory));