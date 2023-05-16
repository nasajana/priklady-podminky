console.log("%c JavaScript funguje ");

/*
Příklad 1: Sudé a liché číslo
Zadání: Napište program, který zjistí, zda zadané číslo je sudé nebo liché, a výsledek vypíše na konzoli.
*/

let zadejCislo = 2;

let budeSude = zadejCislo % 2;
if (budeSude === 0) {
  console.log("je to sude");
} else {
  console.log("neni sude");
}

/*
Příklad 2: Kontrola věku
Zadání: Napište program, který zkontroluje, zda je zadaný věk uživatele 18 let nebo více. Podle toho vypíše na konzoli, zda je uživatel starší nebo mladší 18 let.
*/
console.log("Příklad 2: Kontrola věku");

let vek = 26;

if (vek >= 18) {
  console.log("jsi dospělý");
} else {
  console.log("nejsi dospělý");
}

/*
Příklad 3: Porovnání čísel
Zadání: Napište program, který porovná dvě zadaná čísla a na konzoli vypíše, zda je první číslo větší, menší, nebo rovno druhému číslu.
*/
console.log("Příklad 3: Porovnání čísel");

let cislo1 = 5;
let cislo2 = 2;

if (cislo1 > cislo2) {
  console.log("číslo " + cislo1 + " je větší než " + cislo2);
} else if (cislo1 === cislo2) {
  console.log("čísla " + cislo1 + " a " + cislo2 + " jsou stejná");
} else {
  console.log("číslo " + cislo1 + " je menší než " + cislo2);
}

/*
Příklad 4: Roční období
Zadání: Napište program, který podle zadaného čísla měsíce (1-12) určí, do jakého ročního období měsíc patří (jaro, léto, podzim, zima), a výsledek vypíše na konzoli. Pokud je zadaný neplatný měsíc, program vypíše na konzoli chybovou zprávu.
*/

console.log("Příklad 4: Roční období");

let mesic = 2;

if (mesic > 2 && mesic < 6) {
  console.log(mesic + " je jaro");
} else if (mesic > 5 && mesic < 9) {
  console.log(mesic + " je léto");
} else if (mesic > 8 && mesic < 12) {
  console.log(mesic + " je podzim");
} else {
  console.log(mesic + " je zimááá");
}

mesic +
  /*
Příklad 5: Základní kalkulačka
Zadání: Napište základní kalkulačku, která podle zadané operace (+, -, *, /) provede výpočet se dvěma zadanými čísly a výsledek vypíše na konzoli. Symbol operace bude uložený v proměnné jako textový řetězec.
*/
  console.log("Příklad 5: Základní kalkulačka");

let a = 5;
let b = 8;
let operator = "*";
let vysledek;

if (operator === "+") {
  vysledek = a + b;
} else if (operator === "-") {
  vysledek = a - b;
} else if (operator === "*") {
  vysledek = a * b;
} else if (operator === "/") {
  vysledek = a / b;
} 
console.log(a + operator + b + "=" + vysledek);

