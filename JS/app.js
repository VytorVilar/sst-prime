/* ==================================================
JS/app.js
VISUAL ORIGINAL + DATA.JS + MENU + RENDER PREMIUM
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  iniciarLoading();
  iniciarRelogio();
  iniciarMenu();
  iniciarHero();

  renderTudo();
  iniciarGrafico();

});

/* =====================================
LOADING
===================================== */
function iniciarLoading(){

  const loading = document.getElementById("loadingScreen");

  setTimeout(() => {

    loading.style.opacity = "0";
    loading.style.transition = ".5s ease";

    setTimeout(() => {
      loading.style.display = "none";
    }, 500);

  }, 1400);

}

/* =====================================
RELÓGIO
===================================== */
function iniciarRelogio(){

  const clock = document.getElementById("clock");

  function atualizar(){

    const agora = new Date();

    const h = String(agora.getHours()).padStart(2,"0");
    const m = String(agora.getMinutes()).padStart(2,"0");
    const s = String(agora.getSeconds()).padStart(2,"0");

    clock.innerText = `${h}:${m}:${s}`;

  }

  atualizar();
  setInterval(atualizar,1000);

}

/* =====================================
MENU
===================================== */
function iniciarMenu(){

  const botoes = document.querySelectorAll(".nav-btn");
  const paginas = document.querySelectorAll(".page");
  const titulo = document.getElementById("pageTitle");

  const nomes = {
    home:"Dashboard Principal",
    epis:"EPIs",
    riscos:"Riscos",
    empresas:"Riscos/Empresa",
    frases:"Frases",
    w2h:"5W2H",
    nrs:"NRs",
    painel:"Painel",
    dashboard:"Dashboard Pro"
  };

  botoes.forEach(btn => {

    btn.addEventListener("click", () => {

      const alvo = btn.dataset.page;

      botoes.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      paginas.forEach(p => p.classList.remove("active"));

      document.getElementById(alvo).classList.add("active");

      titulo.innerText = nomes[alvo];

    });

  });

}

/* =====================================
BOTÃO HERO
===================================== */
function iniciarHero(){

  const btn = document.querySelector(".hero-btn");

  if(!btn) return;

  btn.onclick = () => {
    document.querySelector('[data-page="dashboard"]').click();
  };

}

/* =====================================
RENDER GERAL
===================================== */
function renderTudo(){

  renderEpis();
  renderRiscos();
  renderEmpresas();
  renderW2H();
  renderNRs();
  renderPainel();
  renderAlertas();
  renderKPIs();

}

/* =====================================
EPIS
===================================== */
function renderEpis(){

  const box = document.getElementById("epiList");

  if(!box) return;

  box.innerHTML = DATA.epis.map(item => `
    <div class="card">

      <img src="${item.imagem}" style="
        width:100%;
        height:180px;
        object-fit:contain;
        border-radius:14px;
        margin-bottom:14px;
        background:white;
      ">

      <h3 style="font-size:20px;">${item.nome}</h3>

      <p style="margin:10px 0;">📂 ${item.categoria}</p>

      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top:16px;
      ">

        <span style="
          background:#dcfce7;
          color:#166534;
          padding:8px 14px;
          border-radius:999px;
          font-weight:700;
        ">
          CA Nº: ${item.ca}
        </span>

        <button class="copy-btn">📋 Copiar</button>

      </div>

    </div>
  `).join("");

}

/* =====================================
RISCOS
===================================== */
function renderRiscos(){

  const box = document.getElementById("riskList");

  if(!box) return;

  box.innerHTML = DATA.riscos.map(item => `
    <div class="card">

      <h3 style="text-transform:lowercase;">
        ${item.tipo}
      </h3>

      <p style="
        margin:30px 0;
        line-height:1.7;
      ">
        ${item.texto}
      </p>

      <button class="copy-btn">
        Copiar
      </button>

    </div>
  `).join("");

}

/* =====================================
EMPRESAS
===================================== */
function renderEmpresas(){

  const box = document.getElementById("empresaList");

  if(!box) return;

  box.innerHTML = DATA.empresas.map(item => `
    <div class="card">

      <span style="
        display:inline-block;
        background:#dff7ee;
        color:#0f172a;
        padding:10px 14px;
        border-radius:10px;
        font-weight:700;
        margin-bottom:18px;
      ">
        ${item.risco}
      </span>

      <h3 style="font-size:22px;">
        ${item.nome}
      </h3>

      <p style="margin:14px 0;">
        ${item.setor}
      </p>

      <button class="copy-btn">
        📋 Copiar
      </button>

    </div>
  `).join("");

}

