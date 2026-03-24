/ ================================
//  BANCO COMPLETO DE HORÁRIOS
// ================================
const horarios = {
  Popular: [],
  Junqueira: [],
  Pasetto: [],
  Ribeiro: [],
  Reboucas: [],
  Guaicara: [],
  Centro: [],
  Cafelandia: [],
  Promissão: [],
  Sabino: []

};
const horariosVolta = {
  Popular: [],
  Junqueira: [],
  Pasetto: [],
  Ribeiro: [],
  Reboucas: [],
  Guaicara: [],
  Centro: [],
  Cafelandia: [],
  Promissão: [],
  Sabino: []
};

// Analisar tabela enviada (já convertida para JS)
const tabelaHorarios = [
  ["00:30","Ribeiro/Rebouças",10],
  ["00:30","Junqueira/Pasetto",12],
  ["00:30","Guaiçara/Sta Terezinha",9],
  ["00:30","Popular",14],

  ["01:45","Popular",14],
  ["01:45","Junqueira",12],
  ["01:45","Pasetto",13],
  ["01:45","Ribeiro",10],
  ["01:45","Rebouças",11],
  ["01:45","Guaiçara",9],
  ["01:45","Br/Frig/Promissão","1 ou 2"],

  ["02:30","Ribeiro/Rebouças",10],
  ["02:30","Junqueira/Pasetto",12],
  ["02:30","Guaiçara/Sta Terezinha",9],
  ["02:30","Popular",14],

  ["02:35","FRIG/Promissão","1 ou 2"],

  ["03:20","Popular/completo 1",1],
  ["03:20","Junqueira/completo 1",1],
  ["03:20","Pasetto/completo 1",1],
  ["03:20","Ribeiro/completo 1",1],
  ["03:20","Reboucas/completo 1",1],
  ["03:20","Guaicara/completo 1",1],
  ["03:20","Centro/completo 1",1],
  
   ["03:20","Popular/completo 2",2],
  ["03:20","Junqueira/completo 2",2],
  ["03:20","Pasetto/completo 2",2],
  ["03:20","Ribeiro/completo 2",2],
  ["03:20","Reboucas/completo 2",2],
  ["03:20","Guaicara/completo 2",2],
  ["03:20","Centro/completo 2",2],

  ["04:00","Popular",14],
  ["04:00","Junqueira",12],
  ["04:00","Pasetto",13],
  ["04:00","Ribeiro",10],
  ["04:00","Rebouças",11],
  ["04:00","Guaiçara",9],

  ["04:40","Guaiçara 1",9],
  ["04:40","Guaiçara 2",9],
  ["04:40","Junqueira 1",12],
  ["04:40","Junqueira 2",12],
  ["04:40","Pasetto 1",13],
  ["04:40","Pasetto 2",13],
  ["04:40","Popular 1",14],
  ["04:40","Popular 2",14],
  ["04:40","Rebouças 1",11],
  ["04:40","Rebouças 2",11],
  ["04:40","Reforço - Ribeiro/Rebouças",11],
  ["04:40","Reforço - Popular",14],
  ["04:40","Ribeiro 1",10],
  ["04:40","Ribeiro 2",10],

  ["05:05","FRIG/BR/Promissão","1 ou 2"],
  ["05:05","FRIG/Promissão","1 ou 2"],
  ["05:15","BR/FRIG/Promissão","1 ou 2"],

  ["05:40","Guaiçara 1",9],
  ["05:40","Guaiçara 2",9],
  ["05:40","Junqueira 1",12],
  ["05:40","Junqueira 2",12],
  ["05:40","Pasetto 1",13],
  ["05:40","Pasetto 2",13],
  ["05:40","Popular 1",14],
  ["05:40","Popular 2",14],
  ["05:40","Rebouças 1",11],
  ["05:40","Rebouças 2",11],
  ["05:40","Ribeiro 1",10],
  ["05:40","Ribeiro 2",10],
["05:40","BR/Promissão","1 ou 2"],

  ["06:10","BR/FRIG/Cafelandia",8],
  ["06:10","FRIG/Promissão","1 ou 2"],

  ["06:30","Ribeiro",10],
  ["06:30","Junqueira/Pasetto",13],
  ["06:30","Guaiçara/Sta Terezinha",9],
  ["06:30","Rebouças",11],

  ["06:40","FRIG/Promissão","1 ou 2"],
  ["06:40","BR/Sabino",7],

 ["06:35","BR/FRIG/Cafelandia",8],

  ["07:40","Popular/completo 1",1],
  ["07:40","Junqueira/completo 1",1],
  ["07:40","Pasetto/completo 1",1],
  ["07:40","Ribeiro/completo 1",1],
  ["07:40","Reboucas/completo 1",1],
  ["07:40","Guaicara/completo 1",1],
  ["07:40","Centro/completo 1",1],
  ["07:40","FRIG/Promissão","1 ou 2"],

  
   ["07:40","Popular/completo 2",2],
  ["07:40","Junqueira/completo 2",2],
  ["07:40","Pasetto/completo 2",2],
  ["07:40","Ribeiro/completo 2",2],
  ["07:40","Reboucas/completo 2",2],
  ["07:40","Guaicara/completo 2",2],
  ["07:40","Centro/completo 2",2],

   ["08:00","BR/FRIG/Cafelandia",8],

  ["09:40","Popular/completo 1",1],
  ["09:40","Junqueira/completo 1",1],
  ["09:40","Pasetto/completo 1",1],
  ["09:40","Ribeiro/completo 1",1],
  ["09:40","Reboucas/completo 1",1],
  ["09:40","Guaicara/completo 1",1],
  ["09:40","Centro/completo 1",1],
  
   ["09:40","Popular/completo 2",2],
  ["09:40","Junqueira/completo 2",2],
  ["09:40","Pasetto/completo 2",2],
  ["09:40","Ribeiro/completo 2",2],
  ["09:40","Reboucas/completo 2",2],
  ["09:40","Guaicara/completo 2",2],
  ["09:40","Centro/completo 2",2],

   ["11:30","Popular/completo 1",1],
   ["11:30","Junqueira/completo 1",1],
   ["11:30","Pasetto/completo 1",1],
   ["11:30","Ribeiro/completo 1",1],
   ["11:30","Reboucas/completo 1",1],
   ["11:30","Guaicara/completo 1",1],
   ["11:30","Centro/completo 1",1],

      ["11:30","Popular/completo 2",2],
   ["11:30","Junqueira/completo 2",2],
   ["11:30","Pasetto/completo 2",2],
   ["11:30","Ribeiro/completo 2",2],
   ["11:30","Reboucas/completo 2",2],
   ["11:30","Guaicara/completo 2",2],
   ["11:30","Centro/completo 2",2],

  ["13:00","Popular",14],
  ["13:00","Junqueira",12],
  ["13:00","Pasetto",13],
  ["13:00","Ribeiro",10],
  ["13:00","Rebouças",11],
  ["13:00","Guaiçara",9],

  ["13:50","Popular",14],
  ["13:50","Junqueira",12],
  ["13:50","Pasetto",13],
  ["13:50","Ribeiro",10],
  ["13:50","Rebouças",11],
  ["13:50","Guaiçara",9],

   ["14:30","BR/FRIG/Cafelandia",8],
   ["14:40","FRIG/BR/Promissão","1 ou 2"],
   ["14:40","FRIG/BR/Sabino",7],

  ["14:50","Popular",14],
  ["14:50","Junqueira",12],
  ["14:50","Pasetto",13],
  ["14:50","Ribeiro",10],
  ["14:50","Rebouças",11],
  ["14:50","Guaiçara",9],

  ["16:00","Popular",14],
  ["16:00","Junqueira",12],
  ["16:00","Pasetto",13],
  ["16:00","Ribeiro",10],
  ["16:00","Rebouças",11],
  ["16:00","Guaiçara",9],
  ["16:00","Reforço - Centro",11],
  ["16:00","Reforço - Popular",14],
  ["16:00","FRIG/BR/Promissão","1 ou 2"],

   ["16:15","BR/FRIG/Cafelandia",8],
   ["16:30","FRIG/Sabino",7],
   ["16:40","FRIG/Promissão","1 ou 2"],

  ["16:45","Popular",14],
  ["16:45","Junqueira",12],
  ["16:45","Pasetto",13],
  ["16:45","Ribeiro",10],
  ["16:45","Rebouças",11],
  ["16:45","Guaiçara",9],
  ["16:45","Reforço - Centro",11],
  ["16:45","Reforço - Popular",14],

   ["17:10","BR/FRIG/Cafelandia",8],
   ["17:15","BR/FRIG/Promissão","1 ou 2"],
   ["17:15","FRIG/BR/Sabino",7],
   ["17:20","BR/FRIG/Promissão","1 ou 2"],
   

  ["17:30","Popular",14],
  ["17:30","Junqueira",12],
  ["17:30","Pasetto",13],
  ["17:30","Ribeiro",10],
  ["17:30","Rebouças",11],
  ["17:30","Guaiçara",9],
  ["17:30","Reforço",11],

  ["17:40","FRIG/BR/Promissão","1 ou 2"],

  ["18:10","FRIG/BR/Promissão","1 ou 2"],

  ["18:15","Popular",14],
  ["18:15","Junqueira",12],
  ["18:15","Pasetto",13],
  ["18:15","Ribeiro",10],
  ["18:15","Rebouças",11],
  ["18:15","Guaiçara",9],
 ["18:15","BR/FRIG/Cafelandia",8],
  
   ["19:00","Popular/completo 1",1],
   ["19:00","Junqueira/completo 1",1],
   ["19:00","Pasetto/completo 1",1],
   ["19:00", "Ribeiro/completo 1",1],
   ["19:00","Reboucas/completo 1",1],
   ["19:00","Guaicara/completo 1",1],
   ["19:00","Centro/completo 1",1],

      ["19:00","Popular/completo 2",2],
   ["19:00","Junqueira/completo 2",2],
   ["19:00","Pasetto/completo 2",2],
   ["19:00","Ribeiro/completo 2",2],
   ["19:00","Reboucas/completo 2",2],
   ["19:00","Guaicara/completo 2",2],
   ["19:00","Centro/completo 2",2],

   ["19:0","Popular/completo 1",1],
   ["19:50","Junqueira/completo 1",1],
   ["19:50","Pasetto/completo 1",1],
   ["19:50", "Ribeiro/completo 1",1],
   ["19:50","Reboucas/completo 1",1],
   ["19:50","Guaicara/completo 1",1],
   ["19:50","Centro/completo 1",1],

   ["20:05","Popular/completo 2",2],
   ["20:05","Junqueira/completo 2",2],
   ["20:05","Pasetto/completo 2",2],
   ["20:05","Ribeiro/completo 2",2],
   ["20:05","Reboucas/completo 2",2],
   ["20:05","Guaicara/completo 2",2],
   ["20:05","Centro/completo 2",2],
 
  ["21:05","Popular",14],
  ["21:05","Junqueira",12],
  ["21:05","Pasetto",13],
  ["21:05","Ribeiro",10],
  ["21:05","Rebouças",11],
  ["21:05","Guaiçara",9],

  ["21:50","Ribeiro",10],
  ["21:50","Junqueira/Pasetto",12],
  ["21:50","Guaiçara/Sta Terezinha",9],
  ["21:50","Rebouças",11],

  ["22:40","Popular",14],
  ["22:40","Junqueira",12],
  ["22:40","Pasetto",13],
  ["22:40","Ribeiro",10],
  ["22:40","Rebouças",11],
  ["22:40","Guaiçara",9],
  ["22:40","FRIG/BR/Sabino",7],
   ["22:40","BR/FRIG/Cafelandia",8],
   ["22:50","FRIG/BR/Promissão","1 ou 2"]
];

