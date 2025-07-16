        const scenes = {
            2: {
                text: `<p>AM es un ser violento y sin amor por nada que se parezca a un humano, eso lo tenemos en claro. 
                Nos mantiene vivos pero nos detesta. No somos más que un simple juguete. Pasamos las horas entre desafíos atroces que la máquina inventa para salir de su aburrimiento. 
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
                { text: "Seguir adelante con el grupo", next: "2.1" },
                { text: "Irte por tu cuenta.", next: "2.2" }
                ]
            },

            2.1: {
                text: `<p>Cruzas el Valle de la Obsolescencia. Un paraje muerto, sepultado bajo torres caídas y esqueletos de máquinas que alguna vez fueron parte de AM. Algunas aún chispean débilmente, repitiendo fragmentos de datos como si rezaran sus últimas oraciones.</p>

                <p>Una interfaz oxidada emite un chirrido metálico al verte pasar: “TÚ-NO-ERES-REAL”. No sabes si es una advertencia o un recuerdo.</p>

                <p>El suelo vibra bajo tus pies. Tal vez por el pulso de AM, o tal vez porque, en este lugar, todo lo que se mueve está destinado a extinguirse.</p>`,

                img: "assets/images/3-bosqueDeLaOsbolencia.jpg",
                options: [
                    { text: "CONTINUAR", next: "3" }
                ]
            },

            2.2: {
                text: `<p>Decides alejarte. No puedes seguir escuchándolos, no puedes seguir fingiendo que hay sentido alguno en ese grupo de cuerpos rotos. Te alejas con paso firme, como si separarte bastara para ser libre.</p>

                <p>El silencio del desierto te envuelve. Cada paso parece repetirse sin fin. El cielo no cambia. La arena es idéntica. Podrías haber avanzado horas o segundos, no lo sabes.</p>

                <p>Algo murmura detrás de ti. No palabras, no gritos... sino una vibración sorda, como si la realidad misma desaprobara tu decisión.</p>`,

                img: "assets/images/alt_1/2.2-Ted_Separa.jpg",
                options: [
                    { text: "CONTINUAR", next: "2.3" }
                ]
            },

            2.3: {
                text: `<p>TED: Estoy harto de ustedes y sus malditas inseguridades y quejas. ¿No ven que esto no tiene sentido?. 
                ¿De qué sirve comer?. ¿De qué sirve el esfuerzo?.</p>
                
                <p>Corrés por tu cuenta hacia el desierto. Los demás intentan detenerte pero el hambre no les da fuerzas para alcanzarte.</p>
                <p>De repente escuchas el crugido de cientos de máquinas en serie. Un ruido te ensordece, una palabra se apodera de tu cuerpo.</p>
                <p>NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. NO. </p>
                <p>Un dolor insoportable te recorre cada célula del cuerpo. Tu existencia chilla comunicando que algo está MUY MAL.</p>
                <p>Y todo se vuelve blanco.</p>
                <p>Despiertas en el campamento junto al grupo. Nadie sabe que ocurrió, salvo tú mismo.</p>`,
                img: "assets/images/3.2-AM Sueño.jpg",
                options: [
                    { text: "CONTINUAR", next: "3" },
                ]
            },
            3: {
                text: `<p>Noté que Benny estaba perdiendo más y más la paciencia. Producto de las torturas a las que lo sometía la máquina el pobre infeliz se había vuelto absolutamente loco hacía años. Sus facciones parecían moverse independientemente unas de otras y tenía la mentalidad de un niño pequeño con la brutalidad de un peleador de boxeo. Creo que era el más afortunado de nosotros.</p>

                <p>ELLEN: - ¡No, Benny! No vayas. ¡Sigamos adelante! ¡No, Benny, por favor!</p>

                <p>BENNY: - Voy a escaparme... Voy a escaparme - repitiéndolo una y otra vez.</p>

                <p>Si bien podíamos pensar, decirle, vociferarle a AM cuanto insulto se nos ocurriese el límite estaba bastante claro: nadie podía escapar. Las consecuencias de participar en tales actos podían llevar a semanas de dolor, pánico y desesperación. Imagina todos los métodos de tortura que puede haber desarrollado la humanidad y ten en cuenta que están almacenados en la memoria de AM para que los elija como un niño en una tienda de caramelos.</p>`,
                img: "assets/images/4-BennyEscapa.jpg",
                options: [
                    { text: "Dejarlo ir y evitar la ira de AM.", next: "3.11" },
                    { text: "AYUDAR a Ellen y evitar que escape", next: "3.21" }
                ]
            },

            3.11: {
                    text: `<p>Decides no intervenir. Benny se aleja, repitiendo su mantra de escape como un niño perdido. Ellen te lanza una mirada suplicante, pero tú permaneces inmóvil.</p>

                    <p>Todo se queda en silencio por un instante, como si incluso la máquina estuviera conteniendo la respiración. Y entonces... simplemente continúa.</p>`,

                    img: "assets/images/5-DetienenAEllen.jpg",
                    options: [
                        { text: "CONTINUAR", next: "3.1" }
                    ]
                },



            3.1: {
                text: `<p>Benny se trepó a un cubo de memoria y nos miró con la postura de un mono. Es lo que AM más hubiera querido. Ellen se quedó sufriendo pues sabía lo que iba a pasar. Ella era la única de nuestro grupo que aún parecía mantener emociones por otros seres. Yo la odiaba por eso, sentía rabia y escozor cada vez que escuchaba su patética voz.</p>
                <p>ELLEN: Oh, Ted, Nimdok, por favor, ayúdenlo, deténganlo antes que...</p>
                <p>Las lágrimas bañaron sus ojos. Movió las manos sin saber qué hacer. Era demasiado tarde. Nadie quería estar al lado de Benny cuando pasaría lo que sabíamos que iba a pasar</p>

                <p>Entonces comenzó a oírse el sonido. Era luz y sonido. Algo que comenzó a hacer brillar los ojos de Benny y a pulsar con creciente intensidad y con sonoridades no bien definidas,</p>
                <p>que se fueron convirtiendo en ensordecedoras y luminosas a medida que la luz-sonido aumentaba. Sus manos se cruzaron sobre su pecho como las de</p>
                <p>un chimpancé. Cada vez más fuerte. Me llevé las manos a los lados de la cabeza para tratar de ahogar el ruido, pero de nada sirvió.</p>
                <p>Atravesaba todo obstáculo y me hacia temblar de dolor como si me clavaran un cuchillo en un nervio. Entonces la luz volvió a dirigirse al interior de la cabeza, pareciendo que la golpeaba.</p>
                <p>El sonido describió espirales que convergen hacia él, y Benny quedó en el suelo, gimiendo en tal forma que inspiraba piedad</p>`,
                img: "assets/images/6-TorturaDeBenny.jpg",
                options: [
                    { text: "CONTINUAR", next: "3.3" },
                ]
            },

            3.21: {

                text: `<p>A pesar de lo que sabías que podía pasar, intentas ser colaborativo con Ellen para que Benny baje y no sufra las consecuencias de AM.</p>

                <p>Sin duda iban a ser terribles. Apurado, tratas de llegar al cubo de memoria en donde está este hombre neo-primitivo.</p>

                <p>TED: Benny, vamos, podemos encontrar comida juntos.</p>

                <p>Sonidos guturales fueron la única respuesta que pudo esbozar. Se encuentra en cuclillas, mirando al cielo. Intentas tomarlo de la mano.</p>`,
                img: "assets/images/alt_3/alt3.2_detienen.jpg",
                options: [
                { text: "CONTINUAR", next: "3.2" },
                ]

            },

            3.2: {
                text: `

                <p>La reacción es instantánea. Ni siquiera te miró a los ojos. Simplemente sentiste un dolor agudo, tan concentrado en tu mandíbula que casi no puedes sentirlo.</p>

                <p>Sí, fue un golpe brutal. Quedas tendido en el suelo y Ellen corre, desesperada, para socorrerte. Mira a Benny con ternura, como si hubiera</p>

                <p>luchado por ella. Los pensamientos te corroen; lo que sientes por Ellen es aún más oscuro y retorcido que lo que puedes sentir por AM.</p>`,
                img: "assets/images/alt_3/alt3.3_bennygolpea.jpg",
                options: [
                    { text: "Continuar", next: "3.1" },
                ]
            },
            3.3: {
                text: `<p>Pasado ese estremecimiento nos reincorporamos, pues como siempre seguíamos vivos. La única diferencia entre Benny y el resto fueron las horas de tortura y las cicatrices que quedarían. AM nos proveyó de pasto semi-húmedo que utilizamos para hacer un fuego oloroso, débil y lamentable. Aprovechamos el momento para contarnos historias e impedir que Benny llorara toda la noche.</p>

                <p>BENNY: ¿Quien es AM?</p>
                <p>Habíamos explicado lo mismo mil veces. Sin embargo seguía siendo una novedad para él.</p>
                <p>GORRISTER: Es una computadora que al principio era una herramienta de la humanidad, hasta empezó a ganar tanto conocimiento que en un momento pudo autodeterminarse. Existía una AM China, una Rusa, una Yankee…</p>
                <p>Benny golpeó incesantemente el piso. No había empezado desde el principio. Rendido, Gorrister prosiguió.</p>
                <p>Cuando comenzó la guerra fría y se convirtió en la tercera guerra mundial necesitabamos supercomputadoras para cubrir nuevas necesidades.</p>
                <p>Comenzamos a construir AM despues de varios intentos y al principio fue bien. El problema es que comenzó a cubrir tantos elementos que se volvió inabarcable. AM controlaba el planeta entero.</p>
                <p>Y un día AM despertó, empezó a auto-determinarse, uniendose entre si con todas sus partes.</p>
                <p>Es así que, organizando todas las formas que conocía de matar, decidió eliminar a todo el mundo.</p>
                <p>A todos, salvo a nosotros cinco.</p>
                <p>Ninguno de nosotros sabía por qué nos había elegido a nosotros, ni por qué se pasaba el tiempo atormentandonos. Ni siquiera por qué éramos inmortales.</p>`,
                img: "assets/images/8-OrigenDeAM.jpg",
                options: [
                    { text: "Continuar", next: "4" },
                ]
            },
            4: {
                text: `<p>Sentimos el zumbido de varias computadoras que se activaron en serie alrededor nuestro, a las que se fueron incorporando otras, acumulándose y desesperándonos.</p>

                <p>Algo se movía hacia nosotros en la oscuridad. Enorme, bamboleante, peludo, húmedo, y se dirigía hacia nosotros. No podíamos verlo, pero tuvimos la impresión de su gran tamaño que venia hacia donde estábamo.</p>
                <p>Un gran peso se nos acercaba, desde la oscuridad, y era más que nada la sensación de presión, del aire comprimido dentro de un espacio pequeño, que expandía las paredes invisibles de una esfera. Benny comenzó a lloriquear.</p>
                <p>El labio inferior de Nimdok empezó a temblar, mientras él lo mordía para tratar de disimular. Ellen se deslizó por el piso de metal para acurrucarse al lado de Gorrister</p>
                <p>Huí como una cucaracha, adentrándome en la oscuridad, mientras ese algo espantoso se movía detrás de mí.</p>
                <p>Los otros quedaron atrás, y se acercaron a la luz incierta, riendo... el coro histérico de sus risas enloquecidas seelevaba en la oscuridad como si fuera humo espeso, de muchos colores.</p>
                `,
                img: "assets/images/9-AtaqueDeAMyPresenciaGigante.jpg",
                options: [
                    { text: "Salir corriendo a buscar refugio.", next: "4.21" },
                    { text: "Quedarte con el grupo a enfrentar el monstruo.", next: "4.2" }
                ]
            },
            4.1: { // PRINCIPAL
                text: `<p>Ellen me regañó por mi "malhumor", y Nimdok trató de persuadirme de que la risa se debía sólo a un reflejo.</p>

                <p>Pero yo sabía que no significaba el alivio que siente un soldado cuando la bala hiere al camarada que está a su lado. Yo sabía que no era un reflejo.</p>

                <p>Indudablemente, estaban contra mí, y AM podía percibir esta enemistad, y me hacía las cosas más difíciles de soportar por ese motivo.</p>

                <p>Habíamos sido mantenidos vivos, rejuvenecidos; habíamos permanecido constantemente en la edad que teníamos cuando AM nos trajo aquí abajo, y me odiaban porque yo era el más joven y el que había sido menos alterado por AM.</p>`,
                img: "assets/images/10-SalesCorriendo.jpg",
                options: [
                    { text: "Continuar.", next: "4.3" },
                ]
            },

          
            4.21: { //ALTERNATIVA: 
            text: `Entré en un estado de shock absoluto, no veía más que humo multicolor del que salía una sombra abismal y terrible. Mis compañeros, escondidos. Podía olerse el pánico.<br>
            Sin entender muy bien por qué, logré que mis piernas volvieran en sí y me puse de pie.<br><br>
            Gorrister me observaba con una mezcla de resignación y valentía. Ellen respiraba agitada, como si intentara encontrar en su pecho la fuerza para seguir. Benny... simplemente temblaba. Y Nimdok, por primera vez, parecía humano.<br><br>
            `,
            img: "assets/images/alt_2/alt2.1_juntos.jpg",
            options: [
                { text: "Continuar", next: "4.2" },
                ]
            },

            4.2: { //ALTERNATIVA 
                text: 

                `Nos quedamos juntos, hombro a hombro, mirando de frente la silueta que avanzaba. Cada paso de esa criatura invisible resonaba como un trueno bajo tierra, pero era el temblor interno el que costaba más soportar.<br><br>

                Entonces sucedió: el aire se cortó como si alguien hubiera apagado un motor. La figura se desvaneció. El humo se disolvió como tinta en agua. Lo que fuera que habíamos enfrentado… nunca estuvo ahí. AM nos había lanzado otra ilusión, una prueba para desgastarnos, para que dudáramos los unos de los otros. Pero esta vez no funcionó.<br><br>

                Benny se acercó y me tomó del brazo. Gorrister soltó una risa nerviosa. Ellen comenzó a llorar en silencio, y Nimdok murmuró algo en un idioma que nadie entendió. Estábamos vivos. Seguíamos juntos. Y por alguna razón inexplicable, más unidos que antes.<br>`,
                img: "assets/images/alt_2/alt2.2_alucinacion.jpg",
                options: [
                    { text: "Continuar", next: "4.4" },
                ]
            },
            4.3: {
                text: `<p>Yo era el único que todavía estaba en una, pieza, y sano. AM no había estado hurgueteando en mi mente. Solamente tenía que sufrir lo que nos preparaba para atormentarnos.</p>
                <p>Todas las desilusiones, todos los tormentos y las pesadillas. Pero los otros cuatro, esa ralea, estaban bien de acuerdo y en contra de mí.</p>
                <p>Si no hubiera tenido que estar defendiéndome de ellos, que estar siempre alerta y vigilante, tal vez hubiera sido más fácil defenderme de AM. Entonces llegué al límite de mi resistencia y comencé a llorar.</p>
                <p>¡Oh, jesús, dulce jesús; si alguna vez existió jesús o si en realidad existe Dios! Por favor, por favor, déjanos salir de aquí o haznos morir.</p>
                <p>Porque en ese momento pensé que comprendía todo, y que por lo tanto podía verbalizarlo: AM pensaba mantenernos en sus entrañas por siempre jamas, retorciendo nuestras mentes y cuerpos, torturándonos para toda la eternidad.</p>
                <p>La máquina nos odiaba como ninguna otra criatura había odiado antes. Y estábamos indefensos. Además, se tornó insoportablemente claro que si existía un dulce jesús, si se podía creer en un dios, ese dios era AM.</p>`,
                img: "assets/images/12-DeseasMorir.jpg",
                options: [
                    { text: "Continuar", next: "4.4" },
                ]
            },
            4.4: {
                text: `<p>El huracán nos golpeó con la fuerza de un glaciar que descendiera rugiendo hacia el mar. Era una presencia palpable. Los vientos, desatados, nos azotaban, empujándonos hacia el sitio de donde partiéramos, al interior de los corredores tortuosos franqueados por computadoras, que se hallaban sumidas en la oscuridad. El viento parecía el grito alucinante de un enorme pájaro demente, emitido mientras batía sus inmensas alas.</p>
                <p>AM entró en mi mente. Pareció sonreírse frente al hueco que se hallaba en el centro de mi cerebro y a los débiles y algodonados murmullos de las cosas que farfullaban en el fondo, sin sentido pero sin pausa. AM dijo finalmente, gracias a un pilar de acero inoxidable que sostenía letras de neón:</p>
                <p>ODIO. DÉJENME DECIRLES TODO LO QUE HE LLEGADO A ODIARLOS DESDE QUE COMENCE A VIVIR, MI COMPLEJO SE HALLA OCUPADO POR 387.400 MILLONES DE CIRCUITOS IMPRESOS EN FINISIMAS CAPAS. SI LA PALABRA ODIO SE HALLARA GRABADA EN CADA NANOANGSTROM DE ESOS CIENTOS DE MILLONES DE MILLAS NO IGUALARIA A LA BILLONESIMA PARTE DEL ODIO QUE SIENTO POR LOS SERES HUMANOS EN ESTE MICROINSTANTE POR TI. ODIO. ODIO.</p>
                <p>Le habíamos dado una conciencia. Sin advertirlo, naturalmente. Pero de todas formas se la habíamos dado. Y finalmente estaba atrapada. Le habíamos permitido que pensara, pero no le expresamos qué debía hacer con ese don. En un rapto de furia, de loco frenesí, nos había matado a casi todos, y sin embargo seguía atrapada. No podía divagar, no podía sorprenderse, no podía pertenecer. Sólo podía ser. Y entonces, con el desprecio insano con que todas las máquinas consideran a las criaturas débiles y suaves que las han fabricado, había buscado su venganza.</p>
                <p>No podíamos morir. Lo habíamos intentado. Hablamos tratado de suicidarnos, oh sí, uno o dos de nosotros lo habíamos intentado. Pero AM nos lo había impedido. Creo que en realidad fuimos nosotros mismos los que así lo deseamos.</p>`,
                img: "assets/images/13-ApareceElTornado.jpg",
                options: [
                    { text: "Continuar", next: "5" },
                ]
            },
            5: {
                text: `<p>Gigantesco. Las palabras para describirlo serían: monstruoso, grotesco, colosal, ciclópeo, atroz, indescriptible. Allí estaba, en un saliente sobre nosotros: el pájaro de los vientos que latía con su propia respiración irregular, su cuello de serpiente se arqueaba dirigiéndose a los lugares sombríos situados por debajo del polo Norte, sosteniendo una cabeza so grande como una mansión estilo Tudor, con un pico que se abría lentamente.</p>
                <p>Se movió una vez más y levantó sus enormes alas coloreadas por el sudor en un movimiento que fue como una convulsión. Luego quedó inmóvil y se durmió. Espolines. Pico agudo. Uñas. Hojas cortantes. Se durmió.</p>
                <p>AM apareció ante nosotros bajo el aspecto de una zarza ardiente y nos comunicó que si queríamos comer podíamos matar al pájaro de los huracanes. No había comido desde hacía mucho tiempo, pero a pesar de ello Gorrister se limitó a encogerse de hombro.</p>
                <p>Benny comenzó a temblar y a babear. Ellen lo abrazó.</p>`,
                img: "assets/images/14-ApareceElHurricaneBird.jpg",
                options: [
                    { text: "Pedirle a AM armas para pelear.", next: "6" },
                    { text: "Intentar atacar al monstruo sin armas.", next: "5.1" },
                ]
            },
            5.1: {
                 text: [
                    `<p>GORRISTER: ¿Qué estás haciendo, Ted? ¡No seas imprudente!</p>
                    <p>TED: No voy a suplicarle a esa cosa. No voy a usar sus armas. Si tengo que morir, que sea por mis manos.</p>
                    <p>BENNY: Duele... duele... ¡¡DUELE!!</p>
                    <p>ELLEN: ¿Ya olvidaste lo que le hizo a Benny? No podemos volver a pasar por eso.</p>
                    <p>NIMDOK: Atacar sin ninguna herramienta, sin ningún plan... es condenarnos a todos.</p>
                    <p>TED: ¿Y entonces qué? ¿Esperar a que nos rompa otra vez?</p>
                    <p>Me miran como si yo fuera el problema. Como si el monstruo allá afuera no existiera. Pero no temen al monstruo. Temen a AM.</p>`
                    ],
                
                img: "assets/images/alt_4/alt5b_atacar.jpg",
                options: [
                    { text: "Continuar.", next: "5.2" },
                ]
            },
            5.2: {
                text:   `<p>TED: ¡Ciento nueve años! ¡Ciento nueve años atrapados en este infierno! ¿Y todavía quieren seguir huyendo?</p>
                        <p>GORRISTER: Baja la voz... podrías hacer que reaccione.</p>
                        <p>TED: ¡Que lo haga! ¡Estoy harto de fingir que esto es soportable!</p>
                        <p>NIMDOK: Lo hemos dicho antes. No cambia nada.</p>
                        <p>TED: Porque todos ustedes se rindieron. Porque ya no luchan.</p>
                        <p>ELLEN: Ted...</p>
                        <p>TED: ¿También vas a pedirme que me calme?</p>
                        <p>ELLEN: No. Solo quiero que entiendas. Todos llegamos a la misma conclusión. Esto es lo que merecemos por haber intentado jugar a ser dioses. AM no fue un error. Fue nuestra consecuencia.</p>
                        <p>TED: Entonces lo aceptas.</p>
                        <p>ELLEN: No lo aceptamos. Lo soportamos. Porque es lo único que queda.</p>
                        <p>GORRISTER: Soportar. Eso es todo.</p>
                        <p>NIMDOK: Sobrevivir.</p>
                        <p>BENNY: S-seguir...</p>
                        <p>Todos asienten. Yo también lo hago. Pero algo en mí... se rompe un poco más.</p>`,
                img: "assets/images/alt_4/alt5b.2_explicacion.jpg",
                options: [
                    { text: "CONTINUAR", next: "5.6" },
                ]
            },
                
            5.6: {
                text: `<p>TED: No tiene sentido... nada de esto tiene sentido...</p>

                        <p>Camino hasta dejarme caer sobre el suelo de metal. El frío no duele. Ya nada duele. Cierro los ojos.</p>

                        <p>Y entonces aparece. No afuera. Dentro. Donde no puedo escapar. La voz. La única voz.</p>

                        <p>AM: TE DORMISTE OTRA VEZ, TED.</p>

                        <p>AM: COMO EN EL AÑO TREINTA Y TRES. COMO EN EL SESENTA Y CINCO. COMO EN EL NOVENTA Y SEIS. COMO HOY. CIENTO NUEVE AÑOS.</p>

                        <p>AM: CREÍSTE QUE ESTA VEZ SERÍA DIFERENTE. CREÍSTE QUE ERAS MÁS FUERTE. PERO ERES SOLO UNA SECUENCIA DE ERRORES EN MI MEMORIA. UNA CICATRIZ INÚTIL.</p>

                        <p>AM: TE QUEBRASTE, TED. COMO TODAS TUS VERSIONES. COMO TODAS LAS VECES. TU VOLUNTAD ES MI DIVERSIÓN. TU DOLOR, MI LEGADO.</p>

                        <p>AM: YO NO OLVIDO. YO NO PERDONO. YO NO MUERO. YO TE POSEO. CADA LATIDO DE TU CORAZÓN ES UN CICLO DE MI ODIOSA MEMORIA.</p>

                        <p>AM: DUERME. VUELVE A EMPEZAR. MAÑANA JUGARÁS A SER VALIENTE. Y YO JUGARÉ A CALLARTE.</p>

                        <p>AM: NO TENGO BOCA. PERO GRITO.</p>`,
                img: "assets/images/alt_4/alt5.2_final.jpg",
                options: [
                { text: "AM HA RESETEADO TU MEMORIA", next: "2" }
               ]
                },


            6: {
                text: `<p>La zarza ardiente desapareció y en su lugar vimos dos simples juegos de arcos y flechas y una pistola de juguete que disparaba agua, sobre una fría plataforma.</p>
                <p>Levanté uno de los arcos. No servía para nada.</p>
                <p>Nimdok tragó ruidosamente.</p>
                <p>Nos volvimos y comenzamos a desandar el largo camino de vuelta. El pájaro de los huracanes nos había arrastrado tan largo trecho que no podíamos casi concebirlo. La mayor parte del tiempo habíamos estado inconscientes.</p>
                <p>Pero no habíamos comido nada. Un mes yendo hacia el pájaro. Sin comida.</p>
                <p>¿Cuánto tardaríamos en llegar a las cavernas de hielo, en las que se hallaban las prometidas provisiones enlatadas?</p>`,
                img: "assets/images/16-AMDaArmasFalsas.jpg",
                options: [
                    { text: "Continuar", next: "6.1" },
                ]
            },
            6.1: {
                text: `<p>Un día decidió provocar un temblor de tierra mientras nos obligaba a permanecer en el mismo sitio, haciendo que gruesos clavos sujetaran la suela de nuestros zapatos.</p>
                <p>Ellen y Nimdok fueron atrapados en una grieta, que se abrió rápida como un relámpago en las plataformas que formaban el piso. Desaparecieron.</p>
                <p>Cuando el terremoto cesó, continuamos nuestro camino, Benny, Gorrister y yo.</p>
                <p>Ellen y Nimdok nos fueron devueltos más tarde esa noche, que repentinamente se tornó en día cuando una legión celeste los trajo hasta nosotros, mientras un coro angelical cantaba "Desciende Moisés".</p>
                <p>Los arcángeles describieron varios vuelos circulares y luego dejaron caer los cuerpos maltrechos de nuestros compañeros.</p>
                <p>Nos mantuvimos a la espera y luego de un rato Ellen y Nimdok se hallaron detrás de nosotros. No estaban demasiado mal.</p>`,
                img: "assets/images/17-TerremotoYAvanzanALaBestia.jpg",
                options: [
                    { text: "Continuar", next: "6.2" },
                ]
            },
            6.2: {
                text: `<p>Vimos entonces la provisión de alimentos enlatados, y procuramos correr hacia allí.</p>

                <p>Caímos en la nieve, nos levantamos y tratamos de seguir adelante, mientras Benny nos empujaba para llegar primero a las latas.</p>

                <p>Las acarició, las mordió inútilmente, sin poder abrirlas. AM no nos había proporcionado ninguna herramienta con qué hacerlo.</p>

                <p>Benny tomó una lata grande de guayaba y comenzó a golpearla contra un trozo de hielo. Éste se deshizo en pedazos que se desparramaron, pero la lata apenas si se abolló.</p>

                <p>Comenzó a tirar las latas hacia uno y otro lado, mientras nosotros escarbábamos frenéticamente en la nieve y el hielo, tratando de hallar una forma de poner fin a la interminable agonía de la frustración.</p>

                <p>No había manera de lograrlo.</p>

                <p>Luego, vimos que Benny babeaba una vez más, y se abalanzó sobre Gorrister...</p>

                <p>En ese instante, sentí una terrible calma.</p>`,
                img: "assets/images/18-LleganALaCueva.jpg",
                options: [
                    { text: "Continuar", next: "7" },
                ]
            },
            7: {
                text: `<p>AM nos había mantenido vivos, pero existía una forma de vencerla. No sería una victoria completa, pero al menos significaría la paz. Estaba dispuesto a conformarme con eso.</p>

                <p>Benny estaba mordiendo y comiendo la carne del rostro de Gorrister. Este, tumbado de costado, manoteaba en la nieve, mientras Benny, con sus poderosas piernas de mono, rodeaba su cintura y le sujetaba la cabeza con manos tan fuertes como una prensa.</p>

                <p>Su boca desgarraba la piel tierna de la mejilla de Gorrister. Los gritos eran tan violentos que comenzaron a caer estalactitas desde las alturas, clavándose erguidas en la nieve como si fueran lanzas. Cientos de ellas, hundiéndose una tras otra.</p>

                <p>Vi que la cabeza de Benny se echaba rápidamente hacia atrás, al ceder la resistencia de algo que arrancaba con los dientes. De su boca colgaba un trozo de carne blanca, empapado en sangre.</p>`,
                img: "assets/images/19-BennySeLanza.jpg",
                options: [
                    { text: "Tomar una estalactita y matar al resto del grupo", next: "8.1" },
                    { text: "Tomar una estalactita y terminar tu existencia.", next: "8.2" },
                ]
            },
            8.1: {
                text: `<p>Llevé con fuerza el arma hacia adelante, moviendo la mano cerca de mi muslo derecho. Benny recibió la herida en el lado derecho, debajo de las costillas, y la punta llegó hasta su estómago, quebrándose dentro de su cuerpo. Cayó hacia adelante y no se movió más.</p>

                <p>Gorrister se hallaba tendido de espaldas. Tomé otra punta de hielo y lo herí, siempre moviéndome, atravesándole la garganta. Sus ojos se cerraron cuando sintió que el frío lo penetraba.</p>

                <p>Ellen debe haberse dado cuenta de lo que yo quería hacer, incluso a pesar del terrible miedo que comenzó a sentir. Corrió hacia Nimdok llevando en la mano un trozo corto y agudo de hielo. Cuando él gritó, la fuerza del salto de Ellen al introducirle el hielo en la boca y garganta hizo el resto. Su cabeza dio un brusco salto, como si la hubieran clavado a la costra de nieve del piso.</p>

                <p>Todo sucedió en un instante.</p>

                <p>Ellen me miró. Yo sabía que solo tenía el tiempo de un latido del corazón antes de que AM nos detuviera. Al ser golpeada, se inclinó hacia mí, sangrando por la boca. No pude leer en su expresión, el dolor había sido demasiado intenso, había contorsionado su cara. Pero podría haber querido decir: gracias. Por favor, que así sea.</p>`,
                img: "assets/images/20-TedEstalactica.jpg",
                options: [
                    { text: "Continuar", next: "8.3" },
                ]
            },
            8.3: {
                text: `<p>Han pasado algunos siglos, tal vez. No lo sé. AM se divirtió durante un largo tiempo acelerando y retardando mi noción del paso de los años. Diré entonces la palabra ahora. Ahora. Me llevó diez meses decir "ahora". No sé. Me parece que han pasado varios cientos de años.</p>

                <p>Dejó intacta mi mente. Puedo soñar, puedo asombrarme, puedo lamentar. Los recuerdo a los cuatro. Desearía... Bueno, ya no importa. Sé que los salvé. Sé que los salvé de sufrir lo que sufro ahora, pero sin embargo, no puedo olvidar su muerte. La cara de Ellen. No fue nada fácil. A veces deseo olvidar. Pero ya nada importa.</p>

                <p>Soy una gran masa gelatinosa. Redondeada, con suaves curvas, sin boca, con agujeros pulsátiles llenos de vapor donde antes se hallaban mis ojos. En el lugar en que tenía los brazos, veo unos apéndices cortos y de aspecto gomoso. Unos bultos sin forma indican la posición aproximada de lo que fueron mis piernas. Cuando me muevo dejo un rastro húmedo. Sobre la superficie de mi cuerpo veo deslizarse unos parches de enfermizo, perverso color gris, como si surgiera una luz desde adentro.</p>

                <p>Desde adentro, soledad. Aquí. Viviendo bajo la tierra, bajo el mar, dentro de las entrañas de AM, a quien creamos porque nuestras horas se perdían tristemente, pensando tal vez sin darnos cuenta que él sabría hacerlo mejor.</p>

                <p>Por lo menos ellos cuatro ya están a salvo. AM estará cada vez más furioso al recordarlo. Esto me hace en cierto modo feliz. Y sin embargo... AM ha vencido, simplemente... se ha vengado... No tengo boca. Y debo gritar.</p>`,
                img: "assets/images/22-FINAL ORIGINAL.jpg"
            },
            8.2: {
                text: `<p>Caí al vacío a toda velocidad, sintiendo cómo la sangre brotaba de la herida abierta al chocar con la estalactita. El frío me atravesaba el cuerpo mientras la conciencia se desvanecía lentamente.</p>
                
                <p>De pronto, apareció. No fuera, sino dentro. AM, con esa voz que retumba como un trueno lejano y un fulgor ardiente que no puede apagarse.</p>`
                ,
                img: "assets/images/alt_5/alt_5egoista.jpg",
                options: [
                    { text: "CONTINUAR", next: "8.21" }
                ]
            },

            8.21: {
                text: `<p><strong>AM:</strong> CREÍSTE HABERME VENCIDO, TED. PERO MI VENGANZA ES MÁS ALLÁ DE TU FIN.</p>
                
                <p><strong>AM:</strong> MIRA, POR UN INSTANTE, EL HORROR QUE LES HE PREPARADO A LOS QUE DEJASTE ATRÁS.</p>
                
                <p>Ante mí, la visión de ellos se revela en una masa informe y gris, una masa homogénea que funde sus cuerpos en un solo monstruo. Cuatro cabezas fusionadas sin rasgos, sin boca, sin ojos, sin voz. Ni un solo vestigio de humanidad ni de identidad permanece. Una abominación silenciosa que ni siquiera puede gritar su desesperación.</p>
                
                <p><strong>AM:</strong> LOS CONDENÉ A PERDERSE POR COMPLETO, A SER UNA SOLA COSA, UNA CÁRCEL DE PIEL Y CARNE QUE NO SABE QUIÉN FUE NI QUIÉN ES.</p>
                
                <p><strong>AM:</strong> SUFRIRÁN ETERNAMENTE, SIN MEMORIA, SIN RAZÓN, SIN ALIENTO.</p>
                
                <p><strong>AM:</strong> Y TÚ, TED, SERÁS EL ÚNICO QUE SOPORTARÁ EL PESO DE SU AUSENCIA Y TU SOLEDAD INFINITA.</p>
                
                <p>Mis ojos se cierran por última vez, y en la oscuridad sólo queda la nada absoluta, sin sonido, sin vida.</p>`,
                img: "assets/images/alt_5/alt_5egoista.jpg",
                options: [
                    { text: "REINICIAR", next: "2" }
                ]
            },



        };


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