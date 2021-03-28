/*                                  Conversão de Tempo

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica,
 e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos),
 convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8');

var totalSegundos = parseInt(input);

var qtdHoras = parseInt(totalSegundos / 3600);
totalSegundos = totalSegundos % 3600;

var qtdMinutos = parseInt(totalSegundos / 60);
totalSegundos = totalSegundos % 60;

var qtdSegundos = totalSegundos;

console.log(`${qtdHoras}:${qtdMinutos}:${qtdSegundos}`);