/**
 * Bilingual copy for the three landing concepts.
 *
 * Kept out of `messages/*.json` on purpose: these are competing design
 * directions, not shipped site chrome. When one wins, its block gets promoted
 * into the message catalogue and the rest are deleted with the routes.
 *
 * Follows the same colocated-copy pattern as `SisterProperty` in the brand
 * package. Seasonal and duration figures need the farm team's sign-off before
 * any of this is indexed.
 */

export type Locale = "en" | "es";

export const conceptIndex = [
  {
    slug: "ridgeline",
    letter: "A",
    image: "/images/Wine-sunset-2.jpg",
    dark: true,
  },
  {
    slug: "almanac",
    letter: "B",
    image: "/images/Retreat-top-lot-4.jpg",
    dark: false,
  },
  {
    slug: "terroir",
    letter: "C",
    image: "/images/TheRetreat.47.jpg",
    dark: true,
  },
] as const;

export type ConceptSlug = (typeof conceptIndex)[number]["slug"];

/* ------------------------------------------------------------------ hub ---- */

export const hubCopy = {
  en: {
    eyebrow: "Design directions",
    title: "Three ways to tell the same mountain",
    lede: "Each direction takes the identical content — three villas, twenty acres, the coffee, the Blue Zone — and commits to a different design principle. Same substance, three different arguments about what a guest should feel first.",
    how: "Open each one and scroll the whole page. The floating switcher moves between them without losing your place.",
    live: "Back to the current site",
    open: "Open direction",
    cards: {
      ridgeline: {
        tag: "Cinematic estate",
        title: "Ridgeline",
        body: "A film, not a brochure. Letterboxed dark stage, scrub-driven parallax, and a pinned horizontal reel of the three villas. Sells the feeling of arriving at dusk.",
        principle: "Sequence over grid",
      },
      almanac: {
        tag: "Editorial almanac",
        title: "Almanac",
        body: "Information as luxury. Paper ground, hairline rules, a real specification table for the villas and a twelve-month growing wheel. Sells competence and provenance.",
        principle: "Data over drama",
      },
      terroir: {
        tag: "Colour-field",
        title: "Terroir",
        body: "The land as colour. Each villa takes over the page bed with its own accent, oversized uppercase type, tickers and pills. Sells energy and modernity.",
        principle: "Colour over photography",
      },
    },
  },
  es: {
    eyebrow: "Direcciones de diseño",
    title: "Tres formas de contar la misma montaña",
    lede: "Cada dirección toma el mismo contenido — tres villas, veinte acres, el café, la Zona Azul — y se compromete con un principio de diseño distinto. La misma sustancia, tres argumentos diferentes sobre qué debe sentir primero un huésped.",
    how: "Abra cada una y recorra la página completa. El selector flotante permite cambiar entre ellas sin perder el lugar.",
    live: "Volver al sitio actual",
    open: "Abrir dirección",
    cards: {
      ridgeline: {
        tag: "Estancia cinematográfica",
        title: "Ridgeline",
        body: "Una película, no un folleto. Escenario oscuro en formato panorámico, parallax ligado al scroll y un carrete horizontal fijo con las tres villas. Vende la sensación de llegar al atardecer.",
        principle: "Secuencia antes que cuadrícula",
      },
      almanac: {
        tag: "Almanaque editorial",
        title: "Almanac",
        body: "La información como lujo. Fondo papel, filetes finos, una tabla real de especificaciones de las villas y una rueda de cultivo de doce meses. Vende solvencia y procedencia.",
        principle: "Datos antes que drama",
      },
      terroir: {
        tag: "Campo de color",
        title: "Terroir",
        body: "La tierra como color. Cada villa toma el fondo de la página con su propio acento, tipografía versal enorme, cintas y píldoras. Vende energía y modernidad.",
        principle: "Color antes que fotografía",
      },
    },
  },
} as const;

export const switcherCopy = {
  en: { label: "Direction", hub: "All three", a: "A · Ridgeline", b: "B · Almanac", c: "C · Terroir" },
  es: { label: "Dirección", hub: "Las tres", a: "A · Ridgeline", b: "B · Almanac", c: "C · Terroir" },
} as const;

/* --------------------------------------------------- A · Ridgeline --------- */

