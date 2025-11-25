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
  art.className = "card styled-card";
  art.dataset.cat = item.category;

  art.innerHTML = `
    <div class="card-header">

      <div class="card-title-zone">
        <span class="card-tag">${S.categories[item.category]}</span>
        <h3 class="card-title">${item.title}</h3>
      </div>

      <div class="card-actions">
        <button class="btn icon tts" title="Ouvir" aria-label="Ouvir">🔈</button>
        <button class="btn icon print" title="${S.printCat}" aria-label="Imprimir">🖨</button>
      </div>

    </div>

    <div class="card-content">
      ${makeBlock(S.blocks.prep, item.blocks.prep)}
      ${makeBlock(S.blocks.during, item.blocks.during)}
      ${makeBlock(S.blocks.after, item.blocks.after)}
      ${makeBlock(S.blocks.risks, item.blocks.risks)}
      ${makeBlock(S.blocks.tips, item.blocks.tips)}
    </div>

    <div class="card-tags">
      ${(item.tags || []).map(t => `<span>#${t}</span>`).join("")}
    </div>
  `;

  // TTS
  const ttsBtn = art.querySelector(".tts");
  if (ttsBtn) {
    ttsBtn.addEventListener("click", () => {
      speak(buildItemReadText(item), ttsBtn);
    });
  }

  // Impressão
  const printBtn = art.querySelector(".print");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  // Accordions
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
// 9. CATEGORIAS 
// ======================================================================
function makeCategory() {
 
  return document.createElement("div");
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
// cards//
function renderMain() {
  const lista = $("#lista");
  if (!lista) return;

  lista.innerHTML = "";

  const data = getData();
  const items = data.filter(d => matchesQuery(d));

   if (state.q.trim()) {
    const msg = $("#msg-busca");
    if (msg) {
      msg.style.display = items.length ? "none" : "block";
    }
  }

  items.forEach(item => {
    const card = makeItemCard(item);
    card.dataset.cat = item.category; // essencial para abas
    lista.appendChild(card);
  });
}

function renderAll() {
  renderHeader();
  renderMain();
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
// ===============================
// FILTRO POR TABS
// ===============================
const tabs = $$('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    $$('#lista article').forEach(card => {
      const type = card.dataset.cat;
      card.style.display =
        filter === 'all' || filter === type
          ? ""
          : "none";
    });
  });
});

// ===============================
//  MOSTRAR SIDE-RAIL QUANDO DEDO CHEGA NA BORDA DIREITA
// ===============================

let railVisible = false;

document.addEventListener("touchstart", (ev) => {
  const x = ev.touches[0].clientX;
  const vw = window.innerWidth;

  // se o dedo tocar nos últimos 20px da tela → mostra
  if (x > vw - 20) {
    document.querySelector(".side-rail")?.classList.add("show");
    railVisible = true;
  }

  // toca em qualquer outro lugar → esconde
  if (railVisible && x < vw - 100) {
    document.querySelector(".side-rail")?.classList.remove("show");
    railVisible = false;
  }
});

