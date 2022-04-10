//Opdracht 4 -Functies
//Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//Philips 43PUS6504/12 - 4K TV
//€379,-
//43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//NIKKEI NH3216SMART - HD smart TV
//€159,-
//32 inch (81 cm)
//Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel
// tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt:
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function tvName(tvObject){
    const brandName = tvObject.brand;
    const typeName = tvObject.type;
    const tvName = tvObject.name;

    return `${brandName} ${typeName} - ${tvName}`;
}
console.log(tvName(inventory[0]));

//Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter
// verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een
// andere tv-prijs wordt meegegeven.

function tvPrice(price){
    return Math.round(price);
}

console.log(tvPrice(inventory[0].price));

//Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel
// inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals
// inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches
// ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes
// heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie
// werkt in alle mogelijke gevallen.

function screenSize(arrayOfPrizes) {
    const inchAndCM = arrayOfPrizes.map((screenSize) => {
        const inchSize = screenSize;
        const cmSize = Math.round(screenSize * 2.54);
        return `${inchSize} inch (${cmSize} cm)`;
    });
    return inchAndCM.join(" | ");
}
console.log(screenSize(inventory[0].availableSizes));

//Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
function letsDoItAll(arrayItem){
    return `${tvName(arrayItem)}\n${tvPrice(arrayItem.price)}\n${screenSize(arrayItem.availableSizes)}`
}
console.log(letsDoItAll(inventory[4]));

//Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk
// niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
// De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

inventory.map((tvItem) =>  console.log(letsDoItAll(tvItem)));

//Bonus opdracht
//1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
//die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
//dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op
//de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!
//maak knoppen
//schrijf functies om de code in opdracht 1b, c en d
//koppel deze functies aan de knoppen
//zorg dat bij een button click antwoorden gelogt worden


function findSoldOut(){
    let soldOutList = inventory.filter((tvObject)=> {
        if(tvObject.originalStock - tvObject.sold === 0){
            return tvObject;
        }

    });
    console.log(soldOutList);
}


function findAmbilight(){
    const ambiLight = inventory.filter((tvObject)=>{
        return tvObject.options.ambiLight === true;
    });
    console.log(ambiLight);
}

function sortPrice(){
    const sorted = inventory.sort((a,b) =>{
        return a.price - b.price;
    });
    console.log(sorted);
}



//2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
//jouw `generateTV`-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!
const listID = 'button-generated-list';
let title = '';
function createULElementWithId(){
    const unorderedList = document.createElement('ul');
    unorderedList.setAttribute('id', listID);
    document.body.appendChild(unorderedList);
    return unorderedList;
}
function createTitle(){
    const title = document.createElement('h3');
    title.setAttribute('id', 'title');
    document.body.appendChild(title);
    return title;
}

function generateSoldOutList(){
    //definieer de id die je op de ul wil zetten

    //kijk of er al een button lijst bestaat,
    let soldOutList = document.getElementById(listID);
    if(soldOutList === null) {
        //zo niet roep createTitle aam voor een nieuwe titel
        title = createTitle();
        //en roep de createULElementWithId aan om de lijst te creeren
        soldOutList = createULElementWithId();
    } else {
        //verwijder het eerste child element, zodat er geen childeren meer zijn
        //anders wordt de lijst telkens opnieuw toegevoegd aan het scherm
        title.textContent = '';
        while(soldOutList.firstChild) {
            soldOutList.removeChild(soldOutList.firstChild);
        }
    }
    title.textContent = 'Onze uitverkochte televisies:';
    //filter de array op elementen die geen voorraad meer hebben en voeg deze toe aan de nieuwe array
    const soldOutTvs = inventory.filter((tvObject)=> {
        if(tvObject.originalStock - tvObject.sold === 0){
            return tvObject;
        }
    });
    //maak voor ieder item in de lijst een listitem aan
    soldOutTvs.forEach((soldOutTv) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${soldOutTv.brand} - ${soldOutTv.name}`;
        soldOutList.appendChild(listItem);
    });
}

function generateAmbiLightList() {
    let ambiLightList = document.getElementById(listID);
    if (ambiLightList === null) {
        title = createTitle();
        ambiLightList = createULElementWithId();
    } else {
        while (ambiLightList.firstChild) {
            ambiLightList.removeChild(ambiLightList.firstChild);
        }
    }
    title.textContent = 'Onze ambilight televisies:';
    const ambiLightTV = inventory.filter((tvObject) => {
        return tvObject.options.ambiLight === true;
    });
    ambiLightTV.forEach((ambiLightTV)=>{
        const listItem = document.createElement('li');
        listItem.textContent = ambiLightTV.name;
        ambiLightList.appendChild(listItem);
    });
}

function generateSortedPriceList(){
    let sortedPriceList = document.getElementById(listID);
    if (sortedPriceList === null) {
        title = createTitle();
        sortedPriceList = createULElementWithId();
    }else{
        while (sortedPriceList.firstElementChild){
        sortedPriceList.removeChild(sortedPriceList.firstElementChild);
        }
    }
    title.textContent = 'Onze televisies op prijs gesorteerd:'
    const sortedPriceItem = inventory.sort((a,b) =>{
        return a.price - b.price;
    });
    sortedPriceItem.forEach((sortedPriceItem) =>{
        const listItem = document.createElement('li');
        listItem.textContent = `${sortedPriceItem.brand} - ${sortedPriceItem.name} kost ${sortedPriceItem.price} euro`;
        sortedPriceList.appendChild(listItem);
    })
}