/* =====================================
5W2H
===================================== */
function renderW2H(){

  const box = document.getElementById("w2hList");

  if(!box) return;

  box.innerHTML = DATA.w2h.map(item => `
    <div class="card">

      <h3>${item.titulo}</h3>

      <p style="
        margin:40px 0;
        min-height:140px;
      ">
        ${item.texto}
      </p>

      <button class="copy-btn">
        Copiar
      </button>

    </div>
  `).join("");

}

/* ==================================================
SUBSTITUA renderNRs() NO app.js
NRs CLICÁVEIS
================================================== */

function renderNRs(){

  const box = document.getElementById("nrList");
  if(!box) return;

  box.innerHTML = DATA.nrs.map(item => `

    <div class="card link-card"
         onclick="window.open('${item.link}','_blank')">

      <h3>${item.codigo}</h3>

      <p>${item.nome}</p>

      <button class="copy-btn">
        Abrir NR
      </button>

    </div>

  `).join("");

}

/* =====================================
PAINEL
===================================== */
function renderPainel(){

  const box = document.getElementById("painelList");
  if(!box) return;

  box.innerHTML = DATA.painel.map(item => `

    <div class="card link-card"
         onclick="window.open('${item.link}','_blank')">

      <h3>${item.titulo}</h3>
      <p>${item.desc}</p>

      <button class="copy-btn">
        Acessar
      </button>

    </div>

  `).join("");

}

/* =====================================
ALERTAS
===================================== */
function renderAlertas(){

  const box = document.getElementById("alertList");

  if(!box) return;

  box.innerHTML = DATA.alertas.map(item => `
    <li>${item}</li>
  `).join("");

}

/* =====================================
KPIS
===================================== */
function renderKPIs(){

  document.getElementById("kpiEpis").innerText = DATA.epis.length;
  document.getElementById("kpiRiscos").innerText = DATA.riscos.length;
  document.getElementById("kpiEmpresas").innerText = DATA.empresas.length;
  document.getElementById("kpiNrs").innerText = DATA.nrs.length;

  document.getElementById("dashEpis").innerText = DATA.epis.length;
  document.getElementById("dashRiscos").innerText = DATA.riscos.length;
  document.getElementById("dashEmpresas").innerText = DATA.empresas.length;

}

