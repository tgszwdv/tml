
let indice = 0;
let videos;

if (JSON.parse(localStorage.getItem('indiceSalvo1')) > 0) {
  videos = JSON.parse(localStorage.getItem('notasSalvas1'));
  indice = JSON.parse(localStorage.getItem('indiceSalvo1'));
  //console.log('to no if')
   if (indice >= 39 ) {
    indice = 0;
    //console.log('to no segundo if')
   }

} else {
  //console.log('to no else')
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
{ link: "https://www.youtube.com/embed/a4g96HW1VuA?t=160", nome: "Liu", style: "Deephouse", nota: "" },
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
 videoInfo.textContent = `${videos[indice].nome} -${videos[indice].style}`;

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
  localStorage.setItem('notasSalvas1', JSON.stringify(videos));
  localStorage.setItem('indiceSalvo1', JSON.stringify(indice));
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    //
    indice = 0;
    JSON.parse(localStorage.getItem('indiceSalvo1')) = indice ;
    //
    return;
  }
  videoInfo.textContent = `${videos[indice].nome} -${videos[indice].style}`
  meuIframe.src = videos[indice].link;
  notaInput.value = '';
});

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
    indice = 0
    for (const video of videos) {
      video.nota = "";
    }
    atualizarTabela();
    localStorage.setItem('notasSalvas1', JSON.stringify(videos));
  });

function exportarTabela() {
    console.log('Exportando tabela...');
  
    const tabela = document.createElement('table');
    tabela.classList.add('tabela-export');
  
    // cabeçalho
    const cabecalho = tabela.createTHead();
    const rowCabecalho = cabecalho.insertRow(0);
    const colNome = rowCabecalho.insertCell(0);
    const colNota = rowCabecalho.insertCell(1);
    const colStyle = rowCabecalho.insertCell(2);
    colNome.innerHTML = '<strong>Nome</strong>';
    colNota.innerHTML = '<strong>Nota</strong>';
    colStyle.innerHTML = '<strong>Estilo</strong>';
    // alterando a cor do texto para branco
    colNome.style.color = '#FFFACD';
    colNota.style.color = '#FFFACD';
    colStyle.style.color = '#FFFACD';
  
    // conteúdo
    const corpoTabela = tabela.createTBody();
    for (const video of videos) {
      const tr = corpoTabela.insertRow();
      const colNome = tr.insertCell();
      const colNota = tr.insertCell();
      const colStyle = tr.insertCell();
      colNome.textContent = video.nome;
      colNota.textContent = video.nota;
      colStyle.textContent = video.style;
      // alterando a cor do texto para branco
      colNome.style.color = '#FFFACD';
      colNota.style.color = '#FFFACD';
      colStyle.style.color = '#FFFACD';
    }
  
    document.body.appendChild(tabela);
  
    html2canvas(tabela, {backgroundColor: '#000000'}).then(function(canvas) {
      const link = document.createElement('a');
      link.download = 'tabela.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
  
      document.body.removeChild(tabela);
    });
  }
  document.querySelector('#exportar').addEventListener('click', exportarTabela);
  
  




atualizarTabela();


