/*REGRAS: 
Calcular a situação de cada aluno baseado na média das 3 provas (P1, P2 e P3), conforme a  tabela: 
Média (m) Situação:
m<5  - Reprovado por Nota
5<=m<7  - Exame Final
m>=7  - Aprovado
Caso o número de faltas ultrapasse 25% do número total de aulas o aluno terá a situação  "Reprovado por Falta", independente da média.  Caso a situação seja "Exame Final" 
é necessário calcular a "Nota para Aprovação Final"(naf) de  cada aluno de acordo com seguinte fórmula: 
5 <= (m + naf)/2
Caso a situação do aluno seja diferente de "Exame Final", preencha o campo "Nota para  Aprovação Final" com 0. 
Arredondar o resultado para o próximo número inteiro (aumentar) caso necessário. Utilizar linhas de logs para acompanhamento das atividades da aplicação. 
Os textos do código fonte (atributos, classes, funções, comentários e afins) devem ser escritos  em inglês, salvo os identificadores e textos pré-definidos nesse desafio. 
*/

class Aluno {
  constructor(matricula, nome, faltas, p1, p2, p3) {
    this.matricula = matricula;
    this.nome = nome;
    this.faltas = faltas;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.media = (p1 + p2 + p3) / 3;
    this.situacao = "";
    this.notaFinal = 0;
  }

  calcularSituacao() {
    const limiteFaltas = 0.25 * totalAulas;

    if (this.faltas > limiteFaltas) {
      this.situacao = "Reprovado por Falta";
    } else {
      if (this.media < 5) {
        this.situacao = "Reprovado por Nota";
      } else if (this.media < 7) {
        this.situacao = "Exame Final";
        this.calcularNotaFinal();
      } else {
        this.situacao = "Aprovado";
      }
    }
  }

  calcularNotaFinal() {
    this.notaFinal = Math.ceil(2 * (5 - this.media));
  }
}

const totalAulas = 100;

const alunos = [
  new Aluno(1, "Eduardo", 8, 35, 63, 61),
  new Aluno(2, "Murilo", 8, 64, 97, 36),
  // adicione mais alunos caso seja necessário para fins de teste
];

alunos.forEach((aluno) => {
  aluno.calcularSituacao();
});

alunos.forEach((aluno) => {
  console.log(`
    Matrícula: ${aluno.matricula}
    Aluno: ${aluno.nome}
    Faltas: ${aluno.faltas}
    P1: ${aluno.p1}
    P2: ${aluno.p2}
    P3: ${aluno.p3}
    Situação: ${aluno.situacao}
    Nota para Aprovação Final: ${aluno.notaFinal}
    `);
});
