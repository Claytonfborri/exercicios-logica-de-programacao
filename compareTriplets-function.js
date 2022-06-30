let a = [17, 28, 30];
let b = [96, 16, 8];

function compareScore(scoreA, scoreB) {
    // Write your code here
    let aliceScore = 0;
    let bobScore = 0;
    let arrayRes = [];
    for (let i = 0; i < scoreA.length; i++) {
        scoreA[i] > scoreB[i] && scoreA[i] != scoreB[i] ? aliceScore++ : bobScore++
        arrayRes = [aliceScore, bobScore];
    }
    return(arrayRes);
}
console.log(compareScore(a, b));
