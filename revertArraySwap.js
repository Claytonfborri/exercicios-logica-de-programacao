// Exercício de resolução Algoritmo Básico:
// Javascript
//Array.reverse();

// Reverter os valores do array a:

a = [1, 4, 3, 2]

function reverseArray(a) {
    let ponteiroMenor = 0
    let ponteiroMaior = a.length -1
    
    while (ponteiroMenor < ponteiroMaior){
        //swap
        let tmp = a[ponteiroMenor]
        a[ponteiroMenor] = a[ponteiroMaior]
        a[ponteiroMaior] = tmp

        ponteiroMenor++
        ponteiroMaior--
    }

return a
}
console.log(reverseArray(a));