// Distribuir horários nos bairros automaticamente
tabelaHorarios.forEach(([hora, trajeto, plataforma]) => {

  const bairros = trajeto.split("/");

  bairros.forEach(bairro => {
    bairro = bairro.trim();

    // remover "Reforço - "
    bairro = bairro.replace("Reforço - ", "");

    // remover números (1, 2...)
    bairro = bairro.replace(/\d+/g, "").trim();

    // ignorar completos (importante!)
    if (bairro.toLowerCase().includes("completo")) return;

    // padronização
    if (bairro.includes("Rebou")) bairro = "Reboucas";
    if (bairro.includes("Guai")) bairro = "Guaicara";
    if (bairro.includes("Sta")) bairro = "Guaicara";

    // 🔥 GARANTE QUE EXISTE
    if (!horarios[bairro]) return;

    horarios[bairro].push({
      hora: hora,
      trajeto: trajeto,
      plataforma: plataforma
    });

  });

});
const pontosBairroParaFrigorifico = {
  Guaicara: [
    {
      nome: "Guarita Dom Bosco",
      horarios: ["04:50", "05:50", "13:08", "13:58", "14:58", "16:08", "16:51"]
    },
    {
      nome: "Guarita Ferro Velho",
      horarios: ["04:52", "05:51", "13:09", "13:59", "14:59", "16:09", "16:52"]
    },
    {
      nome: "Geladeira / Rodoviária",
      horarios: ["05:00", "05:55", "13:12", "14:02", "15:02", "16:12", "16:57"]
    },
    {
      nome: "Artigo de Festa",
      horarios: ["05:02", "05:58", "13:15", "14:05", "15:05", "16:15", "16:59"]
    },
    {
      nome: "Praça do Velório",
      horarios: ["05:04", "06:00", "13:17", "14:07", "15:07", "16:17", "17:00"]
    },
    {
      nome: "Novapron (1)",
      horarios: ["05:00", "05:55", "13:19", "14:09", "15:10", "16:20", "17:03"]
    },
    {
      nome: "Creche Maria Luiza",
      horarios: ["05:02", "05:52", "13:20", "14:10", "15:11", "16:22", "17:05"]
    },
    {
      nome: "Biza",
      horarios: ["05:05", "05:55", "13:22", "14:12", "15:13", "16:24", "17:07"]
    },
    {
      nome: "Rua Cateto (Praça)",
      horarios: ["05:07", "06:00", "13:25", "14:15", "15:15", "16:29", "17:09"]
    },
    {
      nome: "Rua Pedro Bertolino",
      horarios: ["05:09", "06:02", "13:28", "14:17", "15:17", "16:31", "17:12"]
    },
    {
      nome: "Novapron (2)",
      horarios: ["05:11", "06:05", "13:30", "14:20", "15:20", "16:34", "17:15"]
    },
    {
      nome: "Floricultura",
      horarios: ["05:06", "06:02", "13:34", "14:23", "15:23", "16:36", "17:17"]
    },
    {
      nome: "Restaurante Ponto 9",
      horarios: ["05:10", "06:07", "13:38", "14:26", "15:26", "16:38", "17:20"]
    }
  ]
};



