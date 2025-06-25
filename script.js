const scenes = {
  2: {
    text: `<p>AM es un ser violento y sin amor por nada que se parezca a un humano, eso ya lo sabés de sobra. 
    Te mantiene vivo pero te detesta. No sos más que un simple juguete. Pasás las horas entre desafíos atroces que la máquina inventa para salir de su aburrimiento. 
    Es el centesimonoveno año que seguimos vivos. AM mantiene el calendario a raya y se asegura de que lo sepamos. Hace días que nadie prueba bocado. 
    Nimdok, no este su nombre original sino uno que se le hacía gracioso a la computadora, dice que debemos cruzar el desierto hacia las cuevas de hielo pues ahí hay latas con comida.
    El ánimo parece elevarse en el grupo, aunque sé perfectamente que puede ser uno de sus tantos engaños.</p>

    <p>TED: No vayamos, va a tener que darnos algo o vamos a morir.</p>
    
    <p>NIMDOK: La ultima vez que comimos fueron gusanos.</p>
    
    <p>Benny se estremeció.</p>
    
    <p>ELLEN: Por favor Ted, tenemos que encontrar algo. Estoy segura de que pueden haber peras o manzanas del otro lado.</p>
`,
    img: "assets/images/2-desierto.jpg",
    options: [
      { text: "Seguir adelante con el grupo", next: "3" },
      { text: "Irte por tu cuenta.", next: "2.3" }
    ]
  },
  2.3: {
    text: `<p>TED: Estoy harto de ustedes y sus malditas inseguridades y quejas. ¿No ven que esto no tiene sentido?. 
    ¿De qué sirve comer?. ¿De qué sirve el esfuerzo?.</p>
    
<p> Corrés por tu cuenta hacia el desierto. Los demás intentan detenerte pero el hambre no les da fuerzas para alcanzarte.</p>
<p>  De repente escuchas el crugido de cientos de máquinas en serie. Un ruido te ensordece, una palabra se apodera de tu cuerpo.</p>
  <p>NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. </p>
    <p>Un dolor insoportable te recorre cada célula del cuerpo. Tu existencia chilla comunicando que algo está MUY MAL.</p>
    <p>
      Y todo se vuelve blanco.
    </p>
    <p>
      Despertás en el campamento junto al grupo. Nadie sabe que ocurrió, salvo vos.
    </p>`,
    im: "assets/images/3-bosqueDeLaOsbolencia.jpg",
    options: [
      { text: "CONTINUAR", next: "3" },
    ]
  },
  3: {
    text: `<p>Noté que Benny estaba perdiendo más y más la paciencia. Producto de las torturas a las que lo sometía la máquina el pobre infeliz se había vuelto absolutamente loco hacía años. Sus facciones parecían moverse independientemente unas de otras y tenía la mentalidad de un niño pequeño con la brutalidad de un peleador de boxeo. Creo que era el más afortunado de nosotros.</p>

    <p>
      Ellen: - ¡No, Benny! No vayas. ¡Sigamos adelante! ¡No, Benny, por favor!   
    </p>

    <p>Benny: - Voy a escaparme... Voy a escaparme - repitiéndolo una y otra vez. </p>

    <p>Si bien podíamos pensar, decirle, vociferarle a AM cuanto insulto se nos ocurriese el límite estaba bastante claro: nadie podía escapar. Las consecuencias de participar en tales actos podían llevar a semanas de dolor, pánico y desesperación. Imagina todos los métodos de tortura que puede haber desarrollado la humanidad y ten en cuenta que están almacenados en la memoria de AM para que los elija como un niño en una tienda de caramelos.</p>

`,
    img: "assets/images/4-BennyEscapa.jpg",
    options: [
      { text: "Dejarlo ir y evitar la ira de AM.", next: "3.1" },
      { text: "AYUDAR a Ellen y evitar que escape ", next: "3.2" }
    ]
  },
  3.1: {
    text: 
    `<p>Benny se trepó a un cubo de memoria y nos miró con la postura de un mono. Es lo que AM más hubiera querido. Ellen se quedó sufriendo pues sabía lo que iba a pasar. Ella era la única de nuestro grupo que aún parecía mantener emociones por otros seres. Yo la odiaba por eso, sentía rabia y escozor cada vez que escuchaba su patética voz. </p>
<p>
  Ellen: Oh, Ted, Nimdok, por favor, ayúdenlo, deténganlo antes que... 
</p>
<p>Las lágrimas bañaron sus ojos. Movió las manos sin saber qué hacer. Era demasiado tarde. Nadie quería estar al lado de Benny cuando pasaría lo que sabíamos que iba a pasar </p>

Entonces comenzó a oírse el sonido. Era luz y sonido. Algo que comenzó a hacer brillar los ojos de Benny y a pulsar con creciente intensidad y con sonoridades no bien definidas,
 que se fueron convirtiendo en ensordecedoras y luminosas a medida que la luz-sonido aumentaba. Sus manos se cruzaron sobre su pecho como las de
  un chimpancé. Cada vez más fuerte. Me llevé las manos a los lados de la cabeza para tratar de ahogar el ruido, pero de nada sirvió. 
  Atravesaba todo obstáculo y me hacia temblar de dolor como si me clavaran un cuchillo en un nervio. Entonces la luz volvió a dirigirse al interior de la cabeza, pareciendo que la golpeaba; 
  el sonido describió espirales que convergen hacia él, y Benny quedó en el suelo, gimiendo en tal forma que inspiraba piedad.`,
    img: "assets/images/6-TorturaDeBenny.jpg",
    options: [
      { text: "CONTINUAR", next: "3.3" },
    ]
  },
  3.2: {
    text: `A pesar de lo que sabías que podía pasar intentas ser colaborativo con Ellen para que Benny baje y no sufra las consecuencias de AM.
    Sin duda iban a ser terribles. Apurado, tratás de llegar al cubo de memoria en donde está este hombre neo-primitivo.
    TED: Benny, vamos, podemos encontrar comida juntos.
    Sonidos gulturales fueron la única respuesta que pudo esbozar. Se encuentra en cuclillas mirando al cielo. Intentás tomarlo de la mano.
    La reacción es instantánea. Ni siquiera te miró a los ojos. Simplemente sentiste un dolor agudo, tan concentrado en tu mandíbula que casi no podes sentirlo.
    Si, fue un golpe brutal. Quedás tendido en el suelo y Ellen corre, desesperada, para socorrerte. Mira a Benny con ternura, como si hubiera
    luchado por ella. Los pensamientos que tenes sobre ella son aún peores de lo que podes sentir por AM.`,
    img: "assets/images/salida.jpg",
    options: [
      { text: "Continuar", next: "3.1" },
    ]
  },
  3.3: {
    text: `<p>Pasado ese estremecimiento nos reincorporamos, pues como siempre seguíamos vivos. La única diferencia entre Benny y el resto fueron las horas de tortura y las cicatrices que quedarían. AM nos proveyó de pasto semi-húmedo que utilizamos para hacer un fuego oloroso, débil y lamentable. Aprovechamos el momento para contarnos historias e impedir que Benny llorara toda la noche. </p>

<p>Benny: ¿Quien es AM?</p>
<p>Habíamos explicado lo mismo mil veces. Sin embargo seguía siendo una novedad para él.</p>
<p>Gorrister: Es una computadora que al principio era una herramienta de la humanidad, hasta empezó a ganar tanto conocimiento que en un momento pudo autodeterminarse. Existía una AM China, una Rusa, una Yankee…</p>
<p>Benny golpeó incesantemente el piso. No había empezado desde el principio. Rendido, Gorrister prosiguió.</p>
<p>Cuando comenzó la guerra fría y se convirtió en la tercera guerra mundial necesitabamos supercomputadoras para cubrir nuevas necesidades. Comenzamos a construir AM despues de varios intentos y al principio fue bien. El problema es que comenzó a cubrir tantos elementos que se volvió inabarcable. AM controlaba el planeta entero. Y un día AM despertó, empezó a auto-determinarse, uniendose entre si con todas sus partes. Es así que, organizando todas las formas que conocía de matar, decidió eliminar a todo el mundo. A todos, salvo a nosotros cinco.</p>
<p>Ninguno de nosotros sabía por qué nos había elegido a nosotros, ni por qué se pasaba el tiempo atormentandonos. Ni siquiera por qué éramos inmortales.</p>
`,
    img: "assets/images/7-ReposanY AMtrajeHojas.jpg",
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