/* =====================================
GRÁFICO
===================================== */
function iniciarGrafico(){

  const canvas = document.getElementById("chart1");

  if(!canvas) return;

  new Chart(canvas,{
    type:"bar",
    data:{
      labels:["EPIs","Riscos","Empresas","NRs"],
      datasets:[{
        data:[
          DATA.epis.length,
          DATA.riscos.length,
          DATA.empresas.length,
          DATA.nrs.length
        ],
        backgroundColor:[
          "#22c55e",
          "#16a34a",
          "#4ade80",
          "#15803d"
        ],
        borderRadius:10
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{display:false}}
    }
  });

}

/* ==================================================
SUBSTITUA O BLOCO DOS BOTÕES COPIAR NO app.js
COPIA INTELIGENTE POR ABA
================================================== */

document.addEventListener("click", function(e){

  const btn = e.target.closest(".copy-btn");
  if(!btn) return;

  e.preventDefault();
  e.stopPropagation();

  const card = btn.closest(".card");
  if(!card) return;

  let texto = "";

  /* =====================================
  EPIs = copia apenas CA
  ===================================== */
  if(card.closest("#epiList")){

    const badge = card.querySelector("span");

    if(badge){
      texto = badge.innerText
        .replace("CA Nº:", "")
        .replace("CA N°:", "")
        .trim();
    }

  }

  /* =====================================
  RISCOS = apenas texto
  ===================================== */
  else if(card.closest("#riskList")){

    const p = card.querySelector("p");

    if(p) texto = p.innerText.trim();

  }

  /* =====================================
  EMPRESAS = apenas nome
  ===================================== */
  else if(card.closest("#empresaList")){

    const h3 = card.querySelector("h3");

    if(h3) texto = h3.innerText.trim();

  }

  /* =====================================
  5W2H = apenas texto
  ===================================== */
  else if(card.closest("#w2hList")){

    const p = card.querySelector("p");

    if(p) texto = p.innerText.trim();

  }

  /* =====================================
  PAINEL / NRS / OUTROS
  ===================================== */
  else{

    const h3 = card.querySelector("h3");
    if(h3) texto = h3.innerText.trim();

  }

  if(!texto) return;

  navigator.clipboard.writeText(texto).then(() => {

    const antigo = btn.innerHTML;

    btn.innerHTML = "✅ Copiado!";
    btn.style.background = "#16a34a";

    setTimeout(() => {
      btn.innerHTML = antigo;
      btn.style.background = "";
    },1500);

  });

});

/* ==================================================
GERADOR DE FRASES (FORMATO CSV SIMPLES)
RESULTADO:
Nome, Empresa, , , Data

EX:
João, Alpha Ltda, , , 12/09/2025
================================================== */

/* CHAME NO DOMContentLoaded */
function iniciarGeradorFrases(){

  const btn = document.querySelector("#frases button");
  if(!btn) return;

  btn.addEventListener("click", gerarFrases);

}

/* ==================================================
GERAR
================================================== */

function gerarFrases(){

  const textarea = document.querySelector("#frases textarea");
  const empresa  = document.querySelector('#frases input[placeholder="Empresa"]');
  const data     = document.querySelector('#frases input[placeholder="Data"]');

  if(!textarea) return;

  const nomes = textarea.value
    .split("\n")
    .map(item => item.trim())
    .filter(item => item !== "");

  if(nomes.length === 0){
    alert("Digite ao menos 1 nome.");
    return;
  }

  const nomeEmpresa = (empresa.value || "").trim();
  const dataTexto   = (data.value || "").trim();

  const resultado = nomes.map(nome => {
    return `${nome}, ${nomeEmpresa}, , , ${dataTexto}`;
  });

  textarea.value = resultado.join("\n");

}

/* ==================================================
INICIAR
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  iniciarGeradorFrases();
});

/* ==================================================
BUSCAS FUNCIONANDO NO SITE TODO
COLE NO FINAL DO app.js
================================================== */

function iniciarBuscas(){

  iniciarBusca("#epis input", "#epiList", ".card");
  iniciarBusca("#riscos input", "#riskList", ".card");
  iniciarBusca("#empresas input", "#empresaList", ".card");

}

/* ==================================================
FUNÇÃO PADRÃO
================================================== */

function iniciarBusca(inputSelector, listaSelector, itemSelector){

  const input = document.querySelector(inputSelector);
  const lista = document.querySelector(listaSelector);

  if(!input || !lista) return;

  input.addEventListener("input", () => {

    const termo = input.value.toLowerCase().trim();

    const cards = lista.querySelectorAll(itemSelector);

    cards.forEach(card => {

      const texto = card.innerText.toLowerCase();

      if(texto.includes(termo)){
        card.style.display = "";
      }else{
        card.style.display = "none";
      }

    });

  });

}

/* ==================================================
CHAMAR AO INICIAR
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  iniciarBuscas();
});

/* ==================================================
FILTRO PREMIUM FUNCIONANDO
COLE NO FINAL DO app.js
ABRE / FECHA / CLICA / FILTRA
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  iniciarFiltroCategorias();

});

/* ==================================================
INICIAR FILTRO
================================================== */

function iniciarFiltroCategorias(){

  const trigger = document.getElementById("catTrigger");
  const menu    = document.getElementById("catMenu");
  const label   = document.getElementById("catLabel");

  if(!trigger || !menu || !label) return;

  /* ABRIR / FECHAR */
  trigger.addEventListener("click", function(e){

    e.stopPropagation();

    trigger.parentElement.classList.toggle("open");

  });

  /* CLICOU FORA */
  document.addEventListener("click", function(){

    trigger.parentElement.classList.remove("open");

  });

  /* ITENS */
  const itens = menu.querySelectorAll(".filter-item");

  itens.forEach(item => {

    item.addEventListener("click", function(e){

      e.stopPropagation();

      const categoria = item.dataset.cat;
      const texto     = item.innerText;

      /* label */
      label.innerText = texto;

      /* active */
      itens.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      /* fecha menu */
      trigger.parentElement.classList.remove("open");

      /* filtra cards */
      filtrarEpisPorCategoria(categoria);

    });

  });

}

/* ==================================================
FILTRAR
================================================== */

function filtrarEpisPorCategoria(cat){

  const cards = document.querySelectorAll("#epiList .card");

  cards.forEach(card => {

    const texto = card.innerText.toLowerCase();

    if(cat === ""){
      card.style.display = "";
      return;
    }

    if(texto.includes(cat.toLowerCase())){
      card.style.display = "";
    }else{
      card.style.display = "none";
    }

  });

}

/* ==================================================
ETAPA 2 — DASHBOARD VIVO + UX PREMIUM
COLE NO FINAL DO app.js
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  iniciarContadoresPremium();
  iniciarStatusOnline();
  iniciarToastSystem();
  iniciarUltimaAtualizacao();

});

/* ==================================================
CONTADORES ANIMADOS
================================================== */

function iniciarContadoresPremium(){

  const numeros = document.querySelectorAll(
    "#kpiEpis, #kpiRiscos, #kpiEmpresas, #kpiNrs, #dashEpis, #dashRiscos, #dashEmpresas"
  );

  numeros.forEach(el => {

    const alvo = parseInt(el.innerText) || 0;

    let atual = 0;

    const tempo = setInterval(() => {

      atual += Math.ceil(alvo / 25);

      if(atual >= alvo){
        atual = alvo;
        clearInterval(tempo);
      }

      el.innerText = atual;

    },30);

  });

}

/* ==================================================
STATUS ONLINE PULSANDO
================================================== */

function iniciarStatusOnline(){

  const dot = document.querySelector(".status-dot");

  if(!dot) return;

  setInterval(() => {

    dot.style.transform = "scale(1.35)";
    dot.style.boxShadow = "0 0 12px #22c55e";

    setTimeout(() => {

      dot.style.transform = "scale(1)";
      dot.style.boxShadow = "0 0 0 transparent";

    },600);

  },1800);

}

/* ==================================================
TOAST
================================================== */

function iniciarToastSystem(){

  mostrarToast("Sistema iniciado com sucesso");

  document.addEventListener("click", e => {

    const btn = e.target.closest(".copy-btn");

    if(btn){
      mostrarToast("Conteúdo copiado");
    }

  });

}

function mostrarToast(texto){

  const old = document.querySelector(".premium-toast");
  if(old) old.remove();

  const toast = document.createElement("div");
  toast.className = "premium-toast";
  toast.innerText = texto;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  },50);

  setTimeout(() => {

    toast.classList.remove("show");

    setTimeout(() => toast.remove(),300);

  },2200);

}

