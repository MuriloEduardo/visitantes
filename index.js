let listaDeVisitantes = [];

function criarNovosVisitantes(visitante) {
  listaDeVisitantes.push(visitante);
}

criarNovosVisitantes({
  nome: 'Anderson',
  email: 'anderson@gmail.com',
});

console.log(listaDeVisitantes);