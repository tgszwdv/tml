// Constantes e configurações
const VIDEO_STORAGE_KEY = "sextaNotas";
const INDEX_STORAGE_KEY = "indiceSexta";
const MAX_INDEX = 45;

// Elementos do DOM
const elements = {
  iframe: document.querySelector("#meu-iframe"),
  tabelaDesktop: document.querySelector("#tabela-notas-desktop"),
  tabelaMobile: document.querySelector("#tabela-notas-mobile"),
  videoInfo: document.getElementById("video-info"),
  proximoBtn: document.querySelector("#proximo"),
  resetarBtn: document.querySelector("#resetar"),
  exportarBtn: document.querySelector("#exportar"),
  notaInput: document.querySelector("#nota"),
  headers: {
    nome: document.getElementById("headerNome"),
    nota: document.getElementById("headerNota"),
    palco: document.getElementById("headerPalco"),
    horario: document.getElementById("headerHorario"),
    style: document.getElementById("headerStyle"),
  },
};

// Estado da aplicação
let state = {
  indice: 0,
  videos: getInitialVideos(),
};

// Funções de estado
function getInitialVideos() {
  return [
    {
      link: "https://www.youtube.com/embed/pg5foEhBW2c",
      nome: "Beltran",
      style: "Deephouse",
      palco: "Essence by Beck's",
      horario: "14:00 - 15:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/rPRSIizQ6t0",
      nome: "Due",
      style: "House",
      palco: "CORE",
      horario: "14:00 - 15:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/2SMxKLTJAy4",
      nome: "Jessica Brankka",
      style: "House/Techno",
      palco: "Mainstage",
      horario: "14:00 - 15:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/ihkNRJD7Nng",
      nome: "Doozie",
      style: "Deephouse",
      palco: "Youphoria",
      horario: "15:00 - 16:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/hf0YbhqY-Ew?t=4875",
      nome: "Fernanda Pistelli",
      style: "Psy Trance",
      palco: "Tulip",
      horario: "15:00 - 16:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/BHwvMQeQVME",
      nome: "KVSH ",
      style: "Deephouse",
      palco: "Mainstage",
      horario: "15:30 - 16:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/yi6d1kWsHSM?t=1272",
      nome: "Gabe ",
      style: "Deephouse",
      palco: "Essence by Beck's",
      horario: "15:30 - 17:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/IygyK03E1bY",
      nome: "Mila Journée",
      style: "Melodic/Deep House",
      palco: "CORE",
      horario: "15:30 - 17:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/E-CdJFlKyNc?t=1865",
      nome: "Aura Vortex",
      style: "Psy Trance",
      palco: "Tulip",
      horario: "16:00 - 17:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/ZPhcmTsh1FQ",
      nome: "Dj Glen",
      style: "House Classics/DeepHouse",
      palco: "Youphoria",
      horario: "16:00 - 17:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/o8UEQXwfXIQ",
      nome: "Carola",
      style: "Deephouse",
      palco: "Mainstage",
      horario: "16:30 - 17:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/3wRtMN19JLM?t=2651",
      nome: "Freedom Fighters",
      style: "Psy Trance",
      palco: "Tulip",
      horario: "17:00 - 18:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/UT_66xW3lck",
      nome: "Jørd ",
      style: "Deephouse",
      palco: "Youphoria",
      horario: "17:00 - 18:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/_Lum1rSjs6w?t=1160",
      nome: "Capoon ",
      style: "Underground/Organic",
      palco: "CORE",
      horario: "17:00 - 18:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/n6ei2S1t6tI",
      nome: "Layla Benitez ",
      style: "Indie/Dance",
      palco: "Essence by Beck's",
      horario: "17:00 - 18:30",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/sK54sgHQBDc",
      nome: "Cat Dealers",
      style: "Deephouse",
      palco: "Mainstage",
      horario: "17:35 - 18:35",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/6GHiYo3530o?t=4154",
      nome: "Liquid Soul",
      style: "Psy Trance",
      palco: "Tulip",
      horario: "18:00 - 19:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/4y9BzMAE3FY?t=346",
      nome: "Meca ",
      style: "Melodic/Deep House",
      palco: "Youphoria",
      horario: "18:00 - 19:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/4r-M7lqUSKo",
      nome: "Dino Lenny",
      style: "Techno/Underground",
      palco: "CORE",
      horario: "18:30 - 20:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/0XgH-zAGvwA",
      nome: "Francis Mercier",
      style: "Dance",
      palco: "Essence by Beck's",
      horario: "18:30 - 20:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/U0rD-PMKAt4",
      nome: "B Jones",
      style: "Deephouse",
      palco: "Mainstage",
      horario: "18:40 - 19:40",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/CVKBlYp62M8",
      nome: "Chapeleiro",
      style: "Psy Trance",
      palco: "Tulip",
      horario: "19:00 - 20:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/P9mnmm-zxcI",
      nome: "Liu",
      style: "Deephouse",
      palco: "Youphoria",
      horario: "19:00 - 20:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/r9O_lNCx5EA",
      nome: "Nervo",
      style: "House/Psy/ElectroHouse/ProgressiveHouse",
      palco: "Mainstage",
      horario: "19:40 - 20:40",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/tyoSiO9Iccw",
      nome: "Blastoyz",
      style: "Psy Trance",
      palco: "Tulip",
      horario: "20:00 - 21:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/5hZzU7Jhr0I?t=1035",
      nome: "Chemical Surf",
      style: "Deephouse",
      palco: "Youphoria",
      horario: "20:00 - 21:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/6dB0n_mLqJA",
      nome: "Jaguar",
      style: "House",
      palco: "CORE",
      horario: "20:00 - 22:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/9ynMx2qAYAE",
      nome: "Korolova ",
      style: "Melodic Trance",
      palco: "Essence by Beck's",
      horario: "20:00 - 22:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/0Settohf92Q",
      nome: "ANNA ",
      style: "Dance/EDM",
      palco: "Mainstage",
      horario: "20:40 - 21:40",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/psHA5maXX_4?t=1464",
      nome: "Coone",
      style: "HardStyle",
      palco: "Tulip",
      horario: "21:00 - 22:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/MPt3z9ISwCs?t=2726",
      nome: "Pretty Pink",
      style: "Trance/Melodic Trance/AjunaDeeps",
      palco: "Youphoria",
      horario: "21:00 - 22:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/aAnHOnEF_PI",
      nome: "Vintage Culture",
      style: "Deephouse/Future House/Trance/Tropical House",
      palco: "Mainstage",
      horario: "21:45 - 22:45",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/cCOJdwxpme8",
      nome: "Gordo ",
      style: "Deephouse",
      palco: "Essence by Beck's",
      horario: "22:00 - 00:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/NgetGgcdEd4",
      nome: "Skepta",
      style: "raper ? Wtf tml",
      palco: "CORE",
      horario: "22:00 - 00:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/rMzSGJLYkCM",
      nome: "Mandy",
      style: "HardStyle",
      palco: "Tulip",
      horario: "22:00 - 23:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/z0yYfuTqxn4",
      nome: "Ownboss",
      style: "Deephouse",
      palco: "Youphoria",
      horario: "22:00 - 23:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/7DE0TAz5xbg?t=1480",
      nome: "Sebastian Ingrosso",
      style: "House/Dance/Progressive House",
      palco: "Mainstage",
      horario: "22:50 - 23:50",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/U7JKifvBAbQ",
      nome: "Bakermat",
      style: "Dance/Pop/SoulHouse",
      palco: "Youphoria",
      horario: "23:00 - 00:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/jO7_r2nf__k",
      nome: "Da Tweekaz",
      style: "HardStyle",
      palco: "Tulip",
      horario: "23:00 - 00:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/A4lTUgJWNIw",
      nome: "Dimitri vegas & Like mike",
      style: "Big Room/Trance/Techno",
      palco: "Mainstage",
      horario: "23:50 - 00:50",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/IajHfZrqS4w",
      nome: "Lost Frequencies",
      style: "Tropical House/DownTempo",
      palco: "Youphoria",
      horario: "00:00 - 01:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/iIQVr40Mnw4",
      nome: "Sub Zero Project",
      style: "Drum And Bass/Hardstyle",
      palco: "Tulip",
      horario: "00:00 - 01:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/Gy0RM9yjyhM",
      nome: "Âme",
      style: "House/Techno",
      palco: "CORE",
      horario: "00:00 - 02:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/emEARENszec",
      nome: "Purple Disco Machine",
      style: "Nu-disco/House",
      palco: "Essence by Beck's",
      horario: "00:00 - 02:00",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/5LlAC5FN59Y",
      nome: "Steve Aoki",
      style: "EDM/Progressive House/Big Room/Future Bass",
      palco: "Mainstage",
      horario: "00:50 - 01:50",
      nota: "",
    },
    {
      link: "https://www.youtube.com/embed/geU67GxTIFg",
      nome: "Acraze",
      style: "Deephouse",
      palco: "Youphoria",
      horario: "01:00 - 02:00",
      nota: "",
    },
  ];
}

