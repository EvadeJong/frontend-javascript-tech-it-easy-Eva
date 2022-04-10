//Opdracht 1 - Array Methoden
//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const tvNames = inventory.map((tvObject)=>{
    return tvObject.type;
});
console.log(tvNames);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((tvObject)=> {
    if(tvObject.originalStock - tvObject.sold === 0){
        return tvObject;
    }
});
console.log(soldOut);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const ambiLight = inventory.filter((tvObject)=>{
    return tvObject.options.ambiLight === true;
});
console.log(ambiLight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const sorted = inventory.sort((a,b) =>{
    return a.price - b.price;
});
console.log(sorted);