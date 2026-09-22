/* ==========================================================================
   BUGANI — dados dos projetos de portfólio
   Uma página só (portfolio-detalhe.html) monta o conteúdo a partir daqui,
   lendo o slug pela URL (?p=slug). Edite/adicione projetos aqui — não
   precisa criar HTML novo para cada projeto.
   ========================================================================== */

window.BUGANI_PROJECTS = {
  "projeto-1": {
    title: "Portfólio 1",
    bannerYt: "VIDEO_ID_PROJETO_01_BANNER",
    description:
      "Descreva aqui o desafio do cliente, a estratégia da Bugani e os " +
      "resultados entregues neste projeto. Duas ou três frases bastam — " +
      "o vídeo e a galeria fazem o resto do trabalho.",
    tags: ["Branding", "Redes sociais"],
    gallery: [
      { ytId: "VIDEO_ID_PROJETO_01_G1", title: "Peça 1" },
      { ytId: "VIDEO_ID_PROJETO_01_G2", title: "Peça 2" },
      { ytId: "VIDEO_ID_PROJETO_01_G3", title: "Peça 3" },
      { ytId: "VIDEO_ID_PROJETO_01_G4", title: "Peça 4" },
      { ytId: "VIDEO_ID_PROJETO_01_G5", title: "Peça 5" },
      { ytId: "VIDEO_ID_PROJETO_01_G6", title: "Peça 6" }
    ]
  },
  "projeto-2": {
    title: "Portfólio 2",
    bannerYt: "VIDEO_ID_PROJETO_02_BANNER",
    description: "Descreva aqui o desafio, a estratégia e os resultados deste projeto.",
    tags: ["Performance", "Tráfego pago"],
    gallery: [
      { ytId: "VIDEO_ID_PROJETO_02_G1", title: "Peça 1" },
      { ytId: "VIDEO_ID_PROJETO_02_G2", title: "Peça 2" },
      { ytId: "VIDEO_ID_PROJETO_02_G3", title: "Peça 3" }
    ]
  }
  // Adicione "projeto-3" ... "projeto-6" seguindo o mesmo formato.
};