// Inicialização
function init() {
  try {
    loadState();
    updateVideoDisplay();
    setupEventListeners();
    updateTable();
    setupSharing();
  } catch (error) {
    console.error("Erro na inicialização:", error);
    alert(
      "Ocorreu um erro ao inicializar a aplicação. Por favor, recarregue a página."
    );
  }
}

function loadState() {
  try {
    const savedIndex = parseInt(localStorage.getItem(INDEX_STORAGE_KEY)) || 0;
    const savedVideos =
      JSON.parse(localStorage.getItem(VIDEO_STORAGE_KEY)) || getInitialVideos();

    state.indice = savedIndex >= MAX_INDEX ? 0 : savedIndex;
    state.videos =
      Array.isArray(savedVideos) && savedVideos.length
        ? savedVideos
        : getInitialVideos();
  } catch (error) {
    console.error("Erro ao carregar estado:", error);
    state.indice = 0;
    state.videos = getInitialVideos();
  }
}

function saveState() {
  try {
    localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(state.videos));
    localStorage.setItem(INDEX_STORAGE_KEY, JSON.stringify(state.indice));
  } catch (error) {
    console.error("Erro ao salvar estado:", error);
  }
}

// Funções de exibição
function updateVideoDisplay() {
  try {
    if (!state.videos || !state.videos.length) {
      console.error("Nenhum vídeo disponível");
      return;
    }

    // Garantir que o índice está dentro dos limites
    if (state.indice >= state.videos.length) {
      state.indice = 0;
    }

    const currentVideo = state.videos[state.indice];
    if (!currentVideo) {
      console.error("Índice de vídeo inválido:", state.indice);
      return;
    }

    if (elements.iframe) {
      elements.iframe.src = currentVideo.link || "";
    }

    if (elements.videoInfo) {
      elements.videoInfo.textContent =
        currentVideo.nome && currentVideo.style
          ? `${currentVideo.nome} - ${currentVideo.style}`
          : "Informações do vídeo não disponíveis";
    }

    if (elements.notaInput) {
      elements.notaInput.value = "";
      elements.notaInput.focus();
    }
  } catch (error) {
    console.error("Erro ao atualizar exibição do vídeo:", error);
  }
}