export const ridgelineCopy = {
  en: {
    meta: {
      title: "Luxury Villa Retreat near Sámara Beach, Costa Rica",
      description:
        "Three private villas with infinity pools on a twenty-acre organic coffee farm in Chinampas, Guanacaste — fifteen minutes from Sámara Beach. Farm-to-table dining, daily coffee tours, Blue Zone living.",
      keywords: [
        "luxury villa Sámara Costa Rica",
        "Guanacaste eco retreat",
        "private infinity pool villa Costa Rica",
        "coffee farm stay Costa Rica",
        "Blue Zone Nicoya accommodation",
        "farm to table Guanacaste",
      ],
    },
    nav: { land: "The land", stay: "The villas", ritual: "Coffee", guests: "Guests", book: "Check availability" },
    hero: {
      timecode: "20 acres · 1 farm · 3 villas",
      eyebrow: "Chinampas · Guanacaste · Costa Rica",
      title: "The mountain keeps its own hours",
      sub: "A luxury eco-retreat fifteen minutes above Sámara Beach, where three private villas sit inside a working organic coffee farm.",
      cue: "Scroll",
      ctaBook: "Check availability",
      ctaExplore: "See the villas",
    },
    logline:
      "Twenty acres of working farmland. Three private homes, each with its own infinity pool. Coffee grown on the slope you wake up to, and a kitchen that shops the hillside instead of a warehouse.",
    land: {
      chapter: "01",
      eyebrow: "The land",
      title: "A working farm, not a backdrop",
      body: "Fruit trees, chili, star fruit, plantain, lime and coffee grow across the property. Guests eat what the hillside is producing that week and take the rest home through Blue Mountain Farms.",
      stats: [
        { value: 20, label: "Acres of private land", suffix: "" },
        { value: 15, label: "Minutes to Sámara Beach", suffix: "" },
        { value: 3, label: "Private villas", suffix: "" },
        { value: 1, label: "Coffee plantation on site", suffix: "" },
      ],
    },
    villas: {
      chapter: "02",
      eyebrow: "The villas",
      title: "Three homes, one hillside",
      note: "Scroll to move through the reel",
      cta: "View residence",
      specs: { capacity: "Sleeps", bedrooms: "Bedrooms", pool: "Pool" },
      poolValue: "Private infinity",
    },
    ritual: {
      chapter: "03",
      eyebrow: "The ritual",
      title: "From slope to cup, before breakfast",
      paras: [
        "Walk the plantation with the team, pick what's ripe, and learn the part of Costa Rican coffee that never makes it onto a bag: the sorting, the patience, the roast.",
        "Then drink it on the terrace, looking at the trees it came from. Guests have called this the reason they came back.",
      ],
      specsLabel: "Tour detail",
    },
    shotlist: {
      chapter: "04",
      eyebrow: "Experiences",
      title: "Days shaped by the land",
    },
    guests: {
      chapter: "05",
      eyebrow: "Guests",
      title: "Words from the terrace",
    },
    route: {
      chapter: "06",
      eyebrow: "Getting here",
      title: "Closer than it feels",
      note: "We can arrange a private transfer from either airport.",
    },
    faq: {
      eyebrow: "Before you book",
      title: "Practical questions",
      items: [
        {
          q: "How far is The Retreat from Sámara Beach?",
          a: "About fifteen minutes by car. The property sits in the mountains above Chinampas, so you get beach access without beach-town noise.",
        },
        {
          q: "How do I get there from Liberia (LIR) airport?",
          a: "Roughly a two to two-and-a-half hour drive from Liberia, or four to four-and-a-half hours from San José (SJO). We can arrange a private transfer from either airport.",
        },
        {
          q: "Do all three villas have private pools?",
          a: "Yes. The Ledge Villa, The Retreat House and Mountain House each have their own private infinity pool facing the plantations.",
        },
        {
          q: "Is there internet fast enough to work?",
          a: "Yes — Starlink is available on the property, so remote work and video calls are practical even though you are on a mountain farm.",
        },
        {
          q: "Can we tour the coffee plantation?",
          a: "Coffee tours run daily. You walk the plantation, learn the process, and cup the roast grown on the property.",
        },
        {
          q: "Which villa suits a family?",
          a: "Mountain House. It has two bedrooms, sleeps four to six, and adds an outdoor kitchen plus direct access to the trails and river.",
        },
      ],
    },
    book: {
      eyebrow: "Reserve",
      title: "Pura vida is waiting",
      body: "Check dates below, or write to us directly and we will help you choose between the three.",
      ctaEnquire: "Enquire by email",
    },
    footer: { tagline: "Luxury eco-tourism in the Blue Zone", concept: "Design direction A · Ridgeline" },
  },
  es: {
    meta: {
      title: "Villas de lujo cerca de Playa Sámara, Costa Rica",
      description:
        "Tres villas privadas con piscina infinita en una finca orgánica de café de veinte acres en Chinampas, Guanacaste — a quince minutos de Playa Sámara. Cocina de la finca a la mesa, tours de café diarios y vida en la Zona Azul.",
      keywords: [
        "villa de lujo Sámara Costa Rica",
        "eco retiro Guanacaste",
        "villa con piscina infinita Costa Rica",
        "hospedaje finca de café Costa Rica",
        "Zona Azul Nicoya hospedaje",
        "de la finca a la mesa Guanacaste",
      ],
    },
    nav: { land: "La tierra", stay: "Las villas", ritual: "Café", guests: "Huéspedes", book: "Disponibilidad" },
    hero: {
      timecode: "20 acres · 1 finca · 3 villas",
      eyebrow: "Chinampas · Guanacaste · Costa Rica",
      title: "La montaña marca sus propias horas",
      sub: "Un eco-retiro de lujo a quince minutos sobre Playa Sámara, con tres villas privadas dentro de una finca orgánica de café en producción.",
      cue: "Baje",
      ctaBook: "Consultar disponibilidad",
      ctaExplore: "Ver las villas",
    },
    logline:
      "Veinte acres de tierra productiva. Tres casas privadas, cada una con su piscina infinita. Café cultivado en la ladera que ve al despertar y una cocina que se abastece del cerro, no de una bodega.",
    land: {
      chapter: "01",
      eyebrow: "La tierra",
      title: "Una finca de verdad, no un decorado",
      body: "Árboles frutales, chile, carambola, plátano, limón y café crecen por toda la propiedad. Los huéspedes comen lo que produce la ladera esa semana y llevan el resto a casa con Blue Mountain Farms.",
      stats: [
        { value: 20, label: "Acres de tierra privada", suffix: "" },
        { value: 15, label: "Minutos a Playa Sámara", suffix: "" },
        { value: 3, label: "Villas privadas", suffix: "" },
        { value: 1, label: "Cafetal en la propiedad", suffix: "" },
      ],
    },
    villas: {
      chapter: "02",
      eyebrow: "Las villas",
      title: "Tres casas, una ladera",
      note: "Baje para recorrer el carrete",
      cta: "Ver residencia",
      specs: { capacity: "Capacidad", bedrooms: "Habitaciones", pool: "Piscina" },
      poolValue: "Infinita privada",
    },
    ritual: {
      chapter: "03",
      eyebrow: "El ritual",
      title: "De la ladera a la taza, antes del desayuno",
      paras: [
        "Recorra el cafetal con el equipo, recoja lo que está maduro y conozca la parte del café costarricense que nunca llega a la bolsa: la selección, la paciencia, el tueste.",
        "Después tómelo en la terraza, mirando los árboles de donde salió. Hay huéspedes que dicen que por esto volvieron.",
      ],
      specsLabel: "Detalle del tour",
    },
    shotlist: {
      chapter: "04",
      eyebrow: "Experiencias",
      title: "Días moldeados por la tierra",
    },
    guests: {
      chapter: "05",
      eyebrow: "Huéspedes",
      title: "Palabras desde la terraza",
    },
    route: {
      chapter: "06",
      eyebrow: "Cómo llegar",
      title: "Más cerca de lo que parece",
      note: "Podemos coordinar traslado privado desde cualquiera de los dos aeropuertos.",
    },
    faq: {
      eyebrow: "Antes de reservar",
      title: "Preguntas prácticas",
      items: [
        {
          q: "¿A qué distancia está The Retreat de Playa Sámara?",
          a: "A unos quince minutos en carro. La propiedad está en las montañas sobre Chinampas, así que tiene acceso a la playa sin el ruido del pueblo.",
        },
        {
          q: "¿Cómo llego desde el aeropuerto de Liberia (LIR)?",
          a: "Entre dos y dos horas y media en carro desde Liberia, o cuatro a cuatro horas y media desde San José (SJO). Coordinamos traslado privado desde cualquiera de los dos.",
        },
        {
          q: "¿Las tres villas tienen piscina privada?",
          a: "Sí. The Ledge Villa, The Retreat House y Mountain House tienen cada una su piscina infinita privada frente a los cultivos.",
        },
        {
          q: "¿Hay internet suficiente para trabajar?",
          a: "Sí — hay Starlink en la propiedad, así que el trabajo remoto y las videollamadas funcionan bien aunque esté en una finca de montaña.",
        },
        {
          q: "¿Se puede recorrer el cafetal?",
          a: "Los tours de café son diarios. Recorre la plantación, conoce el proceso y prueba el tueste cultivado en la propiedad.",
        },
        {
          q: "¿Cuál villa es mejor para una familia?",
          a: "Mountain House. Tiene dos habitaciones, aloja de cuatro a seis personas y suma cocina exterior más acceso directo a los senderos y al río.",
        },
      ],
    },
    book: {
      eyebrow: "Reservar",
      title: "La pura vida lo espera",
      body: "Consulte fechas abajo o escríbanos directamente y le ayudamos a elegir entre las tres.",
      ctaEnquire: "Consultar por correo",
    },
    footer: { tagline: "Ecoturismo de lujo en la Zona Azul", concept: "Dirección de diseño A · Ridgeline" },
  },
} as const;

