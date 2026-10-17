# João Mastrangelo

Portfólio e currículo em português e inglês, implementados em HTML, CSS e JavaScript, sem dependências externas de build.

## Executar e validar

Requer Node.js 18 ou superior. Não é necessário npm install.

- `npm start`: abre o servidor em http://127.0.0.1:4173.
- `npm test`: verifica links locais, traduções e conteúdo do currículo.
- `npm run build`: copia os dez arquivos publicáveis para dist/.

## Manutenção

- index.html, style.css e script.js: página inicial, tokens de design, textos PT/EN e categorias de projetos.
- curriculo.html, curriculo.css e curriculo.js: currículo, impressão e traduções técnicas com chaves explícitas.
- perfil-home.jpg: foto fornecida pelo titular, usada nas duas páginas. perfil.jpg: imagem anterior preservada.
- icons.svg: ícones compartilhados.
- build.cjs, serve.cjs e portfolio.test.cjs: ferramentas locais sem dependências.

A preferência de idioma usa localStorage na chave site-language. O currículo inclui contatos completos e legíveis para impressão e exportação. As categorias aguardam conteúdo real; não foram criados projetos fictícios. Fontes da home: Source Serif 4 e Inter, com fallback local.

## Conteúdo aprovado

Nome público: João Mastrangelo. Cargo no Itaú confirmado como atual pelo titular. Experiência em pesquisa econômica, ciência de dados e aplicações de IA tradicional e generativa. Estágio no Safra em Macroeconomia. Competências priorizadas: Macroeconomia, Econometria, Ciência de Dados, Inteligência Artificial, GenAI, Aprendizado de Máquina, Python e AWS.

As entradas AWS AI Practitioner, formação Degreed/IOX/Itaú e DataCamp foram retiradas a pedido do titular. Não foram publicados números de desempenho de fundos, métricas de conversão, informações internas ou ferramentas corporativas como projetos pessoais. As datas de formação seguem o conteúdo fornecido; a conclusão da graduação não recebeu confirmação adicional nesta revisão.

## Publicação

Repositório: https://github.com/joaomast/joaomast.github.io
Site: https://joaomast.github.io/

GitHub Pages publica os arquivos da raiz da branch main. Os caminhos relativos e .nojekyll são preservados. dist/ é uma saída local opcional e está ignorada pelo Git. Não envie node_modules ou arquivos temporários.