/* /*
  { link: "https://www.youtube.com/embed/qrOCRqYjebI?t=415", nome: "Acraze", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/Evz8iIl5yrM?t=1607", nome: "Afrojack", style: "Pop/House/Progressive/Big Room", nota: "" },
  { link: "https://www.youtube.com/embed/1FHngx3GvJA?t=181", nome: "Aline Rocha", style: "Soulful & House", nota: "" },
  { link: "https://www.youtube.com/embed/j1ZZOuxtzrc?t=582", nome: "Alok", style: "DeepHouse/House/Brazilian Bass", nota: "" },
  { link: "https://www.youtube.com/embed/yrU-zBOGZPw?t=961", nome: "Amber Bross", style: "Trance/Liquid Trance", nota: "" },
  { link: "https://www.youtube.com/embed/EF9JTFq8ErY?t=2940", nome: "Anamê", style: "Trance/Liquid Trance", nota: "" },
  { link: "https://www.youtube.com/embed/n5y0nPPUAQc?t=2561", nome: "Andromedik", style: "Drum And Bass", nota: "" },
  { link: "https://www.youtube.com/embed/E-CdJFlKyNc?t=1865", nome: "Aura Vortex", style: "Psy Trance", nota: "" },
  { link: "https://www.youtube.com/embed/taJKkbv0jq0?t=1637", nome: "B Jones", style: "PopHouse/Trance", nota: "" },
  { link: "https://www.youtube.com/embed/U7JKifvBAbQ", nome: "Bakermat", style: "Dance/Pop/SoulHouse", nota: "" },
  { link: "https://www.youtube.com/embed/uVINeFCjgFg?t=1290", nome: "BassJackers", style: "Big Room/Progressive House/FutureHouse", nota: "" },
  { link: "https://www.youtube.com/embed/8Pl3j5xQFlU?t=869", nome: "BlastoyzA", style: "Psy Trance", nota: "" },
  { link: "https://www.youtube.com/embed/hgfJoV5Lmbw?t=596", nome: "Brennan Heart", style: "HardStyle", nota: "" },
  { link: "https://www.youtube.com/embed/i9StkfKg0SQ?t=1269", nome: "Brina Knauss", style: "Melodic House/Liquid/Electro", nota: "" },
  { link: "https://www.youtube.com/embed/E8Y-N9OT01U?t=1012", nome: "Bruno Be", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/Z9eDJndet_c?t=391", nome: "Bruno martini ", style: "House/Deephouse/Dance Pop", nota: "" },
  { link: "https://www.youtube.com/embed/9JTFHc6U8jc?t=503", nome: "Carola", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/UxsQ4_ZH870?t=6752", nome: "Cat Dealers", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/xOqULY4ZBT0?t=1200", nome: "Chapeleiro", style: "Psy Trance", nota: "" },
  { link: "https://www.youtube.com/embed/5hZzU7Jhr0I?t=1035", nome: "Chemical Surf", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/psHA5maXX_4?t=1464", nome: "Coone", style: "HardStyle", nota: "" },
  { link: "https://www.youtube.com/embed/U6YBRoq2zEU?t=2993", nome: "Da Tweekaz", style: "HardStyle", nota: "" },
  { link: "https://www.youtube.com/embed/nsNCK3EJpao?t=407", nome: "Dimitri vegas & Like mike", style: "Big Room/Trance/Techno", nota: "" },
  { link: "https://www.youtube.com/embed/4QfLqcvnwWg?t=816", nome: "Dino Lenny", style: "Techno/Underground", nota: "" },
  { link: "https://www.youtube.com/embed/xMQKQz6H2RA?t=1319", nome: "Dj Glen", style: "House Classics/DeepHouse", nota: "" },
  { link: "https://www.youtube.com/embed/WZCQlZsHkHo?t=1957", nome: "Dj Marky ", style: "Drum And Bass", nota: "" },
  { link: "https://www.youtube.com/embed/pLqipJNItIo?t=1366", nome: "Don Diablo", style: "EDM/Electro House/Future House", nota: "" },
  { link: "https://www.youtube.com/embed/mfcylo7DZfQ?t=1187", nome: "Doozie", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/8NwFL49cSjw?t=1437", nome: "Dubdogz", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/2hjOVynhTGA?t=2071", nome: "Fancy Inc", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/hf0YbhqY-Ew?t=4875", nome: "Fernanda Pistelli", style: "Psy Trance", nota: "" },
  { link: "https://www.youtube.com/embed/3wRtMN19JLM?t=2651", nome: "Freedom Fighters", style: "Psy Trance", nota: "" },
  { link: "https://www.youtube.com/embed/vK45BvHWcOU?t=862", nome: "Gui Boratto ", style: "Techno/House", nota: "" },
  { link: "https://www.youtube.com/embed/6WqatqyeBqk?t=1783", nome: "Inndrive", style: "Groove/Techno", nota: "" },
  { link: "https://www.youtube.com/embed/bkwfc7uR2yw?t=378", nome: "Jessica Audifrfred", style: "Dubstep", nota: "" },
  { link: "https://www.youtube.com/embed/dgz2eVXWWAM?t=857", nome: "John Newman", style: "House/Progressive House", nota: "" },
  { link: "https://www.youtube.com/embed/lXxtONrGqxk?t=842", nome: "Jord", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/6GHiYo3530o?t=4154", nome: "Liquid Soul", style: "Psy Trance", nota: "" },
  { link: "https://www.youtube.com/embed/w3yRKiJ9Vqk?t=491", nome: "Lost Frequencies", style: "Tropical House/DownTempo", nota: "" },
  { link: "https://www.youtube.com/embed/TC2HMhU2sr8?t=320", nome: "Malifoo", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/AhIElZvdRjY?t=1597", nome: "Mandy", style: "HardStyle", nota: "" },
  { link: "https://www.youtube.com/embed/GdMtN5Ifm-I?t=1163", nome: "Martin Garrix", style: "Progressive House/Big Room/Future Bass", nota: "" },
  { link: "https://www.youtube.com/embed/OsZ9Ik0G_KE?t=2322", nome: "Mattn", style: "House/Big Room", nota: "" },
  { link: "https://www.youtube.com/embed/rKmeiBDUWt8?t=1377", nome: "Nervo", style: "House/Psy/ElectroHouse/ProgressiveHouse", nota: "" },
  { link: "https://www.youtube.com/embed/t-YvpDRBnJk?t=761", nome: "Netsky", style: "Drum And Bass", nota: "" },
  { link: "https://www.youtube.com/embed/6GIA7hXhwNI?t=2260", nome: "Nightmre", style: "Dubstep", nota: "" },
  { link: "https://www.youtube.com/embed/0fKRazDggq8?t=4370", nome: "Ownboss", style: "Deephouse", nota: "" },
  { link: "https://www.youtube.com/embed/QKxGGpJNU1w?t=1695", nome: "Paul Kalbrenner", style: "Techno/Trance", nota: "" },
  { link: "https://www.youtube.com/embed/iA1aGTood8c?t=934", nome: "Pontifexx", style: "DeepHouse/House/", nota: "" },
  { link: "https://www.youtube.com/embed/MPt3z9ISwCs?t=2726", nome: "Pretty Pink", style: "Trance/Melodic Trance/AjunaDeeps", nota: "" },
  { link: "https://www.youtube.com/embed/Nm-I3ey4Wf4?t=1348", nome: "Scorz ", style: "Trance/Progressive Trance", nota: "" },
  { link: "https://www.youtube.com/embed/7DE0TAz5xbg?t=1480", nome: "Sebastian Ingrosso", style: "House/Dance/Progressive House", nota: "" },
  { link: "https://www.youtube.com/embed/DtLJ-is6koo?t=835", nome: "Seveenn", style: "Slap House/ Melodic House", nota: "" },
  { link: "https://www.youtube.com/embed/L3ZNg6zDAAo?t=2244", nome: "Steve Angelo", style: "EDM/Progressive House/Big Room/Future Bass", nota: "" },
  { link: "https://www.youtube.com/embed/ErSIEdbe1DU?t=2812", nome: "Steve Aoki", style: "EDM/Progressive House/Big Room/Future Bass", nota: "" },
  { link: "https://www.youtube.com/embed/iIQVr40Mnw4?t=787", nome: "Sub Zero Project", style: "Drum And Bass/Hardstyle", nota: "" },
  { link: "https://www.youtube.com/embed/PVKDEzGeGyw?t=1036", nome: "Sunnery James & Ryan Marciano", style: "House/Progressive House/ ElectroHouse", nota: "" },
  { link: "https://www.youtube.com/embed/7iP5zNyXtnw?t=2006", nome: "Tiesto", style: "Deephouse/Future House/Trance/Tropical House", nota: "" },
  { link: "https://www.youtube.com/embed/r5jKJBhk3aY?t=194", nome: "Vinne", style: "Deephouse/Brazilian Bass", nota: "" },
  { link: "https://www.youtube.com/embed/KgO7--NuCfs?t=1490", nome: "Yves V", style: "Indie/Progressive House/ElectroHouse", nota: "" },
  { link: "https://www.youtube.com/embed/Lb0SitkYgbo?t=1935", nome: "Zac", style: "House/Electro/DeepHouse", nota: "" }
  */