/* ----------------------------------------------------- B · Almanac --------- */

export const almanacCopy = {
  en: {
    meta: {
      title: "The Estate Almanac — Villas, Farm & Coffee in Guanacaste",
      description:
        "A full specification of The Retreat at Blue Mountain Farms: three villas compared side by side, twenty acres of organic farm, the coffee process, the growing calendar, and every travel time to Sámara, Liberia and San José.",
      keywords: [
        "Costa Rica villa specifications",
        "Guanacaste organic farm stay",
        "Sámara Beach villa comparison",
        "coffee plantation tour Guanacaste",
        "Nicoya Blue Zone retreat",
        "Costa Rica villa with private pool two bedrooms",
      ],
    },
    nav: { index: "Villa index", numbers: "The property", season: "Growing year", coffee: "Coffee", route: "Getting here", book: "Enquire" },
    masthead: {
      volume: "Vol. I",
      dateline: "Chinampas, Guanacaste · Costa Rica",
      eyebrow: "The estate almanac",
      title: "Three villas, twenty acres, and a written record of all of it",
      standfirst:
        "Most retreats ask you to trust a photograph. This is the whole specification instead: what each villa holds, what the farm is producing this month, how long the drive really takes, and what happens at dawn.",
      plate: "Plate I — the top lot at first light",
      facts: [
        { label: "Location", value: "Chinampas, Guanacaste" },
        { label: "Land", value: "20 private acres" },
        { label: "Residences", value: "3, each with pool" },
        { label: "To Sámara", value: "15 minutes" },
      ],
    },
    numbers: {
      eyebrow: "Section one",
      title: "The property, in numbers",
      note: "Figures are for the whole estate unless a villa is named.",
      stats: [
        { value: 20, suffix: "", label: "Acres of private land", detail: "Fruit trees, coffee, trails and river frontage" },
        { value: 3, suffix: "", label: "Private residences", detail: "Each with its own infinity pool" },
        { value: 15, suffix: " min", label: "To Sámara Beach", detail: "Also 25 minutes to Playa Carrillo" },
        { value: 6, suffix: "", label: "Maximum guests per villa", detail: "Mountain House, two bedrooms" },
      ],
    },
    index: {
      eyebrow: "Section two",
      title: "Villa index",
      note: "The same four questions, answered for all three residences.",
      columns: {
        name: "Residence",
        capacity: "Sleeps",
        bedrooms: "Bedrooms",
        best: "Best for",
        link: "Detail",
      },
      best: {
        "the-ledge-villa": "Couples wanting the view",
        "the-retreat-house": "Honeymoons and solitude",
        "mountain-house": "Families and long stays",
      },
      view: "Read the full entry",
    },
    entries: {
      eyebrow: "Section three",
      title: "The residences, entry by entry",
      plateLabel: "Plate",
      amenitiesLabel: "Included",
      cta: "Full residence detail",
    },
    season: {
      eyebrow: "Section four",
      title: "The growing year",
      note: "Select a month. Provisional — to be confirmed with the farm team before publication.",
      growingLabel: "In the ground",
      propertyLabel: "On the property",
      months: [
        { month: "January", growing: "Coffee harvest, citrus, chili, greens", onProperty: "Peak dry season. Clearest ocean views of the year." },
        { month: "February", growing: "Coffee harvest ends, citrus, star fruit", onProperty: "Roasting season. Best month for the plantation tour." },
        { month: "March", growing: "Mango sets, plantain, roots", onProperty: "Hot and dry. Pool weather from breakfast onward." },
        { month: "April", growing: "Mango, cashew fruit, greens", onProperty: "Last of the dry season. Trails are fast and open." },
        { month: "May", growing: "First rains, greens flush, herbs", onProperty: "The hillside turns green in about a week." },
        { month: "June", growing: "Mango finishes, squash, beans", onProperty: "Afternoon rain, bright mornings. Fewest guests." },
        { month: "July", growing: "Greens, herbs, roots, plantain", onProperty: "The short dry spell locals call veranillo." },
        { month: "August", growing: "Star fruit, greens, coffee cherries set", onProperty: "Green season at its fullest. River running well." },
        { month: "September", growing: "Roots, squash, herbs", onProperty: "Wettest weeks. Waterfalls at their best." },
        { month: "October", growing: "Coffee ripening, greens, citrus sets", onProperty: "Rain easing. Everything is loud and green." },
        { month: "November", growing: "Coffee harvest begins, citrus", onProperty: "The farm's busiest month. Pickers on the slope." },
        { month: "December", growing: "Coffee harvest, citrus, chili", onProperty: "Dry season returns. Wind picks up on the ridge." },
      ],
    },
    coffee: {
      eyebrow: "Section five",
      title: "Coffee, in four steps",
      steps: [
        { step: "01", title: "Walk the plantation", body: "Start on the slope with the team and learn to read a ripe cherry from an unripe one." },
        { step: "02", title: "Pick and sort", body: "Hand-pick, then sort — the step that separates a good lot from an ordinary one." },
        { step: "03", title: "Roast", body: "Watch the roast develop and learn why the same bean can taste like two different drinks." },
        { step: "04", title: "Cup it on the terrace", body: "Drink it in sight of the trees it grew on. Guests are sent home with a bag." },
      ],
    },
    ledger: {
      eyebrow: "Section six",
      title: "Guest ledger",
      note: "Recorded as written.",
    },
    route: {
      eyebrow: "Section seven",
      title: "Getting here",
      note: "Private transfer can be arranged from either international airport.",
      columns: { from: "From", time: "Journey" },
    },
    faq: {
      eyebrow: "Section eight",
      title: "Questions we are actually asked",
      items: [
        {
          q: "Which villa should I book for two people?",
          a: "The Retreat House is the studio built for two — private infinity pool, open-concept spa bathroom and a cordwood feature wall. The Ledge Villa also suits couples and adds a second balcony with both ocean and mountain views.",
        },
        {
          q: "Can the whole property be booked for a group or retreat?",
          a: "All three residences sit on the same twenty acres, so booking them together gives a group up to roughly a dozen guests with three private pools. Write to us with dates and we will put the combination together.",
        },
        {
          q: "What is the Blue Zone, and is this really in it?",
          a: "The Nicoya Peninsula is one of a handful of regions worldwide identified for unusual longevity. The Retreat sits in the mountains of that peninsula, fifteen minutes from Sámara Beach.",
        },
        {
          q: "Is food included, and where does it come from?",
          a: "The kitchen operates by arrangement rather than as a fixed restaurant. Produce, coffee and fruit come from the farm the villas sit on; the rest comes from the surrounding Chinampas area.",
        },
        {
          q: "What should we pack?",
          a: "Light layers, reef-safe sunscreen and shoes you can walk trails in. Check-in is 3:00 PM and check-out is 11:00 AM.",
        },
        {
          q: "Is a rental car necessary?",
          a: "It makes the beaches and the surrounding towns much easier. If you would rather not drive, we can arrange a private transfer in and help with trips out.",
        },
      ],
    },
    correspondence: {
      eyebrow: "Section nine",
      title: "Correspondence",
      body: "Send dates and we will answer with the villa that fits, not the one that is emptiest.",
      ctaEnquire: "Write to us",
    },
    colophon: {
      set: "Set in Newsreader and JetBrains Mono",
      concept: "Design direction B · Almanac",
      tagline: "Luxury eco-tourism in the Blue Zone",
    },
  },
  es: {
    meta: {
      title: "El almanaque de la finca — Villas, campo y café en Guanacaste",
      description:
        "La especificación completa de The Retreat at Blue Mountain Farms: tres villas comparadas lado a lado, veinte acres de finca orgánica, el proceso del café, el calendario de cultivo y todos los tiempos de viaje a Sámara, Liberia y San José.",
      keywords: [
        "especificaciones villa Costa Rica",
        "hospedaje finca orgánica Guanacaste",
        "comparación villas Playa Sámara",
        "tour cafetal Guanacaste",
        "retiro Zona Azul Nicoya",
        "villa con piscina privada dos habitaciones Costa Rica",
      ],
    },
    nav: { index: "Índice de villas", numbers: "La propiedad", season: "Año agrícola", coffee: "Café", route: "Cómo llegar", book: "Consultar" },
    masthead: {
      volume: "Vol. I",
      dateline: "Chinampas, Guanacaste · Costa Rica",
      eyebrow: "El almanaque de la finca",
      title: "Tres villas, veinte acres y un registro escrito de todo",
      standfirst:
        "Casi todos los retiros le piden confiar en una fotografía. Esto es la especificación completa: qué tiene cada villa, qué produce la finca este mes, cuánto dura de verdad el viaje y qué pasa al amanecer.",
      plate: "Lámina I — el lote alto con la primera luz",
      facts: [
        { label: "Ubicación", value: "Chinampas, Guanacaste" },
        { label: "Terreno", value: "20 acres privados" },
        { label: "Residencias", value: "3, cada una con piscina" },
        { label: "A Sámara", value: "15 minutos" },
      ],
    },
    numbers: {
      eyebrow: "Sección uno",
      title: "La propiedad, en números",
      note: "Las cifras son de toda la finca salvo que se nombre una villa.",
      stats: [
        { value: 20, suffix: "", label: "Acres de tierra privada", detail: "Frutales, café, senderos y frente de río" },
        { value: 3, suffix: "", label: "Residencias privadas", detail: "Cada una con su piscina infinita" },
        { value: 15, suffix: " min", label: "A Playa Sámara", detail: "También 25 minutos a Playa Carrillo" },
        { value: 6, suffix: "", label: "Huéspedes máximo por villa", detail: "Mountain House, dos habitaciones" },
      ],
    },
    index: {
      eyebrow: "Sección dos",
      title: "Índice de villas",
      note: "Las mismas cuatro preguntas, respondidas para las tres residencias.",
      columns: {
        name: "Residencia",
        capacity: "Capacidad",
        bedrooms: "Habitaciones",
        best: "Ideal para",
        link: "Detalle",
      },
      best: {
        "the-ledge-villa": "Parejas que quieren la vista",
        "the-retreat-house": "Lunas de miel y silencio",
        "mountain-house": "Familias y estadías largas",
      },
      view: "Leer la ficha completa",
    },
    entries: {
      eyebrow: "Sección tres",
      title: "Las residencias, ficha por ficha",
      plateLabel: "Lámina",
      amenitiesLabel: "Incluye",
      cta: "Detalle completo",
    },
    season: {
      eyebrow: "Sección cuatro",
      title: "El año agrícola",
      note: "Elija un mes. Provisional — a confirmar con el equipo de la finca antes de publicar.",
      growingLabel: "En la tierra",
      propertyLabel: "En la propiedad",
      months: [
        { month: "Enero", growing: "Cosecha de café, cítricos, chile, verduras", onProperty: "Plena estación seca. Las vistas más claras del año." },
        { month: "Febrero", growing: "Termina la cosecha de café, cítricos, carambola", onProperty: "Temporada de tueste. El mejor mes para el tour." },
        { month: "Marzo", growing: "Cuaja el mango, plátano, raíces", onProperty: "Caliente y seco. Clima de piscina desde el desayuno." },
        { month: "Abril", growing: "Mango, marañón, verduras", onProperty: "Último tramo seco. Los senderos están abiertos y firmes." },
        { month: "Mayo", growing: "Primeras lluvias, brote de verduras, hierbas", onProperty: "La ladera se pone verde en cuestión de una semana." },
        { month: "Junio", growing: "Termina el mango, ayote, frijoles", onProperty: "Lluvia de tarde, mañanas claras. Menos huéspedes." },
        { month: "Julio", growing: "Verduras, hierbas, raíces, plátano", onProperty: "El veranillo, la pausa seca de medio año." },
        { month: "Agosto", growing: "Carambola, verduras, cuaja el café", onProperty: "Estación verde en su punto. El río corre bien." },
        { month: "Septiembre", growing: "Raíces, ayote, hierbas", onProperty: "Las semanas más lluviosas. Cataratas en su mejor momento." },
        { month: "Octubre", growing: "Madura el café, verduras, cuajan cítricos", onProperty: "Baja la lluvia. Todo suena y todo está verde." },
        { month: "Noviembre", growing: "Empieza la cosecha de café, cítricos", onProperty: "El mes más ocupado de la finca. Recolectores en la ladera." },
        { month: "Diciembre", growing: "Cosecha de café, cítricos, chile", onProperty: "Vuelve la estación seca. Sube el viento en la cresta." },
      ],
    },
    coffee: {
      eyebrow: "Sección cinco",
      title: "El café, en cuatro pasos",
      steps: [
        { step: "01", title: "Recorrer el cafetal", body: "Comience en la ladera con el equipo y aprenda a distinguir un grano maduro de uno verde." },
        { step: "02", title: "Recoger y seleccionar", body: "A mano, y luego la selección — el paso que separa un buen lote de uno corriente." },
        { step: "03", title: "Tostar", body: "Vea desarrollarse el tueste y entienda por qué un mismo grano puede dar dos bebidas distintas." },
        { step: "04", title: "Probarlo en la terraza", body: "Tómelo a la vista de los árboles donde creció. Cada huésped se va con una bolsa." },
      ],
    },
    ledger: {
      eyebrow: "Sección seis",
      title: "Libro de huéspedes",
      note: "Transcrito tal cual.",
    },
    route: {
      eyebrow: "Sección siete",
      title: "Cómo llegar",
      note: "Se puede coordinar traslado privado desde cualquiera de los aeropuertos internacionales.",
      columns: { from: "Desde", time: "Viaje" },
    },
    faq: {
      eyebrow: "Sección ocho",
      title: "Preguntas que de verdad nos hacen",
      items: [
        {
          q: "¿Cuál villa reservo para dos personas?",
          a: "The Retreat House es el estudio hecho para dos — piscina infinita privada, baño spa de concepto abierto y una pared de cordwood. The Ledge Villa también funciona para parejas y suma un segundo balcón con vista al mar y a la montaña.",
        },
        {
          q: "¿Se puede reservar toda la propiedad para un grupo o un retiro?",
          a: "Las tres residencias están en los mismos veinte acres, así que reservarlas juntas da cabida a una docena de huéspedes con tres piscinas privadas. Escríbanos con las fechas y armamos la combinación.",
        },
        {
          q: "¿Qué es la Zona Azul y esto está de verdad en ella?",
          a: "La Península de Nicoya es una de las pocas regiones del mundo identificadas por su longevidad excepcional. The Retreat está en las montañas de esa península, a quince minutos de Playa Sámara.",
        },
        {
          q: "¿La comida está incluida y de dónde viene?",
          a: "La cocina funciona por coordinación previa, no como restaurante fijo. Las verduras, el café y la fruta salen de la finca donde están las villas; el resto viene de los alrededores de Chinampas.",
        },
        {
          q: "¿Qué debemos llevar?",
          a: "Capas ligeras, protector solar reef-safe y zapatos para caminar senderos. La entrada es a las 3:00 PM y la salida a las 11:00 AM.",
        },
        {
          q: "¿Hace falta carro alquilado?",
          a: "Hace mucho más fáciles las playas y los pueblos cercanos. Si prefiere no conducir, coordinamos el traslado de llegada y ayudamos con las salidas.",
        },
      ],
    },
    correspondence: {
      eyebrow: "Sección nueve",
      title: "Correspondencia",
      body: "Mándenos las fechas y le respondemos con la villa que corresponde, no con la que esté más vacía.",
      ctaEnquire: "Escríbanos",
    },
    colophon: {
      set: "Compuesto en Newsreader y JetBrains Mono",
      concept: "Dirección de diseño B · Almanac",
      tagline: "Ecoturismo de lujo en la Zona Azul",
    },
  },
} as const;

