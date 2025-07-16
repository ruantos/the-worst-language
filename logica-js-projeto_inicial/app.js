alert('Hello, World!');

// referenciando var

let numero_secreto = 100;
let chute = prompt('Chute qual o número secreto');

// Concatenando com template strings. Use crase no lugar de single quotes
if (chute == numero_secreto){
    console.log(`Você acertou! O número secreto é ${numero_secreto}`);
}
else {
    console.log(`Você errou! O número secreto não é ${chute}`);
}