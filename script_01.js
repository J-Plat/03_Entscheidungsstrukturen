// Entscheidungsstrukturen

/*
//Deklaration
var ageJohn, ageMark;
var istJohnOlder, isJohnEqual;

//Wertzuweisung
ageJohn = 30;
ageMark = 30;

//Logische Tests
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
*/

// == Vergleich des Inhalts
// === Vergleich des Inhalts und des Datentyps

/*
var test = (1 === "1"); //Datentyp number uznd Datentyp string
console.log("test: " + test);
*/

/*
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
*/

/****************************** IF ******************************/

/*
if(isJohnOlder) // true (wird ausgeführt) oder false (wird nicht ausgeführt)
{
    console.log("John ist älter");
}
*/


/************************** IF - ELSE **************************/

/*
if (isJohnOlder)
{
    console.log("John ist älter");
} 
else 
{
    console.log("John ist NICHT älter");
}
*/

/************************* IF - ELSE IF *************************/

/*
// (1. Ja bedingung)
if (isJohnOlder)
{
    console.log("John ist älter");
} 
// 1. Ja-Zweig
else if(isJohnEqual)
{
    console.log("John ist gleich alt");
}
// .... weitere Zweige (Fällen): Das oder das oder das ....
// Nein-Zweig
else
{
    console.log("John ist jünger");
}
*/

/***************** Ternäre (alternative) Schreibweise *****************/

/*
console.log((isJohnOlder) ? "John is older" : "Mark is older");
*/

/******************** Fallunterscheidung / SWITCH ********************/

/*
var firstName, job;

firstName = "John";
//job = "driver";
//job = "artist";
//job = "teacher";
//job = "instructor"
job = "pilot";

switch (job) 
{
    case "instructor":
    case "teacher":
        console.log(firstName + " unterrichtet.")
        break;
    case "driver":
        console.log(firstName + " fährt Taxi.")
        break;
    case "artist":
        console.log(firstName + " malt Bilder.")
        break;   
    default:
        console.log(firstName + " macht etwas anderes.")
        break;
}
*/

/******************** Fallunterscheidung / SWITCH 2 ********************/

var a = 3;

switch (true) 
{
    case (a == 1):
        console.log("a ist 1")
        break;
    case (a > 2):
        console.log("a ist größer als 2") 
        break;
    default:
        console.log("a hat einen anderen Wert.")
        break;
}