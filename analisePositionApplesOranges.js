// link do desafio: https://www.hackerrank.com/challenges/apple-and-orange/problem

let s = 7;
let t = 10;
let appleTree = 4;
let orangeTree = 12;
let apples = [6, 7, 0];
let oranges = [15, 10, 8];


function countApplesAndOranges(s, t, appleTree, orangeTree, apples, oranges) {
    
    let applesInSamHouse = 0
    let orangesInSamHouse = 0
    
    apples.forEach(apple => {
        if (apple > 0 && isOnSamPropriety(appleTree, s, t, apple)){
            applesInSamHouse++
        }
    })
    oranges.forEach(orange => {
        if (orange < 0 && isOnSamPropriety(orangeTree, s, t, orange)){
            orangesInSamHouse++
        }
    })
    console.log(applesInSamHouse)
    console.log(orangesInSamHouse)
}   
function isOnSamPropriety(treePosition, start, end, fruitPosition){
    let fruitFinalPosition = treePosition + fruitPosition
    if(fruitFinalPosition >= start && fruitFinalPosition <= end){
        return true
    }
    return false
}
console.log(countApplesAndOranges(s, t, appleTree, orangeTree, apples, oranges));
