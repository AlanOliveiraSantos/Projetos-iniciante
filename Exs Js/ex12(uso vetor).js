var num = [1,5,9] // elementos
num[3] = 6 // Cria uma poxição e um elemento desejado
num.push(7) // Cria a proximo posição com o elemento desejado
num.sort() // Organiza os elementos do maior para o menor 
console.log(`nosso vetor tem ${num.length} posições`) // Mostra quantos elementos tem
console.log(`nosso primeiro vetor é ${num[1]}`)//Mostra o elemento da posição
console.log(`vetor: ${num}`)

console.log('-------------------------')

for(var posf=0; posf < num.length; posf++){
    console.log(`a posição ${posf} tem o valor ${num[posf]}`)
} // Mostra todas as posições e os elementos que temos

console.log('-------------------------')

for(var pos in num){ // Para cada posição em num:
    console.log(`à posição ${pos} tem o valor ${num[pos]}`)
}
