const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    return cats.splice(3,0,'Ralph')
}
function destructivelyPrependCat(){
    return cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(){
    const appends = [...cats, 'Broom']
    return appends
}
function prependCat(){
    const prepends = ['Arnold',  ...cats]
    return prepends
}
function removeLastCat(){
    const removedLast = cats.slice(0,cats.length - 1)
    return removedLast
}
function removeFirstCat(){
    const removedFirst = cats.slice(1)
    return removedFirst
}
