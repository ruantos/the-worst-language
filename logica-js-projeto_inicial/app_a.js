// Pop up na tela  
alert('Boas vindas ao nosso site!');

// Atribuição de var
let nome = 'Lua';
let idade = 25;
let numero_vendas = 50;
let saldo_disponivel = 1000;

let mensagem_erro = 'Erro! Preencha todos os campos';
alert(mensagem_erro);

// Input de dados
nome = prompt('Qual o seu nome mesmo? ');
idade = prompt('Esqueci sua idade. Digite-a novamente: ');

// Condicionais
if (idade >= 18){
    console.log('Já pode tirar habilitação! Mas não conta para a polícia rs');
}
else {
    console.log('Vá dormir, criança');
}

