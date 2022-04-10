//Opdracht 2 - Elementen in de DOM plaatsen
//Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let itemsSold = 0;
for(let i = 0; i < inventory.length; i++){
    itemsSold += inventory[i].sold;
}
console.log(itemsSold);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
function displayItemsSold() {
    const element = document.getElementById("itemsSold");
    element.textContent = `We hebben ${itemsSold} items verkocht`
}
displayItemsSold();

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let itemsBought = 0;
for(let i = 0; i < inventory.length; i++){
    itemsBought += inventory[i].originalStock;
}
console.log(itemsBought);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
function displayItemsBought() {
    const element = document.getElementById("itemsBought");
    element.textContent = `We hebben ${itemsBought} items ingekocht`
}
displayItemsBought();

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let itemsLeftToSell = 0;
for(let i = 0; i < inventory.length; i++){
    let itemsInStock = inventory[i].originalStock - inventory[i].sold;
    itemsLeftToSell += itemsInStock;
}

function displayItemsLeftToSell() {
    const element = document.getElementById("itemsLeftToSell");
    element.textContent = `We hebben ${itemsLeftToSell} items in stock die we nog kunnen verkopen`
}
displayItemsLeftToSell();

