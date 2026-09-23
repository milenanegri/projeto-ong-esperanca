export const templates = {
  inicio: `
    <section id="sobre">
      <h2>Sobre a Nossa Organização</h2>
      <p>A ONG Esperança atua há mais de 10 anos transformando vidas por meio da educação e do apoio comunitário no terceiro setor.</p>
      <img src="img/ong-banner.jpg" alt="Voluntários da ONG sorrindo em uma ação comunitária.">
    </section>
    <section id="contato">
      <h2>Fale Conosco</h2>
      <address>
        <p><strong>Endereço:</strong> Rua da Solidariedade, 123 - Centro</p>
        <p><strong>E-mail:</strong> contato@ongesperanca.org.br</p>
        <p><strong>Telefone:</strong> (11) 98765-4321</p>
      </address>
    </section>
  `,
  projetos: `
    <section id="projetos">
      <h2>Nossos Projetos</h2>
      <p>Conheça as iniciativas que mantemos com o apoio de voluntários e doações:</p>
      <ul>
        <li><strong>Educação para Todos:</strong> Aulas de reforço para crianças da comunidade.</li>
        <li><strong>Apoio Comunitário:</strong> Distribuição de cestas básicas e apoio às famílias.</li>
      </ul>
    </section>
  `,
  cadastro: `
    <section id="cadastro">
      <h2>Seja Voluntário</h2>
      <form id="form-cadastro" style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" placeholder="Digite seu nome completo" required style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
        
        <button type="submit" style="background: var(--secondary-color, #e67e22); color: white; padding: 0.75rem; border: none; border-radius: 4px; cursor: pointer;">Cadastrar</button>
      </form>
    </section>
  `
};