function createTableRow(video, index) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td class="p-2">${video.nome || ""}</td>
          <td class="p-2">${video.nota || ""}</td>
          <td class="p-2">${video.style || ""}</td>
          <td class="p-2">${video.palco || ""}</td>
          <td class="p-2">${video.horario || ""}</td>
        `;

  const editBtn = createEditButton(video);
  const td = document.createElement("td");
  td.className = "p-2";
  td.appendChild(editBtn);
  tr.appendChild(td);

  tr.addEventListener("click", () => navigateToVideo(index));

  return tr;
}

function createMobileCard(video, index) {
  const card = document.createElement("div");
  card.className = "card-item";
  card.innerHTML = `
          <div class="card-label">Nome:</div>
          <div class="card-value">${video.nome || ""}</div>
          <div class="card-label">Nota:</div>
          <div class="card-value">${video.nota || ""}</div>
          <div class="card-label">Gênero:</div>
          <div class="card-value">${video.style || ""}</div>
          <div class="card-label">Palco:</div>
          <div class="card-value">${video.palco || ""}</div>
          <div class="card-label">Horário:</div>
          <div class="card-value">${video.horario || ""}</div>
        `;

  const editBtn = createEditButton(video);
  editBtn.classList.add("col-span-2", "mx-auto", "mt-2");
  card.appendChild(editBtn);

  card.addEventListener("click", () => navigateToVideo(index));

  return card;
}

function createEditButton(video) {
  const btn = document.createElement("button");
  btn.textContent = "Editar";
  btn.className =
    "bg-cyan-400/20 hover:bg-cyan-300/20 text-white border border-cyan-300 px-2 py-1 rounded text-xs";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    editVideoNote(video);
  });

  return btn;
}

function editVideoNote(video) {
  const modal = document.getElementById("edit-modal");
  const input = document.getElementById("edit-nota-input");
  const cancelBtn = document.getElementById("edit-cancel");
  const confirmBtn = document.getElementById("edit-confirm");

  // Preenche o input com a nota atual (se existir)
  input.value = video.nota || "";

  // Mostra o modal
  modal.classList.remove("hidden");

  // Foca no input
  input.focus();

  // Configura os event listeners
  const cleanUp = () => {
    cancelBtn.removeEventListener("click", onCancel);
    confirmBtn.removeEventListener("click", onConfirm);
    input.removeEventListener("keydown", onKeyDown);
    input.removeEventListener("change", validateInput);
  };

  const validateInput = () => {
    let value = parseFloat(input.value);
    if (input.value === "" || isNaN(value)) {
      showNotification("Atenção", "Por favor, insira uma nota válida.");
      return false;
    }
    if (value < 0) input.value = 0;
    if (value > 10) input.value = 10;
    return true;
  };

  const onConfirm = () => {
    if (input.value === "" || isNaN(parseFloat(input.value))) {
      showNotification("Atenção", "Por favor, insira uma nota válida.");
      return;
    }

    if (!validateInput()) return;

    const novaNota = parseFloat(input.value);
    video.nota = novaNota;
    updateTable();
    saveState();
    modal.classList.add("hidden");
    cleanUp();
  };

  const onCancel = () => {
    modal.classList.add("hidden");
    cleanUp();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onConfirm();
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  input.addEventListener("change", validateInput);
  cancelBtn.addEventListener("click", onCancel);
  confirmBtn.addEventListener("click", onConfirm);
  input.addEventListener("keydown", onKeyDown);
}
function updateTable() {
  try {
    // Limpar tabelas
    if (elements.tabelaDesktop) elements.tabelaDesktop.innerHTML = "";
    if (elements.tabelaMobile) elements.tabelaMobile.innerHTML = "";

    // Preencher tabelas
    state.videos.forEach((video, index) => {
      if (elements.tabelaDesktop) {
        elements.tabelaDesktop.appendChild(createTableRow(video, index));
      }
      if (elements.tabelaMobile) {
        elements.tabelaMobile.appendChild(createMobileCard(video, index));
      }
    });
  } catch (error) {
    console.error("Erro ao atualizar tabela:", error);
  }
}

// Navegação
function navigateToVideo(index) {
  try {
    if (index >= 0 && index < state.videos.length) {
      state.indice = index;
      updateVideoDisplay();
    }
  } catch (error) {
    console.error("Erro ao navegar para vídeo:", error);
  }
}

function nextVideo() {
  try {
    const nota = parseFloat(elements.notaInput.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
      showNotification(
        "Atenção",
        "Por favor, insira uma nota válida entre 0 e 10."
      );
      return;
    }

    // Atualizar nota do vídeo atual
    state.videos[state.indice].nota = nota;

    // Avançar para o próximo vídeo
    state.indice++;

    if (state.indice >= state.videos.length) {
      showNotification("Parabéns", "Você avaliou todos os vídeos!");
      state.indice = 0;
    }

    saveState();
    updateVideoDisplay();
    updateTable();
  } catch (error) {
    console.error("Erro ao avançar para próximo vídeo:", error);
    showNotification(
      "Erro",
      "Ocorreu um erro ao processar. Por favor, tente novamente."
    );
  }
}

async function resetApp() {
  const confirmed = await showConfirm(
    "Confirmação",
    "Tem certeza que deseja resetar todas as notas?"
  );
  if (confirmed) {
    try {
      state.indice = 0;
      state.videos.forEach((video) => (video.nota = ""));
      saveState();
      updateTable();
      updateVideoDisplay();
      showNotification("Sucesso", "Todas as notas foram resetadas.");
    } catch (error) {
      console.error("Erro ao resetar aplicação:", error);
      showNotification("Erro", "Ocorreu um erro ao resetar as notas.");
    }
  }
}

// Exportação
function exportTable() {
  try {
    const tabela = document.createElement("table");
    tabela.classList.add("tabela-export");

    // Cabeçalho
    const cabecalho = tabela.createTHead();
    const rowCabecalho = cabecalho.insertRow(0);
    const headers = ["Nome", "Nota", "Estilo", "Palco", "Horario"];

    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.innerHTML = `<strong>${headerText}</strong>`;
      rowCabecalho.appendChild(th);
    });

    // Conteúdo
    const corpoTabela = tabela.createTBody();
    state.videos.forEach((video) => {
      const tr = corpoTabela.insertRow();
      [video.nome, video.nota, video.style, video.palco, video.horario].forEach(
        (value) => {
          const td = tr.insertCell();
          td.textContent = value !== undefined && value !== null ? value : "";
        }
      );
    });

    document.body.appendChild(tabela);

    html2canvas(tabela, {
      backgroundColor: "#000000",
      scale: 2, // Melhora a qualidade da imagem exportada
    })
      .then(function (canvas) {
        const link = document.createElement("a");
        link.download = `avaliacoes_tml_${new Date()
          .toISOString()
          .slice(0, 10)}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        document.body.removeChild(tabela);
      })
      .catch((error) => {
        console.error("Erro ao exportar tabela:", error);
        alert("Erro ao exportar tabela. Por favor, tente novamente.");
      });
  } catch (error) {
    console.error("Erro na exportação:", error);
  }
}