// ===================================
//  MOSTRAR RESULTADOS
// ===================================
function mostrarPontos() {

  const direcao = document.getElementById("direcao").value;
  const bairro = document.getElementById("bairro").value;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (!bairro) {
    resultado.innerHTML = "<p>⚠️ Selecione um bairro ou ponto.</p>";
    return;
  }

  // ============================
  // BAIRRO ➝ FRIGORÍFICO
  // ============================
  if (direcao === "volta") {

  const pontos = pontosBairroParaFrigorifico[bairro];

  if (!pontos || pontos.length === 0) {
    resultado.innerHTML = "<p>ℹ️ Nenhum ponto encontrado.</p>";
    return;
  }

  resultado.innerHTML = `<h2>${bairro} ➝ Frigorífico</h2>`;

  pontos.forEach(p => {
    resultado.innerHTML += `
      <div class="ponto">
        <strong>${p.nome}</strong><br>
        <span>(${p.horarios.join(" • ")})</span>
      </div>
    `;
  });

  return;
}

  // ============================
  // FRIGORÍFICO ➝ BAIRRO
  // ============================
  const dados = horarios[bairro];

  if (!dados || dados.length === 0) {
    resultado.innerHTML = "<p>❌ Nenhum horário encontrado.</p>";
    return;
  }

  let tabela = `
    <h2>Horários para ${bairro}</h2>
    <table>
      <tr>
        <th>Horário</th>
        <th>Trajeto</th>
        <th>Plataforma</th>
      </tr>
  `;

  dados.forEach(item => {
    tabela += `
      <tr>
        <td>${item.hora}</td>
        <td>${item.trajeto}</td>
        <td>${item.plataforma}</td>
      </tr>
    `;
  });

  tabela += "</table>";
  resultado.innerHTML = tabela;
}



