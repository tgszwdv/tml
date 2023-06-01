let indice = 0;
let videos;

if (JSON.parse(localStorage.getItem('indiceSalvo')) > 0) {
  videos = JSON.parse(localStorage.getItem('notasSalvas'));
  indice = JSON.parse(localStorage.getItem('indiceSalvo'));
  if (indice >= 39) {
    indice = 0;
  }
} else {
  videos = [
{ link: "https://www.youtube.com/embed/qrOCRqYjebI?t=415", nome: "Acraze", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/Gy0RM9yjyhM?feature=share&t=1044", nome: "Âme ", style: "House/Techno", nota: "" },
{ link: "https://www.youtube.com/embed/yD9OGm-oQPI?t=2510", nome: "ANNA ", style: "Dance/EDM", nota: "" },
{ link: "https://www.youtube.com/embed/E-CdJFlKyNc?t=1865", nome: "Aura Vortex", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/taJKkbv0jq0?t=1637", nome: "B Jones", style: "PopHouse/Trance", nota: "" },
{ link: "https://www.youtube.com/embed/U7JKifvBAbQ", nome: "Bakermat", style: "Dance/Pop/SoulHouse", nota: "" },
{ link: "https://www.youtube.com/embed/Wqa5dhZmmJc?t=2802", nome: "Beltran", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/8Pl3j5xQFlU?t=869", nome: "Blastoyz", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/_Lum1rSjs6w?t=1160", nome: "Capoon ", style: "Underground/Organic", nota: "" },
{ link: "https://www.youtube.com/embed/9JTFHc6U8jc?t=503", nome: "Carola", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/UxsQ4_ZH870?t=6752", nome: "Cat Dealers", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/xOqULY4ZBT0?t=1200", nome: "Chapeleiro", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/5hZzU7Jhr0I?t=1035", nome: "Chemical Surf", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/psHA5maXX_4?t=1464", nome: "Coone", style: "HardStyle", nota: "" },
{ link: "https://www.youtube.com/embed/U6YBRoq2zEU?t=2993", nome: "Da Tweekaz", style: "HardStyle", nota: "" },
{ link: "https://www.youtube.com/embed/nsNCK3EJpao?t=407", nome: "Dimitri vegas & Like mike", style: "Big Room/Trance/Techno", nota: "" },
{ link: "https://www.youtube.com/embed/4QfLqcvnwWg?t=816", nome: "Dino Lenny", style: "Techno/Underground", nota: "" },
{ link: "https://www.youtube.com/embed/xMQKQz6H2RA?t=1319", nome: "Dj Glen", style: "House Classics/DeepHouse", nota: "" },
{ link: "https://www.youtube.com/embed/mfcylo7DZfQ?t=1187", nome: "Doozie", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/hf0YbhqY-Ew?t=4875", nome: "Fernanda Pistelli", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/3wRtMN19JLM?t=2651", nome: "Freedom Fighters", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/yi6d1kWsHSM?t=1272", nome: "Gabe ", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/cCOJdwxpme8", nome: "Gordo ", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/lXxtONrGqxk?t=842", nome: "Jørd ", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/MiLq2gm8s98?t=806", nome: "Korolova ", style: "Melodic Trance", nota: "" },
{ link: "https://www.youtube.com/embed/uuGScjfEGqw?t=1960", nome: "KVSH ", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/w8xQnshEIKg?t=907", nome: "Layla Benitez ", style: "Indie/Dance", nota: "" },
{ link: "https://www.youtube.com/embed/6GHiYo3530o?t=4154", nome: "Liquid Soul", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/w3yRKiJVqk?t=491", nome: "Liu", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/w3yRKiJ9Vqk?t=491", nome: "Lost Frequencies", style: "Tropical House/DownTempo", nota: "" },
{ link: "https://www.youtube.com/embed/AhIElZvdRjY?t=1597", nome: "Mandy", style: "HardStyle", nota: "" },
{ link: "https://www.youtube.com/embed/TPYF8Ni8EMI?t=869", nome: "MC STRETCH ", style: "Hard Trance", nota: "" },
{ link: "https://www.youtube.com/embed/4y9BzMAE3FY?t=346", nome: "Meca ", style: "Melodic/Deep House", nota: "" },
{ link: "https://www.youtube.com/embed/rKmeiBDUWt8?t=1377", nome: "Nervo", style: "House/Psy/ElectroHouse/ProgressiveHouse", nota: "" },
{ link: "https://www.youtube.com/embed/0fKRazDggq8?t=4370", nome: "Ownboss", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/MPt3z9ISwCs?t=2726", nome: "Pretty Pink", style: "Trance/Melodic Trance/AjunaDeeps", nota: "" },
{ link: "https://www.youtube.com/embed/7DE0TAz5xbg?t=1480", nome: "Sebastian Ingrosso", style: "House/Dance/Progressive House", nota: "" },
{ link: "https://www.youtube.com/embed/ErSIEdbe1DU?t=2812", nome: "Steve Aoki", style: "EDM/Progressive House/Big Room/Future Bass", nota: "" },
{ link: "https://www.youtube.com/embed/iIQVr40Mnw4?t=787", nome: "Sub Zero Project", style: "Drum And Bass/Hardstyle", nota: "" },
{ link: "https://www.youtube.com/embed/7iP5zNyXtnw?t=2006", nome: "Vintage Culture", style: "Deephouse/Future House/Trance/Tropical House", nota: "" }
  ];
}

const meuIframe = document.querySelector('#meu-iframe');
meuIframe.src = videos[indice].link;

const tabelaNotas = document.querySelector('#tabela-notas');
const videoInfo = document.getElementById('video-info');
videoInfo.textContent = `${videos[indice].nome} - ${videos[indice].style}`;

document.querySelector('#proximo').addEventListener('click', () => {
  const notaInput = document.querySelector('#nota');
  const nota = notaInput.value;
  if (nota < 0 || nota > 10) {
    alert('A nota deve estar entre 0 e 10.');
    return;
  }
  videos[indice].nota = nota;
  atualizarTabela();
  indice++;
  localStorage.setItem('notasSalvas', JSON.stringify(videos));
  localStorage.setItem('indiceSalvo', JSON.stringify(indice));
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    indice = 0;
    JSON.parse(localStorage.getItem('indiceSalvo')) = indice;
    return;
  }
  videoInfo.textContent = `${videos[indice].nome} - ${videos[indice].style}`;
  meuIframe.src = videos[indice].link;
  notaInput.value = '';
});

// Função para atualizar a tabela de notas
function atualizarTabela() {
  videos.sort((a, b) => b.nota - a.nota);
  tabelaNotas.innerHTML = '';
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    document.getElementById("nota").focus();
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${video.nome}</td>
      <td>${video.nota}</td>
      <td>${video.style}</td>
    `;
    const btn = document.createElement('button2');
    btn.textContent = 'Editar';
    btn.addEventListener('click', () => {
      const novaNota = prompt('Insira a nova nota para o vídeo:');
      if (novaNota !== null && !isNaN(novaNota)) {
        video.nota = Number(novaNota);
        atualizarTabela();
      }
    });

    tr.addEventListener('click', () => {
      indice = i;
      meuIframe.src = videos[indice].link;
      videoInfo.textContent = `${videos[indice].nome} - ${videos[indice].style}`;
    });

    tr.insertCell().appendChild(btn);
    tabelaNotas.appendChild(tr);
  }
}


document.querySelector('#resetar').addEventListener('click', () => {
  indice = 0;
  for (const video of videos) {
    video.nota = "";
  }
  atualizarTabela();
  localStorage.setItem('notasSalvas', JSON.stringify(videos));
});

// Função para atualizar o vídeo no iframe com base no índice
function atualizarVideo() {
  meuIframe.src = videos[indice].link;
}

// Adiciona um event listener às linhas da tabela
tabelaNotas.addEventListener('click', (event) => {
  // Verifica se o elemento clicado é uma linha (tr)
  if (event.target.tagName === 'TR') {
    // Obtém o índice da linha clicada
    const index = Array.from(tabelaNotas.children).indexOf(event.target);
    
    // Verifica se o índice é válido
    if (index >= 0 && index < videos.length) {
      indice = index; // Atualiza o índice com o valor da linha clicada
      atualizarVideo(); // Atualiza o vídeo no iframe com base no índice
      videoInfo.textContent = `${videos[indice].nome} - ${videos[indice].style}`;
    }
  }
});

// Inicializa a tabela de notas
atualizarTabela();