// Ordenação
function setupSorting() {
  if (elements.headers.nota) {
    elements.headers.nota.addEventListener("click", () => {
      state.videos.sort((a, b) => (b.nota || 0) - (a.nota || 0));
      updateTable();
    });
  }

  if (elements.headers.palco) {
    elements.headers.palco.addEventListener("click", () => {
      state.videos.sort((a, b) => (a.palco || "").localeCompare(b.palco || ""));
      updateTable();
    });
  }

  if (elements.headers.horario) {
    elements.headers.horario.addEventListener("click", () => {
      window.location.reload();
    });
  }

  if (elements.headers.style) {
    elements.headers.style.addEventListener("click", () => {
      state.videos.sort((a, b) => (a.style || "").localeCompare(b.style || ""));
      updateTable();
    });
  }

  if (elements.headers.nome) {
    elements.headers.nome.addEventListener("click", () => {
      state.videos.sort((a, b) => (a.nome || "").localeCompare(b.nome || ""));
      updateTable();
    });
  }
}

// Configuração de eventos
function setupEventListeners() {
  if (elements.proximoBtn) {
    elements.proximoBtn.addEventListener("click", nextVideo);
  }

  if (elements.resetarBtn) {
    elements.resetarBtn.addEventListener("click", resetApp);
  }

  if (elements.exportarBtn) {
    elements.exportarBtn.addEventListener("click", exportTable);
  }

  setupSorting();
}

