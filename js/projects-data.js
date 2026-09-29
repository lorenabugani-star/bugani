/* ==========================================================================
   BUGANI — dados dos projetos de portfólio
   A página portfolio-detalhe.html monta o conteúdo a partir daqui, lendo o
   slug pela URL (?p=slug). Para adicionar um novo case: coloque os slides
   em assets/portfolio/<pasta>/ e crie uma entrada nova aqui, com o mesmo
   slug usado no href de portfolio.html.
   ========================================================================== */

window.BUGANI_PROJECTS = {
  "projeto-1": {
    title: "Campanha Comercial",
    client: "Sempre Internet",
    bannerImg: "assets/portfolio/case-sempre/slide-1.jpg",
    pdf: "assets/portfolio/case-sempre.pdf",
    description:
      "Transformamos os atributos técnicos da internet Sempre em personagens — Super Velocidade, Miss Estabilidade e Kid Diversão — pra criar conexão emocional com públicos distintos (família, kids, gamers) e comunicar performance, estabilidade e entretenimento de um jeito simples e memorável, do PDV à mídia.",
    tags: ["Branding", "Campanha", "Personagens"],
    gallery: [
      { img: "assets/portfolio/case-sempre/slide-1.jpg", title: "Capa da campanha" },
      { img: "assets/portfolio/case-sempre/slide-2.jpg", title: "Cenário de mercado" },
      { img: "assets/portfolio/case-sempre/slide-3.jpg", title: "Desafios identificados" },
      { img: "assets/portfolio/case-sempre/slide-4.jpg", title: "Estratégia central" },
      { img: "assets/portfolio/case-sempre/slide-5.jpg", title: "Personagens e execução" },
      { img: "assets/portfolio/case-sempre/slide-6.jpg", title: "Resultado e método" }
    ]
  },
  "projeto-2": {
    title: "Lançamento Aurora Residencial",
    client: "Terrare Construtora",
    bannerImg: "assets/portfolio/case-aurora/slide-01.jpg",
    pdf: "assets/portfolio/case-aurora.pdf",
    description:
      "Estratégia de branding, marketing e growth para o lançamento do Aurora Residencial, unindo criatividade orientada por posicionamento e atuação integrada entre marketing e vendas — do planejamento por fases aos materiais de PDV, mídia exterior e frota — resultando em mais de 60% do empreendimento vendido ainda na fase de lançamento.",
    tags: ["Lançamento imobiliário", "Branding", "Growth"],
    gallery: [
      { img: "assets/portfolio/case-aurora/slide-01.jpg", title: "Capa do lançamento" },
      { img: "assets/portfolio/case-aurora/slide-02.jpg", title: "Cenário de mercado" },
      { img: "assets/portfolio/case-aurora/slide-03.jpg", title: "Gestão estratégica de marketing" },
      { img: "assets/portfolio/case-aurora/slide-04.jpg", title: "Marketing e vendas integrados" },
      { img: "assets/portfolio/case-aurora/slide-05.jpg", title: "Criatividade orientada por posicionamento" },
      { img: "assets/portfolio/case-aurora/slide-06.jpg", title: "Execução: mídia exterior e PDV" },
      { img: "assets/portfolio/case-aurora/slide-07.jpg", title: "Estratégia bem executada" },
      { img: "assets/portfolio/case-aurora/slide-08.jpg", title: "Resultado é método" },
      { img: "assets/portfolio/case-aurora/slide-09.jpg", title: "Crescimento sustentável" },
      { img: "assets/portfolio/case-aurora/slide-10.jpg", title: "+60% vendido no lançamento" }
    ]
  }
  // Adicione "projeto-3" em diante seguindo o mesmo formato, conforme novos cases chegarem.
};
