/* Seu trabalho é criar uma função somar que seja uma promise, ela irá receber 2
parâmetros que serão dois números.
Ela deve ter a estrutura padrão de uma promise, e fará uma validação que é caso
você não receba números no parâmetro, você irá rejeitar a promessa com uma a
seguinte mensagem "Não são números".
Caso esteja tudo certo você deverá salvar no documento chamado resultado.txt
o resultado da soma nesse padrão:
10 + 10 = 20
5 + 5 = 10
e no resolve da promise devolver apenas o resultado da soma:
soma(10,10) 
// irá retornar 20 além de salvar a informação no arquivo. */

const fs = require("fs/promises");

function sum(n1, n2) {
  return new Promise(async (resolve, reject) => {
    if (typeof n1 != "number" || typeof n2 != "number") {
      return reject("Não são números!");
    }

    await fs.appendFile("resultado.txt", `A soma dos númemros é ${n1 + n2} !`);
    resolve();
  });
}

sum(10, 10);
sum(5, 5);
sum(5, "s");
