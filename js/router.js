import { templates } from './templates.js';
import { initValidation } from './validation.js';

export function initRouter() {
  const mainContent = document.querySelector('main');
  const navLinks = document.querySelectorAll('nav a');

  function navigate(route) {
    // Garante que se a rota não existir, volta para 'inicio'
    const cleanRoute = templates[route] ? route : 'inicio';
    
    // Injeta o HTML do template dentro da tag <main>
    mainContent.innerHTML = templates[cleanRoute];
    window.location.hash = cleanRoute;

    // Se a rota for 'cadastro', ativa os eventos de validação e localStorage
    if (cleanRoute === 'cadastro') {
      initValidation();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      // Extrai o nome da rota removendo o cardinal (#)
      const href = link.getAttribute('href');
      const route = href.replace('#', '');
      
      navigate(route);
    });
  });

  // Carrega a rota inicial baseada na URL atual do navegador
  const initialRoute = window.location.hash.replace('#', '') || 'inicio';
  navigate(initialRoute);
}
