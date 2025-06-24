const scenes = {
  2: {
    text: "AM es un ser violento y sin amor por tu grupo, eso ya lo sabés de sobra. Te mantiene vivo pero te detesta. No sos más que un simple juguete. Pasás las horas entre desafíos que la máquina inventa para salirse de su aburrimiento.",
    img: "assets/images/escape.jpg",
    options: [
      { text: "2.1	Seguir hasta el Valle de Obsolescencia", next: "3" },
      { text: "2.2 Desafiar al resto del grupo y separarte.", next: "2.3" }
    ]
  },
  2.3: {
    text: "2.3 AM se aparece ante vos en sueños y te despertás en el campamento del grupo, sin saber como llegaste ahí.",
    img: "assets/images/escape.jpg",
    options: [
      { text: "2.1	Seguir hasta el Valle de Obsolescencia", next: "3" },
    ]
  },
  3: {
    text: "3. Benny intenta escapar.",
    img: "assets/images/tunel.jpg",
    options: [
      { text: "3a Dejarlo ir para evitar las consecuencias.", next: "3.1" },
      { text: "3b Ayudar a Ellen para evitar que Benny escape. ", next: "3.2" }
    ]
  },
  3.1: {
    text: "3.1 AM ataca a Benny. Queda en el piso convulsionando.",
    img: "assets/images/escondite.jpg",
    options: [
      { text: "Continuar", next: "3.3" },
    ]
  },
  3.2: {
    text: "3.2 Benny te golpea con su fuerza extra humana y te fractura la mandíbula. El dolor es brutal. Ellen te mira con ternura.",
    img: "assets/images/salida.jpg",
    options: [
      { text: "Continuar", next: "3.1" },
    ]
  },
  3.3: {
    text: "3.3 AM provee de hierba para hacer un débil fuego. Se cuenta el origen de la máquina.",
    img: "assets/images/captura.jpg",
    options: [
      { text: "Continuar", next: "4" },
    ]
  },
  4: {
    text: "4. AM Lanza un ataque psicológico sobre el grupo. Huelen y sienten un ser gigante que se acerca.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "4a	Salís corriendo buscando refugio.", next: "4.1" },
      { text: "4b Quedarte con el grupo a enfrentar el monstruo.", next: "4.2" }
    ]
  },
  4.1: {
    text: "4.1 Era un engaño psicológico. Te escapaste gritando como un maniático. El resto se desentiende.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar.", next: "4.3" },
    ]
  },
  4.2: {
    text: "4.2 El grupo se mantiene unido y firme ante la amenaza. Parece que solo eran ruidos y olores. El grupo se fortalece.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar", next: "4.4" },
    ]
  },
  4.3: {
    text: "4.3 Te echas a llorar desconsoladamente. Pedís morir.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar", next: "4.4" },
    ]
  },
  4.4: {
    text: "4.4 Un huracán azota al grupo. Intentan aferrarse a lo que pueden. Te encontrás con AM en tu mente.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar", next: "5" },
    ]
  },
  5: {
    text: "5. El grupo se encuentra con un ser mitológico alado. AM dice que para comer necesitan vencerlo",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "5a Pedirle a AM armas para poder vencer.", next: "6" },
      { text: "5b Intentar atacar al monstruo sin armas.", next: "5.1" },
    ]
  },
  5.1: {
    text: "5.1 El grupo intenta disuadirte de no hacerlo.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar.", next: "5.2" },
    ]
  },
  5.2: {
    text: "5.2 Explicás que esto no va a tener final. Que necesitan trabajar en equipo y encontrar una solución.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "5.3 Ves que las estalactitas en el piso pueden servir como arma e intentas atacar con ellas.", next: "5.5" },
      { text: "5.4 El resto se subleva y te convence de no atacar a la bestia y huir", next: "5.6" },
    ]
  },
  6: {
    text: "6 Aparece frente a vos una pistola de agua y un arco sin hilo.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar", next: "6.1" },
    ]
  },
  6.1: {
    text: "6.1 Comienza un terremoto. Ellen y Nimdok caen. el resto sigue hacia la bestia, sabiendo que AM los traera de vuelta con ellos de alguna manera",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar", next: "6.2" },
    ]
  },
  6.2: {
    text: "6.2 Llegan a una cueva helada bajo la bestia, hay latas de comida pero no hay manera de abrirlas",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "Continuar", next: "7" },
    ]
  },
  7: {
    text: "7 Benny ataca a Gorrister. Caen estalactitas de hielo. Te das cuenta que podes liberarlos de una sola forma.",
    img: "assets/images/descubierto.jpg",
    options: [
      { text: "7a Tomás una de la estalactitas y decidís matar al resto del grupo.", next: "8.1" },
      { text: "7b Tomás una de las estalactitas y decidís terminar tu propia existencia.", next: "8.2" },
    ]
  },
  8.1: {
    text: "8.1 FINAL VERDADERO No tengo boca y debo gritar.",
    img: "assets/images/descubierto.jpg"
  },
  8.2: {
    text: "8.2 FINAL EGOISTA Logras terminar con tu vida, pero a la vez, condenas al resto del grupo, siendo estos, transformados en una unica amalgama inmortal",
    img: "assets/images/descubierto.jpg"
  },
  5.5: {
    text: "5.5 FINAL ¿?",
    img: "assets/images/descubierto.jpg"
  },
  5.6: {
    text: "5.6 FINAL  NEUTRO Nada cambia, siguen en el mismo infierno, gracias a vuestra cobardia",
    img: "assets/images/descubierto.jpg"
  },
  am_control_total: {
    text: "AM ha corrompido tu voluntad. Ahora sos parte de su red. Felicidades.",
    img: "assets/images/am_control.jpg"
  }
};