function showNotification(title, message, duration = 3000) {
  // Fecha qualquer notificação existente primeiro
  const existingModals = document.querySelectorAll(
    "#notification-modal:not(.hidden)"
  );
  existingModals.forEach((modal) => modal.classList.add("hidden"));

  const modal = document.getElementById("notification-modal");
  const modalTitle = document.getElementById("notification-title");
  const modalMessage = document.getElementById("notification-message");
  const confirmBtn = document.getElementById("notification-confirm");

  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.classList.remove("hidden");

  confirmBtn.onclick = () => {
    modal.classList.add("hidden");
  };

  setTimeout(() => {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  }, duration);
}
function setupEventListeners() {
  if (elements.proximoBtn) {
    elements.proximoBtn.addEventListener("click", nextVideo);
  }

  if (elements.resetarBtn) {
    elements.resetarBtn.addEventListener("click", resetApp);
  }

  if (elements.exportarBtn) {
    elements.exportarBtn.addEventListener("click", exportTable);
  }

  // Adicione este novo listener para o campo de nota
  if (elements.notaInput) {
    elements.notaInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        nextVideo();
      }
    });
  }

  setupSorting();
}

function showConfirm(title, message) {
  return new Promise((resolve) => {
    const modal = document.getElementById("confirm-modal");
    const modalMessage = document.getElementById("confirm-message");
    const cancelBtn = document.getElementById("confirm-cancel");
    const okBtn = document.getElementById("confirm-ok");

    modalMessage.textContent = message;
    modal.classList.remove("hidden");

    cancelBtn.onclick = () => {
      modal.classList.add("hidden");
      resolve(false);
    };

    okBtn.onclick = () => {
      modal.classList.add("hidden");
      resolve(true);
    };
  });
}

