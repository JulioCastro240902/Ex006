// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

const AboutMe = {
  favoriteMovie: "All the bright places",
  favoriteColor: "Black",
  favoriteAnime: "One Piece",
};

AboutMe.favoriteMusic = "Slow Dancing In the Dark - Joji";

delete AboutMe.favoriteColor;
console.log(AboutMe);

const Cadastro = [
  {
    nome: "Julio",
    idade: 20,
    telefone: 11945047085,
    amigos: "Wesley",
  },
  {
    nome: "Henrique",
    idade: 27,
    telefone: 11974659280,
    amigos: "João",
  },
  {
    nome: "Fernanda",
    idade: 17,
    telefone: 11974220480,
    amigos: "Julia",
  },
  {
    nome: "Eduarda",
    idade: 40,
    telefone: 11968407085,
    amigos: "Eliza",
  },
  {
    nome: "Alex",
    idade: 32,
    telefone: 11975480012,
    amigos: "Prior",
  },
];

console.log(Cadastro[0].amigos);
console.log(Cadastro[1].amigos);
console.log(Cadastro[2].amigos);
console.log(Cadastro[3].amigos);
console.log(Cadastro[4].amigos);

console.table(Cadastro);