// Variables de estado
let obeyCount = 0;

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
  // Configuración de audio
  const music = document.getElementById("music");
  const muteBtn = document.getElementById("mute-btn");
  music.volume = 0.4;
  
  const playMusic = () => {
    music.play().catch(e => console.warn("Audio bloqueado:", e));
  };
  
  // Intenta reproducir al cargar (requiere interacción del usuario en algunos navegadores)
  document.body.addEventListener('click', playMusic, { once: true });

  // Botón de mute
  muteBtn.addEventListener('click', () => {
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "🔇" : "🔊";
  });

  // Efecto de ruido estático
  const canvas = document.getElementById("noise");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function generateNoise() {
    const pixels = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const v = Math.random() > 0.9 ? 255 : 0;
      pixels.data[i] = v;     // R
      pixels.data[i+1] = v;   // G
      pixels.data[i+2] = v;   // B
      pixels.data[i+3] = 255; // Alpha
    }
    ctx.putImageData(pixels, 0, 0);
  }
  setInterval(generateNoise, 100);
});

// Navegación entre escenas
function nextScene(key) {
  // Contador de decisiones "obedecer"
  if (key === 'obedecer') obeyCount++;
  
  // Final secreto si eligió "obedecer" 2 veces
  if (obeyCount >= 2 && !sessionStorage.getItem('secretUnlocked') && key !== 'am_control_total') {
    key = 'am_control_total';
    sessionStorage.setItem('secretUnlocked', 'true');
  }

  // Sonidos
  const glitch = document.getElementById("glitch-sound");
  const click = document.getElementById("click-sound");
  glitch.currentTime = 0;
  glitch.play();
  click.currentTime = 0;
  click.play();

  // Transición de escena
  const scene = scenes[key];
  const container = document.getElementById("scene");
  container.style.opacity = 0;

  setTimeout(() => {
    container.innerHTML = `
      <img src="${scene.img}" alt="">
      <p>${scene.text}</p>
      <div class="options">
        ${scene.options ? scene.options.map(o => `<button onclick="nextScene('${o.next}')">${o.text}</button>`).join('') : ''}
        ${!scene.options ? '<button onclick="location.reload()">Reiniciar</button>' : ''}
      </div>
    `;
    container.style.opacity = 1;
  }, 300);
}