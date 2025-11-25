// ======================================================================
// PRONTOPROEXAME — SCRIPT PRINCIPAL (MULTILÍNGUE)
// ======================================================================

import { STR, DATA } from "./data.js";

// ======================================================================
// 1. HELPERS
// ======================================================================

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const emit = (name, detail) =>
  window.dispatchEvent(new CustomEvent(name, { detail }));

// ======================================================================
// 2. ESTADO GLOBAL
// ======================================================================

const state = {
  lang: localStorage.getItem("lang") || "pt",
  q: "",
  font: Number(localStorage.getItem("fontSize") || 16),
  catsOpen: { lab: true, image: false, meds: false },
};

// strings da UI
function t() {
  return STR[state.lang] || STR.pt;
}

// dados dos exames (agora por idioma)
function getData() {
  // novo formato: DATA = { pt: [...], en: [...], es: [...] }
  if (DATA && !Array.isArray(DATA)) {
    return DATA[state.lang] || DATA.pt || [];
  }
  // fallback se ainda estiver em formato antigo (array simples)
  return Array.isArray(DATA) ? DATA : [];
}

// ======================================================================
// 3. CONTRASTE
// ======================================================================

function syncContrast() {
  const on = localStorage.getItem("hc") === "1";
  document.documentElement.classList.toggle("hc", on);
}

function toggleContrast() {
  const next = !(localStorage.getItem("hc") === "1");
  localStorage.setItem("hc", next ? "1" : "0");
  syncContrast();
}

// ======================================================================
// 4. FONTES (A+ / A−)
// ======================================================================

function setFont(delta) {
  state.font = Math.min(22, Math.max(14, state.font + delta));
  document.documentElement.style.fontSize = state.font + "px";
  localStorage.setItem("fontSize", String(state.font));
}

// ======================================================================
// 5. TTS — LEITURA EM VOZ ALTA
// ======================================================================

let speaking = false;
let speakingBtn = null;
let currentUtter = null;

function resetTtsButton() {
  if (speakingBtn) {
    speakingBtn.classList.remove("on");
    speakingBtn.textContent = "🔈"; // ícone parado
    speakingBtn = null;
  }
}

function speak(text, btn) {
  const s = window.speechSynthesis;
  if (!s || !text) return;

  // se já está falando, cancela o atual
  if (speaking) {
    s.cancel();
    speaking = false;

    // se clicou de novo no mesmo botão, só para
    if (btn && btn === speakingBtn) {
      resetTtsButton();
      return;
    }

    // se clicou em outro botão, reseta o anterior e segue
    resetTtsButton();
  }

  const u = new SpeechSynthesisUtterance(text);
  u.lang =
    state.lang === "en"
      ? "en-US"
      : state.lang === "es"
      ? "es-ES"
      : "pt-BR";

  speaking = true;
  currentUtter = u;

  if (btn) {
    speakingBtn = btn;
    speakingBtn.classList.add("on");
    speakingBtn.textContent = "🔊"; // ícone falando
  }

  u.onend = () => {
    speaking = false;
    resetTtsButton();
  };

  u.onerror = () => {
    speaking = false;
    resetTtsButton();
  };

  s.speak(u);
}

function buildGlobalReadText() {
  const S = t();
  const keys = ["prep", "during", "after", "risks", "tips"];

  const data = getData();
  const filtered = data.filter((d) => matchesQuery(d));
  if (!filtered.length) return S.aboutText || "";

  return filtered
    .map((it) => {
      const body = keys
        .map((k) => `${S.blocks[k]}: ${it.blocks[k]}`)
        .filter(Boolean)
        .join(". ");

      const catName = S.categories[it.category];
      return `${catName}. ${it.title}. ${body}.`;
    })
    .join("\n\n");
}

function buildItemReadText(item) {
  const S = t();
  const keys = ["prep", "during", "after", "risks", "tips"];

  const body = keys
    .map((k) => `${S.blocks[k]}: ${item.blocks[k]}`)
    .filter(Boolean)
    .join(". ");

  return `${S.categories[item.category]}. ${item.title}. ${body}.`;
}

// ======================================================================
// 6. BUSCA E FILTRO
// ======================================================================

