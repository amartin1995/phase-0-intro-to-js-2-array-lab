const cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat(){
    return cats.push(`Ralph`);
}

function destructivelyPrependCat(){
    return cats.unshift(`Bob`);
}

function destructivelyRemoveLastCat(){
    cats.pop(0);
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift(2);
    return cats;
}

function appendCat(){
    let copyOfCats = cats.slice();
    copyOfCats.push(`Broom`);
    return copyOfCats;
}

function prependCat(){
    let copyOfCats = cats.slice();
    copyOfCats.unshift(`Arnold`);
    return copyOfCats;
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}