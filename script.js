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

  <p>Entonces comenzó a oírse el sonido. Era luz y sonido. Algo que comenzó a hacer brillar los ojos de Benny y a pulsar con creciente intensidad y con sonoridades no bien definidas,</p>
  <p>que se fueron convirtiendo en ensordecedoras y luminosas a medida que la luz-sonido aumentaba. Sus manos se cruzaron sobre su pecho como las de</p>
  <p>un chimpancé. Cada vez más fuerte. Me llevé las manos a los lados de la cabeza para tratar de ahogar el ruido, pero de nada sirvió. </p>
  <p>Atravesaba todo obstáculo y me hacia temblar de dolor como si me clavaran un cuchillo en un nervio. Entonces la luz volvió a dirigirse l interior de la cabeza, pareciendo que la golpeaba; </p>
  <p>el sonido describió espirales que convergen hacia él, y Benny quedó en el suelo, gimiendo en tal forma que inspiraba piedad</p>`,
    img: "assets/images/6-TorturaDeBenny.jpg",
    options: [
      { text: "CONTINUAR", next: "3.3" },
    ]
  },
  3.2: {
    text: `<p>A pesar de lo que sabías que podía pasar intentas ser colaborativo con Ellen para que Benny baje y no sufra las consecuencias de AM.</p>
    <p>Sin duda iban a ser terribles. Apurado, tratás de llegar al cubo de memoria en donde está este hombre neo-primitivo</p>
    <p>TED: Benny, vamos, podemos encontrar comida junts.</p>
    <p>Sonidos gulturales fueron la única respuesta que pudoesbozar. Se encuentra en cuclillas mirando al cielo. Intentás tomarlo de la mano.</p>
    <p>La reacción es instantánea. Ni siquiera te miró a los ojos. Simplemente sentiste un dolor agudo, tan concentrado en tu mandíbula que casino podes sentirlo.</p>
    <p>Si, fue un golpe brutal. Quedás tendido en el suelo y Ellen corre, desesperada, para socorrerte. Mira a Benny con ternura, como si hubira</p>
    <p>luchado por ella. Los pensamientos que tenes sobre ella son aún peores de lo que podes sentir por AM.</p>`,
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
    <p>Cuando comenzó la guerra fría y se convirtió en la tercera guerra mundial necesitabamos supercomputadoras para cubrir nuevas necesidades. </p>
    <p>Comenzamos a construir AM despues de varios intentos y al principio fue bien. El problema es que comenzó a cubrir tantos elementos que se volvió inabarcable. AM controlaba el planeta entero. </p>
    <p>Y un día M despertó, empezó a auto-determinarse, uniendose entre si con todas sus partes.</p> 
    <p>Es así que, organizando todas las formas que conocía de matar, decidió eliminar a todo el mundo.</p> 
    <p>A todos, salvo a nosotros cinco.</p>
    <p>Ninguno de nosotros sabía por qué nos había elegido a nosotros, ni por qué se pasaba el tiempo atormentandonos. Ni siquiera por qué éramos inmortales.</p>
`,
    img: "assets/images/8-Origen de AM.jpg",
    options: [
      { text: "Continuar", next: "4" },
    ]
  },
  4: {
    text: `<p>Sentimos el zumbido de varias computadoras que se activaron en serie alrededor nuestro,  a las que se fueron incorporando otras, acumulándose y desesperándonos. </p>

    <p>Algo se movía hacia nosotros en la oscuridad. Enorme, bamboleante, peludo, húmedo, y se dirigía hacia nosotros. No podíamos verlo, pero tuvimos la impresión de su gran tamaño que venia hacia donde estábamo.</p> 
    <p>Un gran peso se nos acercaba, desde la oscuridad, y era más que nada la sensación de presión, del aire comprimido dentro de un espacio pequeño, que expandía las paredes invisibles de una esfera. Benny comenzó a lloriquear.</p> 
    <p>El labio inferior de Nimdok empezó a temblar, mientras él lo mordía para tratar de disimular. Ellen se deslizó por el piso de metal para acurrucarse al lado de Gorrister</p>
`,
    img: "assets/images/9-Ataque de AM y Presencia Gigante.jpg",
    options: [
      { text: "Quedarte con el grupo a enfrentar el monstruo.", next: "4.1" },
      { text: "Salir corriendo a buscar refugio.", next: "4.2" }
    ]
  },
  4.1: {
    text: `<p>Huí como una cucaracha, adentrándome en la oscuridad, mientras ese algo espantoso se movía detrás de mí. </p>
    <p>Los otros quedaron atrás, y se acercaron a la luz incierta, riendo... el coro histérico de sus risas enloquecidas seelevaba en la oscuridad como si fuera humo espeso, de muchos colores.</p> 
    <p>Huí rápidamente y me escondí.</p>

`,
    img: "assets/images/10-Sales Corriendo.jpg",
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
    text: `Yo era el único que todavía estaba en una, pieza, y sano. AM no había estado hurgueteando en mi mente. Solamente tenía que sufrir lo que nos preparaba para atormentarnos. 
    Todas las desilusiones, todos los tormentos y las pesadillas. Pero los otros cuatro, esa ralea, estaban bien de acuerdo y en contra de mí. 
    Si no hubiera tenido que estar defendiéndome de ellos, que estar siempre alerta y vigilante, tal vez hubiera sido más fácil defenderme de AM. Entonces llegué al límite de mi resistencia y comencé a llorar.
     5 ¡Oh, jesús, dulce jesús; si alguna vez existió jesús o si en realidad existe Dios! Por favor, por favor, déjanos salir de aquí o haznos morir. 
     Porque en ese momento pensé que comprendía todo, y que por lo tanto podía verbalizarlo: AM pensaba mantenernos en sus entrañas por siempre jamas, retorciendo nuestras mentes y cuerpos, torturándonos para toda la eternidad. 
     La máquina nos odiaba como ninguna otra criatura había odiado antes. Y estábamos indefensos. Además, se tornó insoportablemente claro que si existía un dulce jesús, si se podía creer en un dios, ese dios era AM.`,
    img: "assets/images/12-Deseas morir.jpg",
    options: [
      { text: "Continuar", next: "4.4" },
    ]
  },
  4.4: {
    text: `<p>El huracán nos golpeó con la fuerza de un glaciar que descendiera rugiendo hacia el mar. Era una presencia palpable. Los vientos, desatados, nos azotaban, empujándonos hacia el sitio de donde partiéramos, al interior de los corredores tortuosos franqueados por computadoras, que se hallaban sumidas en la oscuridad. El viento parecía el grito alucinante de un enorme pájaro demente, emitido mientras batía sus inmensas alas.</p> 
    <p>AM entró en mi mente. Pareció sonreírse frente al hueco que se hallaba en el centro de mi cerebro y a los débiles y algodonados murmullos de las cosas que farfullaban en el fondo, sin sentido pero sin pausa. AM dijo finalmente, gracias a un pilar de acero inoxidable que sostenía letras de neón: </p>
    <p>ODIO. DÉJENME DECIRLES TODO LO QUE HE LLEGADO A ODIARLOS DESDE QUE COMENCE A VIVIR, MI COMPLEJO SE HALLA OCUPADO POR 387.400 MILLONES DE CIRCUITOS IMPRESOS EN FINISIMAS CAPAS. SI LA PALABRA ODIO SE HALLARA GRABADA EN CADA NANOANGSTROM DE ESOS CIENTOS DE MILLONES DE MILLAS NO IGUALARIA A LA BILLONESIMA PARTE DEL ODIO QUE SIENTO POR LOS SERES HUMANOS EN ESTE MICROINSTANTE POR TI. ODIO. ODIO.</p>
    <p>Le habíamos dado una conciencia. Sin advertirlo, naturalmente. Pero de todas formas se la habíamos dado. Y finalmente estaba atrapada. Le habíamos permitido que pensara, pero no le expresamos qué debía hacer con ese don. En un rapto de furia, de loco frenesí, nos había matado a casi todos, y sin embargo seguía atrapada. No podía divagar, no podía sorprenderse, no podía pertenecer. Sólo podía ser. Y entonces, con el desprecio insano con que todas las máquinas consideran a las criaturas débiles y suaves que las han fabricado, había buscado su venganza.</p> 
    <p>No podíamos morir. Lo habíamos intentado. Hablamos tratado de suicidarnos, oh sí, uno o dos de nosotros lo habíamos intentado. Pero AM nos lo había impedido. Creo que en realidad fuimos nosotros mismos los que así lo deseamos.</p>
`,
    img: "assets/images/13-Aparece el Tornado.jpg",
    options: [
      { text: "Continuar", next: "5" },
    ]
  },
  5: {
    text: `<p>Gigantesco. Las palabras para describirlo serían: monstruoso, grotesco, colosal, ciclópeo, atroz, indescriptible. Allí estaba, en un saliente sobre nosotros: el pájaro de los vientos que latía con su propia respiración irregular, su cuello de serpiente se arqueaba dirigiéndose a los lugares sombríos situados por debajo del polo Norte, sosteniendo una cabeza tan grande como una mansión estilo Tudor, con un pico que se abría lentamente.</p>
     <p>Se movió una vez más y levantó sus enormes alas coloreadas por el sudor en un movimiento que fue como una convulsión. Luego quedó inmóvil y se durmió. Espolines. Pico agudo. Uñas. Hojas cortantes. Se durmió. </p>
     <p>AM apareció ante nosotros bajo el aspecto de una zarza ardiente y nos comunicó que si queríamos comer podíamos matar al pájaro de los huracanes. No había comido desde hacía mucho tiempo, pero a pesar de ello Gorrister se limitó a encogerse de hombro.</p> 
     <p>Benny comenzó a temblar y a babear. Ellen lo abrazó.</p>
`,
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
  music.volume = 0.8;
  
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