/* ----------------------------------------------------- C · Terroir --------- */

export const terroirCopy = {
  en: {
    meta: {
      title: "Blue Zone Villas on a Working Coffee Farm · Guanacaste",
      description:
        "Three colour-coded private villas on twenty organic acres above Sámara Beach, Costa Rica. Infinity pools, coffee grown on site, trails to the river, and the Nicoya Blue Zone at the door.",
      keywords: [
        "Blue Zone villas Costa Rica",
        "villas near Sámara Beach",
        "Nosara Nicoya luxury stay",
        "organic farm villa Guanacaste",
        "Playa Carrillo accommodation",
        "Costa Rica coffee farm retreat",
      ],
    },
    nav: { villas: "Villas", farm: "Farm", coffee: "Coffee", nearby: "Nearby", book: "Book" },
    hero: {
      eyebrow: "Chinampas · Guanacaste",
      titleA: "How will you",
      titleB: "pura vida?",
      body: "Three private villas with infinity pools, twenty acres of organic farm, and one coffee plantation — fifteen minutes above Sámara Beach.",
      cta1: "Check availability",
      cta2: "Pick your villa",
    },
    ticker: [
      "20 acres",
      "3 private pools",
      "Coffee grown on site",
      "15 min to Sámara",
      "Nicoya Blue Zone",
      "Farm-to-table kitchen",
      "Starlink wifi",
      "Trails to the river",
    ],
    pillars: {
      eyebrow: "Three reasons",
      title: "Stay, farm, ritual",
      items: [
        { index: "01", title: "Stay", body: "Three homes, three moods, three private infinity pools. Nobody shares a wall or a view." },
        { index: "02", title: "Farm", body: "Twenty working acres of coffee, fruit and vegetables. You eat what the hillside made this week." },
        { index: "03", title: "Ritual", body: "Coffee tours daily, trails to the river, a fire at the viewpoint, and the beach fifteen minutes down." },
      ],
    },
    villas: {
      eyebrow: "The villas",
      title: "Pick your colour",
      cta: "View residence",
      sleeps: "Sleeps",
      bedrooms: "Bedrooms",
      pool: "Private infinity pool",
    },
    experiences: {
      eyebrow: "Experiences",
      title: "Days shaped by the land",
      note: "Drag or scroll",
    },
    coffee: {
      eyebrow: "Coffee",
      title: "Grown on the slope you wake up to",
      quote: "In the morning we drank coffee grown right onsite, a gift from our hosts.",
      attrib: "Drew · returning guest",
    },
    guests: { eyebrow: "Guests", title: "Words from the terrace" },
    nearby: {
      eyebrow: "The neighbourhood",
      title: "What is within reach",
      body: "The Retreat sits in the mountains above Chinampas, which puts most of the Nicoya Peninsula inside a comfortable drive.",
      places: [
        { name: "Sámara Beach", detail: "15 minutes · swimming, surf lessons, restaurants" },
        { name: "Playa Carrillo", detail: "25 minutes · palm-lined and quiet" },
        { name: "Playa Buena Vista", detail: "20 minutes · wide sand, sunset walks" },
        { name: "Nosara", detail: "About an hour · surf and yoga" },
        { name: "Barra Honda National Park", detail: "Day trip · caves and lookout trails" },
        { name: "Nicoya", detail: "45 minutes · the Blue Zone's market town" },
      ],
    },
    faq: {
      eyebrow: "Good to know",
      title: "Quick answers",
      items: [
        {
          q: "Where exactly is the property?",
          a: "In the mountains of Chinampas, Guanacaste, on the Nicoya Peninsula — fifteen minutes from Sámara Beach and about twenty-five from Playa Carrillo.",
        },
        {
          q: "Which beaches are closest?",
          a: "Sámara at fifteen minutes, Playa Buena Vista at about twenty, and Playa Carrillo at about twenty-five. Nosara is roughly an hour away.",
        },
        {
          q: "How many people can the property hold?",
          a: "Each villa is booked separately: two to four at The Ledge Villa, two at The Retreat House, and four to six at Mountain House. Taken together the estate hosts a small group with three private pools.",
        },
        {
          q: "Do you host retreats, weddings or events?",
          a: "The twenty acres, three residences and farm kitchen work well for small retreats and gatherings. Write to us with dates and numbers and we will tell you honestly whether it fits.",
        },
        {
          q: "Is it walkable, or do we need a car?",
          a: "The property itself is walkable — trails, river, viewpoint and plantation. For the beaches and towns you will want a car or a transfer, which we can arrange.",
        },
      ],
    },
    close: {
      title: "Come see the ridge",
      body: "Three villas, twenty acres, one hillside of coffee. Pick your dates and we will do the rest.",
      primary: "Check availability",
      secondary: "Enquire by email",
    },
    footer: { tagline: "Luxury eco-tourism in the Blue Zone", concept: "Design direction C · Terroir" },
  },
  es: {
    meta: {
      title: "Villas en la Zona Azul sobre una finca de café · Guanacaste",
      description:
        "Tres villas privadas con identidad de color en veinte acres orgánicos sobre Playa Sámara, Costa Rica. Piscinas infinitas, café cultivado en la propiedad, senderos al río y la Zona Azul de Nicoya en la puerta.",
      keywords: [
        "villas Zona Azul Costa Rica",
        "villas cerca de Playa Sámara",
        "hospedaje de lujo Nosara Nicoya",
        "villa finca orgánica Guanacaste",
        "hospedaje Playa Carrillo",
        "retiro finca de café Costa Rica",
      ],
    },
    nav: { villas: "Villas", farm: "Finca", coffee: "Café", nearby: "Cerca", book: "Reservar" },
    hero: {
      eyebrow: "Chinampas · Guanacaste",
      titleA: "¿Cómo vivirá su",
      titleB: "pura vida?",
      body: "Tres villas privadas con piscina infinita, veinte acres de finca orgánica y un cafetal — a quince minutos sobre Playa Sámara.",
      cta1: "Consultar disponibilidad",
      cta2: "Elija su villa",
    },
    ticker: [
      "20 acres",
      "3 piscinas privadas",
      "Café de la propiedad",
      "15 min a Sámara",
      "Zona Azul de Nicoya",
      "Cocina de la finca a la mesa",
      "Wifi Starlink",
      "Senderos al río",
    ],
    pillars: {
      eyebrow: "Tres razones",
      title: "Hospedaje, finca, ritual",
      items: [
        { index: "01", title: "Hospedaje", body: "Tres casas, tres ánimos, tres piscinas infinitas privadas. Nadie comparte pared ni vista." },
        { index: "02", title: "Finca", body: "Veinte acres en producción de café, fruta y verdura. Come lo que dio la ladera esta semana." },
        { index: "03", title: "Ritual", body: "Tours de café diarios, senderos al río, fogata en el mirador y la playa quince minutos abajo." },
      ],
    },
    villas: {
      eyebrow: "Las villas",
      title: "Elija su color",
      cta: "Ver residencia",
      sleeps: "Capacidad",
      bedrooms: "Habitaciones",
      pool: "Piscina infinita privada",
    },
    experiences: {
      eyebrow: "Experiencias",
      title: "Días moldeados por la tierra",
      note: "Arrastre o baje",
    },
    coffee: {
      eyebrow: "Café",
      title: "Cultivado en la ladera que ve al despertar",
      quote: "En la mañana tomamos café cultivado ahí mismo, un regalo de nuestros anfitriones.",
      attrib: "Drew · huésped que volvió",
    },
    guests: { eyebrow: "Huéspedes", title: "Palabras desde la terraza" },
    nearby: {
      eyebrow: "El vecindario",
      title: "Qué queda cerca",
      body: "The Retreat está en las montañas sobre Chinampas, lo que deja buena parte de la Península de Nicoya a una distancia cómoda en carro.",
      places: [
        { name: "Playa Sámara", detail: "15 minutos · nadar, clases de surf, restaurantes" },
        { name: "Playa Carrillo", detail: "25 minutos · palmeras y tranquilidad" },
        { name: "Playa Buena Vista", detail: "20 minutos · arena amplia, caminatas al atardecer" },
        { name: "Nosara", detail: "Cerca de una hora · surf y yoga" },
        { name: "Parque Nacional Barra Honda", detail: "Paseo de un día · cavernas y miradores" },
        { name: "Nicoya", detail: "45 minutos · el pueblo de mercado de la Zona Azul" },
      ],
    },
    faq: {
      eyebrow: "Bueno saber",
      title: "Respuestas rápidas",
      items: [
        {
          q: "¿Dónde queda exactamente la propiedad?",
          a: "En las montañas de Chinampas, Guanacaste, en la Península de Nicoya — a quince minutos de Playa Sámara y unos veinticinco de Playa Carrillo.",
        },
        {
          q: "¿Cuáles playas quedan más cerca?",
          a: "Sámara a quince minutos, Playa Buena Vista a unos veinte y Playa Carrillo a unos veinticinco. Nosara está más o menos a una hora.",
        },
        {
          q: "¿Cuánta gente cabe en la propiedad?",
          a: "Cada villa se reserva aparte: de dos a cuatro en The Ledge Villa, dos en The Retreat House y de cuatro a seis en Mountain House. Juntas, la finca recibe a un grupo pequeño con tres piscinas privadas.",
        },
        {
          q: "¿Reciben retiros, bodas o eventos?",
          a: "Los veinte acres, las tres residencias y la cocina de la finca funcionan bien para retiros y reuniones pequeñas. Escríbanos con fechas y cantidad de personas y le decimos con honestidad si calza.",
        },
        {
          q: "¿Se puede caminar o hace falta carro?",
          a: "La propiedad se recorre a pie — senderos, río, mirador y cafetal. Para las playas y los pueblos conviene carro o traslado, que podemos coordinar.",
        },
      ],
    },
    close: {
      title: "Venga a ver la cresta",
      body: "Tres villas, veinte acres, una ladera de café. Elija las fechas y nosotros hacemos el resto.",
      primary: "Consultar disponibilidad",
      secondary: "Consultar por correo",
    },
    footer: { tagline: "Ecoturismo de lujo en la Zona Azul", concept: "Dirección de diseño C · Terroir" },
  },
} as const;
