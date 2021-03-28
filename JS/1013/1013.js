/*                   O Maior

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. 

Utilize a fórmula: MaiorAB = (a + b + abs(a - b)) / 2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). 
Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

*/

var input = require('fs').readFileSync('stdin', 'utf8');

var [A , B , C] = input.split(" ").map(item => parseInt(item));

var maiorAB = (A + B + Math.abs(A - B)) / 2;
var maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");
