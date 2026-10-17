# João Mastrangelo — POC 01

Portfólio estático em HTML, CSS e JavaScript. A aplicação original não usa Angular; a estrutura foi mantida, sem dependências adicionais.

## Visualização local

Requer Node.js 18 ou superior. Nesta pasta, execute `npm start` e abra http://127.0.0.1:4173. Não é necessário executar npm install.

- `npm run build`: gera os nove arquivos publicáveis em `dist/`.
- `npm test`: valida destinos locais, âncoras, categorias e a alternância PT/EN.

## Arquivos e manutenção

- `index.html`, `style.css`, `script.js`: nova página inicial, tokens responsivos, textos PT/EN e renderização reutilizável das categorias.
- `icons.svg`: ícones vetoriais compartilhados.
- `curriculo.html`, `curriculo.css`, `curriculo.js`: currículo original preservado, com foto, histórico profissional, formação, competências, impressão e idioma. O logotipo retorna ao início.
- `perfil.jpg`: foto original preservada apenas no currículo.
- `build.cjs`, `serve.cjs`, `portfolio.test.cjs`, `package.json`, `.gitignore`: build estático, servidor e verificações sem dependências.

A preferência PT/EN continua salva na chave `site-language`. As categorias ainda não têm projetos publicados e abrem uma informação sobre disponibilidade, sem links vazios. Adicione conteúdo real à estrutura `categories` em script.js ao evoluir o site.

Design: marfim, azul petróleo, azul vibrante e coral; títulos Source Serif 4 e textos Inter, carregados pelo Google Fonts com fontes locais de fallback. Home sem fotos ou elementos decorativos, conforme briefing. Menu móvel permanece visível; foco de teclado e redução de movimento são suportados.

## GitHub Pages

O checkout foi obtido de https://github.com/joaomast/joaomast.github.io, branch main. Caminhos relativos e `.nojekyll` preservam compatibilidade com Pages. Para publicação a partir de branch, os arquivos da raiz continuam prontos para main / (root); alternativamente, publique o conteúdo de dist com um workflow de Pages. A configuração efetiva em Settings > Pages não foi alterada nem confirmada via API autenticada. Nenhum push ou deploy foi realizado.

## Validação e limites

Build e testes automatizados executados. Prévia HTTP local retorna 200. PT/EN verificado no navegador; largura móvel de 390 px sem transbordamento horizontal. Links externos usam o LinkedIn original e o e-mail/GitHub confirmados pelo titular; disponibilidade externa e entrega de e-mail não foram verificadas. A revisão visual responsiva não substitui uma auditoria completa em dispositivos reais.