function matchesQuery(item) {
  const q = state.q.trim().toLowerCase();
  if (!q) return true;

  const hay = (
    item.title +
    " " +
    (item.tags || []).join(" ") +
    " " +
    (item.keywords || "").toString()
  ).toLowerCase();

  return hay.includes(q);
}

// ======================================================================
// 7. HTML HELPERS PARA PILLS E BLOCOS
// ======================================================================

function pillClass(cat) {
  return `pill ${cat}`;
}

function makeBlock(label, text) {
  if (!text) return "";

  return `
    <div class="block">
      <button type="button">
        <span>${label}</span>
        <span class="chev"></span>
      </button>
      <div class="collapse">
        <div>
          <p class="block-content">${text}</p>
        </div>
      </div>
    </div>
  `;
}

// ======================================================================
// 8. CARD DO EXAME (SUBCATEGORIA: HEMOGRAMA, URINA, ETC.)
// ======================================================================

function makeItemCard(item) {
  const S = t();
  const art = document.createElement("article");
  art.className = "card shadow";

  // HTML do card (cabeçalho)
  art.innerHTML = `
    <div class="item-head">
      <div style="display:flex;align-items:center;gap:.5rem;">
        <span class="${pillClass(item.category)}">
          ${S.categories[item.category]}
        </span>
        <h3 style="margin:0;font-weight:700;">${item.title}</h3>
      </div>
      <div style="display:flex;align-items:center;gap:.5rem;">
        <button class="btn icon icon-pill tts cat-audio" title="Ouvir" aria-label="Ouvir">🔈</button>
        <button class="btn icon icon-pill print block-audio" title="${S.printCat}" aria-label="Imprimir">🖨</button>
      </div>
    </div>
    <div class="blocks"></div>
  `;

  const blocksRoot = art.querySelector(".blocks");
  const Sblocks = S.blocks;

  blocksRoot.innerHTML =
    makeBlock(Sblocks.prep, item.blocks.prep) +
    makeBlock(Sblocks.during, item.blocks.during) +
    makeBlock(Sblocks.after, item.blocks.after) +
    makeBlock(Sblocks.risks, item.blocks.risks) +
    makeBlock(Sblocks.tips, item.blocks.tips);

  // -----------------------
  // BOTÃO DE ÁUDIO (TTS)
  // -----------------------

  const ttsBtn = art.querySelector(".btn.icon.tts");

  if (ttsBtn) {
    ttsBtn.addEventListener("click", () => {
      const text = buildItemReadText(item);
      speak(text, ttsBtn);
    });
  }

  // -----------------------
  // BOTÃO DE IMPRESSÃO DO CARD
  // -----------------------
  // Agora a lógica de mostrar conteúdo está toda no @media print,
  // então aqui só chamamos window.print()
  const printBtn = art.querySelector(".btn.icon.print");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // -----------------------
  // ACORDEÕES DOS BLOCOS
  // -----------------------

  const blockButtons = $$(".block > button", art);

  blockButtons.forEach((btn) => {
    const block = btn.closest(".block");
    const col = block.querySelector(".collapse");

    btn.addEventListener("click", () => {
      const open = col.classList.contains("open");
      col.classList.toggle("open", !open);
      btn.classList.toggle("open", !open);
    });
  });

  return art;
}

// ======================================================================
// 9. CATEGORIAS GRANDES (EXAMES LAB / IMAGEM / MEDS)
// ======================================================================

function makeCategory(key) {
  const S = t();
  const cat = document.createElement("section");
  cat.className = "cat";

  cat.innerHTML = `
    <div class="cat-head">
      <div class="cat-title">${S.categories[key]}</div>
      <div style="display:flex;gap:.5rem;align-items:center;">
        <button class="btn icon toggle">
          <span class="chev"></span>
        </button>
      </div>
    </div>
    <div class="cat-body"><div><div class="grid"></div></div></div>
  `;

  const grid = cat.querySelector(".grid");

  const data = getData();
  const items = data.filter((d) => d.category === key && matchesQuery(d));

  const estaBuscando = !!state.q.trim();
  const temResultado = items.length > 0;

  if (estaBuscando) {
    cat.dataset.open = temResultado ? "true" : "false";
  } else {
    cat.dataset.open = state.catsOpen[key] ? "true" : "false";
  }

  if (items.length) {
    items.forEach((item) => grid.appendChild(makeItemCard(item)));
  } else if (estaBuscando) {
    const msg = document.createElement("p");
    msg.className = "no-results";
    msg.style.padding = "0.75rem 1rem";
    msg.style.fontSize = ".9rem";
    msg.style.color = "#6b7280";
    msg.textContent = "Nenhum resultado nesta categoria.";
    grid.appendChild(msg);
  }

  const toggleBtn = cat.querySelector(".toggle");

  toggleBtn.onclick = () => {
    const open = cat.dataset.open === "true";
    const next = !open;
    cat.dataset.open = next ? "true" : "false";

    if (!state.q.trim()) {
      state.catsOpen[key] = next;
    }
  };

  return cat;
}

