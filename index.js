// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(-1);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(0);
    return cats;
}

function appendCat(name){
    const catsappend = [...cats,name];
    return catsappend;
}

function prependCat(name){
    const catsprepend = [name,...cats];
    return catsprepend;
}

function removeLastCat(name){
    const removeLastcat=cats.slice(0,cats.length-1);
    return removeLastcat;
}

function removeLastCat(name){
    const removeLastcat=cats.slice(0,cats.length-1);
    return removeLastcat;
}

function removeLastCat(name){
    const removeLastcat=cats.slice(0,cats.length-1);
    return removeLastcat;
}

function removeFirstCat(name){
    const removeFirstcat=cats.slice(1);
    return removeFirstcat;
}

console.log(removeFirstCat("Tina"));

