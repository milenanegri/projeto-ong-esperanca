import { salvarVoluntario } from './storage.js';

export function initValidation() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  const campoNome = document.getElementById('nome');

  // Feedback em tempo real ao digitar
  campoNome.addEventListener('input', () => {
    if (campoNome.value.trim().length < 3) {
      campoNome.style.borderColor = 'red';
    } else {
      campoNome.style.borderColor = 'green';
    }
  });

  // Submissão do formulário
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeValor = campoNome.value.trim();

    if (nomeValor.length < 3) {
      alert('Por favor, preencha um nome válido com pelo menos 3 caracteres.');
      return;
    }

    // Grava no localStorage através do módulo storage.js
    salvarVoluntario({ nome: nomeValor, data: new Date().toLocaleDateString('pt-BR') });

    alert('Cadastro realizado e salvo no navegador com sucesso!');
    campoNome.value = '';
    campoNome.style.borderColor = '';
  });
}
