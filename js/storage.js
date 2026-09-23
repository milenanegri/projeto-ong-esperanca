const STORAGE_KEY = 'ong_voluntarios_cadastrados';

export function salvarVoluntario(dados) {
  const listaAtual = buscarVoluntarios();
  listaAtual.push(dados);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listaAtual));
}

export function buscarVoluntarios() {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
}