function setupSharing() {
  const shareBtn = document.getElementById("compartilhar");
  const shareModal = document.getElementById("share-modal");
  const shareCloseBtn = document.getElementById("share-close");

  if (shareBtn && shareModal) {
    shareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      shareModal.classList.remove("hidden");
    });

    if (shareCloseBtn) {
      shareCloseBtn.addEventListener("click", () => {
        shareModal.classList.add("hidden");
      });
    }

    // Fechar modal quando clicar fora
    shareModal.addEventListener("click", (e) => {
      if (e.target === shareModal) {
        shareModal.classList.add("hidden");
      }
    });

    // Configurar ações de compartilhamento
    setupSocialSharing();
  }
}
function setupSocialSharing() {
  const currentVideo = state.videos[state.indice];
  const shareText = `Estou avaliando ${currentVideo.nome} no Tomorrowland! Dê uma olhada:`;
  const shareUrl = window.location.href;

  // WhatsApp
  const whatsappBtn = document.getElementById("share-whatsapp");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
        "_blank"
      );
    });
  }

  // Twitter
  const twitterBtn = document.getElementById("share-twitter");
  if (twitterBtn) {
    twitterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}`,
        "_blank"
      );
    });
  }

  // Facebook
  const facebookBtn = document.getElementById("share-facebook");
  if (facebookBtn) {
    facebookBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareText)}`,
        "_blank"
      );
    });
  }

  // Copiar link
  const copyLinkBtn = document.getElementById("copy-link");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(shareUrl);
        showNotification(
          "Sucesso",
          "Link copiado para a área de transferência!"
        );
        document.getElementById("share-modal").classList.add("hidden");
      } catch (err) {
        console.error("Falha ao copiar link:", err);
        showNotification("Erro", "Não foi possível copiar o link.");
      }
    });
  }
}
// Inicializar aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);
