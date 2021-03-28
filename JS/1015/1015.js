/*              Distância Entre Dois Pontos 

Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, 
p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, 
segundo a fórmula:

Distancia = raiz quadrada de (x2 - x1)² + (y2 - y1)²

Entrada
O arquivo de entrada contém duas linhas de dados. 
A primeira linha contém dois valores de ponto flutuante: x1 y1 
e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

*/


var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');
var [x1, y1] = valores[0].split(" ");
var [x2, y2] = valores[1].split(" ");

var distancia = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
/* existe 3 formas de elevar um número ao quadrado
A * A (o numero vezes ele mesmo)
A ** 2 (o metodo mais simples)
Math.pow(A, 2) (metodo mais comumente utilizado)
*/
console.log(distancia.toFixed(4));