// ======================================================================
// 10. RENDER
// ======================================================================

function renderHeader() {
  const S = t();

  const searchEl = $("#search");
  if (searchEl) searchEl.placeholder = S.searchPlaceholder;

  const subtitle = $("#brandSubtitle");
  if (subtitle) subtitle.textContent = S.brandSubtitle;

  const langSel = $("#lang");
  if (langSel) langSel.value = state.lang;

  const hero = $("#hero-phrase");
  if (hero && S.heroPhrase) {
    hero.innerHTML = S.heroPhrase;
  }
}

function renderList() {
  const lista = $("#lista");
  if (!lista) return;

  lista.innerHTML = "";

  const cats = ["lab", "image", "meds"];
  cats.forEach((key) => {
    const section = makeCategory(key);
    const hasAnyItem = section.querySelector(".card, .no-results");
    if (hasAnyItem) {
      lista.appendChild(section);
    }
  });
}

function renderAll() {
  renderHeader();
  renderList();
  scrollToResults(); 

}

// ======================================================================
// 11. VOZ — BUSCA POR MICROFONE
// ======================================================================

function initVoice() {
  const btn = $("#voice-btn");
  const input = $("#search");
  if (!btn || !input) return;

  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Rec) {
    btn.disabled = true;
    btn.title = "Seu navegador não suporta busca por voz";
    return;
  }

  const rec = new Rec();
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  function syncRecLang() {
    if (state.lang === "pt") rec.lang = "pt-BR";
    else if (state.lang === "es") rec.lang = "es-ES";
    else rec.lang = "en-US";
  }
  syncRecLang();

  btn.addEventListener("click", () => {
    try {
      syncRecLang();
      rec.start();
      btn.classList.add("listening");
    } catch {
      /* ignore */
    }
  });

  rec.onresult = (ev) => {
    const txt = ev.results[0][0].transcript;
    input.value = txt;
    state.q = txt;
    renderAll();
  };

  rec.onend = () => {
    btn.classList.remove("listening");
  };
}

// ======================================================================
// 12. INIT PRINCIPAL
// ======================================================================

export function initUI() {
  // Campo de busca
  const searchEl = $("#search");
  if (searchEl) {
    searchEl.addEventListener("input", (e) => {
      state.q = e.target.value;
      renderAll();
    });
  }

  // Select de idioma
  const langSel = $("#lang");
  if (langSel) {
    langSel.addEventListener("change", (e) => {
      state.lang = e.target.value;
      localStorage.setItem("lang", state.lang);
      renderAll();
    });
  }

  // Controles de fonte
  const fsMinus = $("#fs-minus");
  const fsPlus = $("#fs-plus");

  if (fsMinus) fsMinus.onclick = () => setFont(-1);
  if (fsPlus) fsPlus.onclick = () => setFont(+1);

  // Contraste
  const railContrast = $("#rail-contrast");
  if (railContrast) railContrast.onclick = toggleContrast;

  // Leitura global (lado esquerdo)
  const railTTS = $("#rail-tts");
  if (railTTS) {
    railTTS.onclick = () => {
      const text = buildGlobalReadText();
      speak(text, railTTS);
    };
  }

  // Aplica fonte salva
  document.documentElement.style.fontSize = state.font + "px";

  syncContrast();
  renderAll();
  initVoice();
}
function scrollToResults() {
  const lista = document.querySelector("#lista");
  if (!lista) return;

  if (state.q.trim().length === 0) return;

  // Espera o DOM atualizar antes de rolar
  requestAnimationFrame(() => {
    lista.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}


