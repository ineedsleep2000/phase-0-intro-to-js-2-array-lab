// Write your solution here!

// cats.append("CatName");

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()  
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copyofcats =[...cats]
    copyofcats.push(name)
    return copyofcats
}

function prependCat(name){
    const copyofcats =[...cats]
    copyofcats.unshift(name)
    return copyofcats
}

function removeLastCat(){
    const copyofcats =[...cats]
    copyofcats.pop()
    return copyofcats
}

function removeFirstCat(){
    const copyofcats =[...cats]
    copyofcats.shift()
    return copyofcats
}