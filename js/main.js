/* ==========================================================================
   BUGANI — main.js
   Sem framework, sem build step. Tudo aqui é progressive enhancement:
   sem JS, os cards ainda mostram a thumbnail e os links do menu funcionam.
   ========================================================================== */

(() => {
  "use strict";

  /* ---------------- Nav mobile ---------------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------- Vídeo: banners/heros (autoplay em loop, mudo) ----------------
     Cada .video-block tem data-yt-id="ID_DO_YOUTUBE" (vídeo "não listado").
     Só carrega o iframe quando o bloco entra na tela (Intersection Observer),
     e pausa (remove o iframe) quando sai — evita 5+ vídeos rodando ao mesmo tempo. */
  const heroBlocks = document.querySelectorAll(".video-block[data-yt-id]");
  if (heroBlocks.length) {
    const buildHeroSrc = (id) =>
      `https://www.youtube-nocookie.com/embed/${id}` +
      `?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0` +
      `&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const block = entry.target;
          const id = block.dataset.ytId;
          if (!id || id.startsWith("VIDEO_ID")) return; // placeholder ainda não substituído
          let frame = block.querySelector("iframe");
          if (entry.isIntersecting) {
            if (!frame) {
              frame = document.createElement("iframe");
              frame.className = "video-block__media";
              frame.src = buildHeroSrc(id);
              frame.title = block.dataset.ytTitle || "Vídeo de fundo";
              frame.setAttribute("frameborder", "0");
              frame.setAttribute("allow", "autoplay; encrypted-media");
              frame.referrerPolicy = "strict-origin-when-cross-origin";
              frame.setAttribute("tabindex", "-1");
              frame.setAttribute("aria-hidden", "true");
              block.prepend(frame);
            }
          } else if (frame) {
            frame.remove(); // libera recurso/CPU quando sai da tela
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    heroBlocks.forEach((b) => io.observe(b));
  }

  /* ---------------- Vídeo: cards (equipe / clientes / portfólio) ----------------
     Thumbnail estática por padrão. Ao passar o mouse (desktop) ou tocar
     (mobile), troca por um iframe autoplay. Some ao sair. */
  const mediaCards = document.querySelectorAll(".media-card[data-yt-id]");
  const buildCardSrc = (id) =>
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;

  mediaCards.forEach((card) => {
    const id = card.dataset.ytId;
    let frame = null;
    let hideTimer = null;

    const play = () => {
      if (!id || id.startsWith("VIDEO_ID")) return;
      clearTimeout(hideTimer);
      if (!frame) {
        frame = document.createElement("iframe");
        frame.className = "media-card__frame";
        frame.src = buildCardSrc(id);
        frame.title = card.dataset.ytTitle || "Vídeo";
        frame.setAttribute("frameborder", "0");
        frame.setAttribute("allow", "autoplay; encrypted-media");
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        card.appendChild(frame);
        requestAnimationFrame(() => frame.classList.add("is-active"));
      }
      card.classList.add("is-playing");
    };
    const stop = () => {
      card.classList.remove("is-playing");
      hideTimer = setTimeout(() => {
        if (frame) {
          frame.remove();
          frame = null;
        }
      }, 200);
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focus", play);
    card.addEventListener("blur", stop);
    // Mobile: primeiro toque só dá play; toques seguintes seguem o link se houver
    card.addEventListener(
      "touchstart",
      (e) => {
        if (!card.classList.contains("is-playing")) {
          e.preventDefault();
          play();
        }
      },
      { passive: false }
    );
  });

  /* ---------------- Carrossel simples (clientes / portfólio) ---------------- */
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".carousel-track");
    const grid = root.querySelector(".card-grid");
    const prev = root.querySelector('[data-carousel-prev]');
    const next = root.querySelector('[data-carousel-next]');
    if (!track || !grid || !prev || !next) return;

    let page = 0;

    const perPage = () => {
      const w = window.innerWidth;
      if (w <= 640) return 2;
      if (w <= 960) return 3;
      return parseInt(root.dataset.perPage || "5", 10);
    };

    const totalPages = () => Math.max(1, Math.ceil(grid.children.length / perPage()));

    const update = () => {
      const pages = totalPages();
      page = Math.min(page, pages - 1);
      const track_w = track.clientWidth;
      grid.style.transform = `translateX(-${page * track_w}px)`;
      prev.disabled = page === 0;
      next.disabled = page >= pages - 1;
    };

    prev.addEventListener("click", () => {
      page = Math.max(0, page - 1);
      update();
    });
    next.addEventListener("click", () => {
      page = Math.min(totalPages() - 1, page + 1);
      update();
    });
    window.addEventListener("resize", update);
    update();
  });

  /* ---------------- Formulário de contato ---------------- */
  const form = document.querySelector(".contact-form");
  if (form) {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // TODO: trocar por envio real (endpoint próprio, Formspree, EmailJS etc.)
      // Ver README.md → seção "Formulário de contato".
      if (status) {
        status.dataset.state = "ok";
        status.textContent = "Mensagem pronta para envio — conecte um endpoint no js/main.js.";
      }
    });
  }
})();