// ===================================
//  LEITURA EM VOZ
// ===================================
let leitura;

function lerHorarios() {
  const texto = document.getElementById("resultado").innerText;
  if (!texto) return;

  pararLeitura();
  leitura = new SpeechSynthesisUtterance(texto);
  leitura.lang = "pt-BR";
  speechSynthesis.speak(leitura);
}

function pararLeitura() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
}

// ===================================
//  RECONHECIMENTO DE VOZ
// ===================================
function reconhecerVoz() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Navegador não suporta reconhecimento de voz.");
    return;
  }

  const rec = new webkitSpeechRecognition();
  rec.lang = "pt-BR";

  rec.start();
  rec.onresult = (e) => {
    const fala = e.results[0][0].transcript.toLowerCase();

    if (fala.includes("popular")) document.getElementById("bairro").value = "Popular";
    else if (fala.includes("junqueira")) document.getElementById("bairro").value = "Junqueira";
    else if (fala.includes("pasetto")) document.getElementById("bairro").value = "Pasetto";
    else if (fala.includes("ribeiro")) document.getElementById("bairro").value = "Ribeiro";
    else if (fala.includes("rebouças")) document.getElementById("bairro").value = "Reboucas";
    else if (fala.includes("guaiçara")) document.getElementById("bairro").value = "Guaicara";
    else if (fala.includes("centro")) document.getElementById("bairro").value = "Centro";
    else alert("Bairro não reconhecido.");

    mostrarPontos();
  };
}
document.getElementById("direcao").addEventListener("change", () => {

  const direcao = document.getElementById("direcao").value;
  const bairroSelect = document.getElementById("bairro");

  bairroSelect.innerHTML = '<option value="">-- Selecione --</option>';

  if (direcao === "volta") {
    Object.keys(pontosBairroParaFrigorifico).forEach(bairro => {
      const opt = document.createElement("option");
      opt.value = bairro;
      opt.textContent = bairro;
      bairroSelect.appendChild(opt);
    });
  } else {
    bairroSelect.innerHTML += `
      <option value="Popular">Popular</option>
      <option value="Junqueira">Junqueira</option>
      <option value="Pasetto">Pasetto</option>
      <option value="Ribeiro">Ribeiro</option>
      <option value="Reboucas">Rebouças</option>
      <option value="Guaicara">Guaiçara</option>
      <option value="Centro">Centro</option>
    `;
  }
});


document.addEventListener("DOMContentLoaded", () => {

  const home = document.getElementById("home");
  const caixaHorarios = document.getElementById("caixahorarios");
  const resultado = document.getElementById("resultado");

  const btnHome = document.getElementById("btnHome");
  const btnVerHorarios = document.getElementById("btnVerHorarios");
  const btnContato = document.getElementById("btnContato");

  // Estado inicial
  home.style.display = "block";
  caixaHorarios.style.display = "none";
  resultado.innerHTML = "";

  // HOME
  btnHome.addEventListener("click", () => {
    home.style.display = "block";
    caixaHorarios.style.display = "none";
    resultado.innerHTML = "";
  });

  // VER HORÁRIOS
  btnVerHorarios.addEventListener("click", () => {
    home.style.display = "none";
    caixaHorarios.style.display = "block";
    caixaHorarios.scrollIntoView({ behavior: "smooth" });
  });

  // CONTATO RH
  btnContato.addEventListener("click", () => {
    home.style.display = "none";
    caixaHorarios.style.display = "none";
    resultado.innerHTML = "<p>📞 Em breve, informações de contato com o RH.</p>";
  });

});
