/* Wanneer je op de donkere rode vierkant klikt, krijg je een alert */

var EasterEgg;
document.querySelector(".DarkRedSquare").addEventListener("click", EasterEgg);

function EasterEgg() {
    alert("Leuk geprobeerd, maar dit doet niks");
};



/* 
Deze code zorgt voor een soort lens.
Het toggled een class in CSS die uiteindelijk zorgt voor een animatie.

*/


var BigCircle;
document.querySelector(".DarkBlueShape").addEventListener("click", BigCircle);

function BigCircle() {
    var ZoomCircle = document.getElementById('BlueCircle');
    ZoomCircle.classList.toggle('BlueCircleAdd');
};



/* 
Wanneer je op de groene vierkant klikt, komen de gele vierkanten terug.
Deze functie toggled een class op een element wanneer hierop geklikt wordt.

Via CSS kan je deze class stylen, dus wanneer je klikt, komt er een andere stijl.
In dit geval is het een animatie, namelijk dat de vierkanten stoppen met bewegen.

En wanneer je opnieuw klikt, gaan ze weer bewegen.
*/

var DarkGreenShape;
document.getElementById("Darkgreenshape").addEventListener("click", DarkGreenShape);


function DarkGreenShape() {

    var yellowshapeLToggle = document.querySelector(".YS1");
    yellowshapeLToggle.classList.toggle("LinkerGeleBlok");

    var yellowshapeRToggle = document.querySelector(".YS2");
    yellowshapeRToggle.classList.toggle("RechterGeleBlok");

};

/*

Wanneer je op de spatiebalk klikt, dit is keycode 32, dan voegt er een class toe aan een element.
Op deze class staat een animatie, die wordt dus uitgevoerd wanneer men op spatie klikt.

*/

document.addEventListener('keydown', event => {
    const key = event.wich || event.keyCode

    if (key === 32) {
        var ClipPath = document.querySelector('svg');
        ClipPath.classList.toggle('ClipPath');
        
    };
});