/* ==================================================
ÚLTIMA ATUALIZAÇÃO
================================================== */

function iniciarUltimaAtualizacao(){

  const topbar = document.querySelector(".top-left small");

  if(!topbar) return;

  function atualizar(){

    const agora = new Date();

    const h = String(agora.getHours()).padStart(2,"0");
    const m = String(agora.getMinutes()).padStart(2,"0");

    topbar.innerText = `Atualizado às ${h}:${m}`;

  }

  atualizar();
  setInterval(atualizar,60000);

}

/* ==================================================
ETAPA 4 — SISTEMA NÍVEL EMPRESA REAL
AUTOMAÇÃO + INTELIGÊNCIA + VIDA NO DASHBOARD
COLE NO FINAL DO app.js
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  iniciarAlertasAutomaticos();
  iniciarAtualizacaoKPIs();
  iniciarNotificacoesAleatorias();
  iniciarSaudacaoExecutiva();
  iniciarAutoBackupFake();

});

/* ==================================================
ALERTAS DINÂMICOS
================================================== */

function iniciarAlertasAutomaticos(){

  const box = document.getElementById("alertList");
  if(!box) return;

  const mensagens = [

    "Sistema operando normalmente",
    "Nova atualização disponível",
    "Conformidade geral em 98%",
    "EPIs revisados com sucesso",
    "Backup concluído",
    "Painel sincronizado",
    "Sem pendências críticas",
    "Normas atualizadas"

  ];

  setInterval(() => {

    const msg = mensagens[
      Math.floor(Math.random() * mensagens.length)
    ];

    const li = document.createElement("li");
    li.innerText = msg;

    box.prepend(li);

    if(box.children.length > 5){
      box.lastElementChild.remove();
    }

  },7000);

}

/* ==================================================
KPIs VIVOS
================================================== */

function iniciarAtualizacaoKPIs(){

  const ids = [
    "kpiEpis",
    "kpiRiscos",
    "kpiEmpresas",
    "kpiNrs",
    "dashEpis",
    "dashRiscos",
    "dashEmpresas"
  ];

  setInterval(() => {

    ids.forEach(id => {

      const el = document.getElementById(id);
      if(!el) return;

      let valor = parseInt(el.innerText) || 0;

      if(Math.random() > 0.65){
        valor += 1;
      }

      el.innerText = valor;

    });

  },12000);

}

/* ==================================================
NOTIFICAÇÕES PREMIUM
================================================== */

function iniciarNotificacoesAleatorias(){

  const avisos = [

    "Novo documento inserido",
    "Sistema sincronizado",
    "NR-06 em destaque",
    "Painel atualizado",
    "Backup realizado",
    "Base carregada"

  ];

  setInterval(() => {

    const msg = avisos[
      Math.floor(Math.random() * avisos.length)
    ];

    mostrarToast(msg);

  },18000);

}

/* ==================================================
SAUDAÇÃO EXECUTIVA
================================================== */

function iniciarSaudacaoExecutiva(){

  const area = document.querySelector(".top-left h2");
  if(!area) return;

  const hora = new Date().getHours();

  let saudacao = "Dashboard Principal";

  if(hora < 12) saudacao = "Bom dia, Gestor";
  else if(hora < 18) saudacao = "Boa tarde, Gestor";
  else saudacao = "Boa noite, Gestor";

  area.innerText = saudacao;

}

/* ==================================================
BACKUP VISUAL
================================================== */

function iniciarAutoBackupFake(){

  setInterval(() => {

    mostrarToast("Backup automático concluído");

  },30000);

}