# Site Bugani — guia rápido

Site institucional estático (HTML/CSS/JS puro, sem build, sem backend) baseado no
mockup `SITE_BUGANI.pdf`. Os blocos de banner, equipe, clientes e portfólio usam
vídeos do YouTube (não listados) no lugar de imagens.

## ⚠️ Importante: teste sempre com servidor local, nunca abrindo o arquivo direto

Se você abrir o `index.html` clicando duas vezes nele (abrindo como `file://...`
na barra de endereço), os vídeos do YouTube **não vão tocar** e vai aparecer
"Erro 153". Isso não é um bug do site — é o navegador bloqueando, porque
arquivos abertos assim não enviam a informação de "origem" que o YouTube exige
pra liberar o embed. No domínio real, publicado (https://...), isso não
acontece — é só uma limitação de teste local. Use sempre a opção 2 abaixo
(servidor local) pra testar os vídeos antes do site estar no ar.

## Como rodar localmente

Não precisa de servidor Node nem nada instalado. Duas opções:

1. Abra `index.html` direto no navegador, **ou**
2. Rode um servidor simples (recomendado, evita problemas de caminho relativo):
   ```bash
   cd bugani-site
   python3 -m http.server 8000
   # depois abra http://localhost:8000
   ```

## Estrutura

```
bugani-site/
├── index.html              → Home (4 seções em vídeo)
├── quem-somos.html
├── atuacao.html
├── clientes.html            → carrossel de clientes em vídeo
├── portfolio.html           → carrossel de projetos em vídeo
├── portfolio-detalhe.html   → 1 página só, monta o conteúdo pelo slug (?p=projeto-1)
├── css/style.css            → todo o design system (cores, tipografia, componentes)
├── js/main.js               → menu mobile, vídeo lazy-load, carrossel, formulário
└── js/projects-data.js      → dados dos projetos do portfólio (edite aqui, não crie HTML novo)
```

## Onde colocar os vídeos do YouTube

Todo lugar que precisa de um ID do YouTube está marcado com um placeholder
`VIDEO_ID_...` — procure por `VIDEO_ID` no editor (Ctrl/Cmd+Shift+F) pra achar todos.

| Placeholder | Onde | Comportamento |
|---|---|---|
| `VIDEO_ID_HOME_1..4` | `index.html`, 4 seções da home | autoplay, loop, mudo, sem controles (background) |
| `VIDEO_ID_QUEMSOMOS_BANNER` | `quem-somos.html` | idem |
| `VIDEO_ID_ATUACAO_BANNER` | `atuacao.html` | idem |
| `VIDEO_ID_CLIENTES_BANNER` | `clientes.html` | idem |
| `VIDEO_ID_PORTFOLIO_BANNER` | `portfolio.html` | idem |
| `VIDEO_ID_TIME_1..4` | `quem-somos.html`, cards da equipe | thumbnail estática → toca no hover/toque |
| `VIDEO_ID_CLIENTE_01..10` | `clientes.html`, carrossel | idem (ajuste a quantidade de cards conforme os clientes reais) |
| `VIDEO_ID_PROJETO_01..06` | `portfolio.html`, carrossel | idem, cada card linka pro detalhe |
| dentro de `js/projects-data.js` | banner + galeria de cada projeto na página de detalhe | idem |

**Como pegar o ID:** na URL do vídeo não listado, é o trecho depois de `watch?v=`.
Ex.: `youtube.com/watch?v=AbCdEfGhIjK` → o ID é `AbCdEfGhIjK`.

Substitua só o texto entre aspas em `data-yt-id="VIDEO_ID_..."` (e, na galeria de
projetos, em `ytId: "VIDEO_ID_..."` dentro de `projects-data.js`). O placeholder
serve de propósito: enquanto o ID não for trocado, o vídeo simplesmente não
carrega e você vê um aviso cinza no lugar — não quebra a página.

## Adicionando mais clientes/projetos

- **Clientes:** duplique um bloco `<button class="media-card media-card--logo" ...>`
  dentro de `clientes.html` e troque o `data-yt-id`.
- **Portfólio:** duplique um bloco `<a class="media-card media-card--wide" ...>`
  em `portfolio.html` **e** adicione uma entrada nova em `js/projects-data.js`
  com o mesmo slug usado no `href="portfolio-detalhe.html?p=SEU-SLUG"`.

## Logo

O PDF usa a marca "BUGANI" como texto vetorizado (não tem um arquivo de logo
embutido pra extrair). Por enquanto o site usa o nome em texto (`Archivo Black`),
igual ao mockup. Se vocês tiverem o arquivo original da logo (SVG/PNG/AI),
me envie que eu troco pela versão vetorial nos lugares certos (menu e rodapé).

## Formulário de contato

Hoje o formulário só mostra uma mensagem de confirmação no navegador — **ele
ainda não envia nada de verdade**. Para funcionar em produção, escolha uma opção
e eu conecto:

- **Sem backend:** um serviço como Formspree, Web3Forms ou EmailJS (recebe o
  e-mail pronto em minutos, plano grátis cobre a maioria dos sites institucionais).
- **Com backend:** se vocês já têm/vão ter um servidor, um endpoint simples
  (`POST /contato`) que recebe os dados e envia por e-mail ou salva num banco.

Me avisa qual prefere que eu já deixo plugado.

## Logo

O PDF usa a marca "BUGANI" como texto vetorizado (não tem um arquivo de logo
embutido pra extrair). Por enquanto o site usa o nome em texto (`Fraunces`),
com um favicon e uma imagem de compartilhamento (og-image) provisórios que
criei com a mesma identidade preto/dourado. Se vocês tiverem o arquivo
original da logo (SVG/PNG/AI), me envie que eu troco:
- `assets/favicon.svg` (ícone da aba do navegador)
- `assets/og-image.png` (imagem que aparece ao compartilhar o link no
  WhatsApp, Instagram, LinkedIn etc. — hoje é só um placeholder com o nome)

## Antes de publicar: trocar o domínio placeholder

Usei `https://www.SEUDOMINIO.com.br` como espaço reservado nos seguintes
arquivos, porque ainda não sabia o domínio final do site. Procure por
`SEUDOMINIO` (Ctrl/Cmd+Shift+F) e troque pelo domínio real antes de publicar
de verdade — sem isso, o preview de compartilhamento e o SEO não funcionam
direito:
- Todas as páginas `.html` (tags `canonical`, `og:*`, `twitter:*`)
- `robots.txt`
- `sitemap.xml`

## SEO e compartilhamento já configurados

- Favicon, `canonical`, meta description por página
- Open Graph + Twitter Card (imagem/título/descrição ao colar o link em
  redes sociais e WhatsApp)
- Dados estruturados (JSON-LD) na home, pra ajudar o Google a entender que é
  uma agência de marketing
- `robots.txt` e `sitemap.xml` na raiz

## Deploy

Como é um site 100% estático, pode subir em qualquer um destes (todos com plano
gratuito): Cloudflare Pages, Netlify, Vercel, ou GitHub Pages. Sem servidor,
sem banco de dados — só os arquivos desta pasta.

## Acessibilidade e performance já embutidas

- Vídeos de banner só carregam quando entram na tela (`IntersectionObserver`) e
  são removidos quando saem — evita 5+ vídeos rodando ao mesmo tempo.
- Cards de equipe/clientes/portfólio mostram thumbnail estática por padrão;
  o vídeo só carrega no hover/toque.
- `prefers-reduced-motion` respeitado (desliga transições pra quem configurou
  isso no sistema).
- Navegação por teclado funcional em todos os cards e no menu mobile.
