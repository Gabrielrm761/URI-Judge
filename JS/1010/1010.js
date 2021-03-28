/*                  Cálculo Simples

Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. 
Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, 
lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". 
O valor deverá ser apresentado com 2 casas após o ponto.

*/

var input = require('fs').readFileSync('stdin', 'utf8');

var linhas = input.split("\n");

var infoItem1 = linhas.shift().split(" "); // o shift vai receber a linha inteira e o split vai dividir o string da linha separados pelo espaço
var [idItem2, qtdItem2, valorUnitarioItem2] = linhas.shift().split(" "); // a forma mais estruturada para reduzir o número de linha do código.

var idItem1 = infoItem1.shift();
var qtdItem1 = infoItem1.shift();
var valorUnitarioItem1 = infoItem1.shift();

var valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
var valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

var valorTotalCompra = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));