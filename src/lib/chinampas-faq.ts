import type { FaqItem } from "@bluemountain/brand";
import { almanacCopy, terroirCopy } from "./concept-copy";

export type Locale = "en" | "es";

/** Mirador / Finca / Casa — shared practical block on the preview concepts */
const practicalEn: FaqItem[] = [
  {
    q: "How far is Hacienda Chinampas from Sámara Beach?",
    a: "About fifteen minutes by car. The village is Chinampas. Sámara Beach is down the mountain when you want the sand — not the address on the gate.",
  },
  {
    q: "How do I get there from Liberia (LIR) or San José (SJO)?",
    a: "Roughly two to two-and-a-half hours from Liberia, or four to four-and-a-half hours from San José. We can arrange a private transfer from either airport. The last stretch is mountain road; 4x4 helps in the wet months.",
  },
  {
    q: "Do the villas have pools and internet?",
    a: "Villa 1, Villa 3, and Villa 4 each have a private pool. Villa 5 is a studio among the coffee trees, without a pool. Starlink is on the property, so remote work is practical on the mountain.",
  },
  {
    q: "Is it suitable for families?",
    a: "Yes. Travelers come as couples, families, and returning neighbors. Tell us the size of the party when you book and we will help you choose among the four villas that are ready.",
  },
  {
    q: "Can I order groceries before I arrive?",
    a: "Yes. Blue Mountain Farms delivers grocery packages for arrival day. Order at bluemountainfarms.cr or message +506 7214 2346 on WhatsApp for the current catalog.",
  },
  {
    q: "What should I know about the septic system?",
    a: "Our villas operate on a septic system. To protect the system and the environment, please do not flush toilet paper, feminine hygiene products, or any other materials. Trash bins are provided in every bathroom.",
  },
  {
    q: "Where does the profit from my stay go?",
    a: "Hacienda Chinampas sits with The Foundation Latin America. A stay is a way to be on the mountain with the village of Chinampas. Giving itself happens on the foundation site, not here.",
  },
];

const practicalEs: FaqItem[] = [
  {
    q: "¿A qué distancia está Hacienda Chinampas de Playa Sámara?",
    a: "A unos quince minutos en carro. El pueblo es Chinampas. Playa Sámara queda abajo en la montaña cuando quiere la playa — no es la dirección del portón.",
  },
  {
    q: "¿Cómo llego desde Liberia (LIR) o San José (SJO)?",
    a: "Entre dos y dos horas y media desde Liberia, o cuatro a cuatro horas y media desde San José. Coordinamos traslado privado desde cualquiera de los dos. El último tramo es camino de montaña; 4x4 ayuda en temporada lluviosa.",
  },
  {
    q: "¿Las villas tienen piscina e internet?",
    a: "Villa 1, Villa 3 y Villa 4 tienen piscina privada. Villa 5 es un estudio entre los cafetales, sin piscina. Hay Starlink en la propiedad, así que el trabajo remoto es práctico en la montaña.",
  },
  {
    q: "¿Es adecuado para familias?",
    a: "Sí. Llegan parejas, familias y vecinos que regresan. Cuéntenos el tamaño del grupo al reservar y le ayudamos a elegir entre las cuatro villas listas.",
  },
  {
    q: "¿Puedo pedir víveres antes de llegar?",
    a: "Sí. Blue Mountain Farms entrega paquetes de víveres para el día de llegada. Pida en bluemountainfarms.cr o escriba al +506 7214 2346 por WhatsApp para el catálogo actual.",
  },
  {
    q: "¿Qué debo saber del sistema séptico?",
    a: "Las villas usan sistema séptico. Para proteger el sistema y el entorno, no tire papel higiénico, productos de higiene ni otros materiales al inodoro. Hay botes de basura en cada baño.",
  },
  {
    q: "¿A dónde va la ganancia de mi estadía?",
    a: "Hacienda Chinampas está con The Foundation Latin America. Una estadía es una forma de estar en la montaña con el pueblo de Chinampas. La donación en sí ocurre en el sitio de la fundación, no aquí.",
  },
];

const terroirQuickEn: FaqItem[] = [
  ...terroirCopy.en.faq.items.slice(0, 2),
  {
    q: "How many people can the property hold?",
    a: "Each villa is booked separately. Villa 1 sleeps up to four; Villas 3, 4, and 5 are studios for two. Together the hillside hosts a small group across four ready villas and three private pools.",
  },
  ...terroirCopy.en.faq.items.slice(3),
];

const terroirQuickEs: FaqItem[] = [
  ...terroirCopy.es.faq.items.slice(0, 2),
  {
    q: "¿Cuántas personas puede recibir la propiedad?",
    a: "Cada villa se reserva por separado. Villa 1 recibe hasta cuatro; las Villas 3, 4 y 5 son estudios para dos. Juntas, la ladera recibe un grupo pequeño en cuatro villas listas y tres piscinas privadas.",
  },
  ...terroirCopy.es.faq.items.slice(3),
];

export function chinampasFaqGroups(locale: Locale) {
  const practical = locale === "es" ? practicalEs : practicalEn;
  return {
    almanac: {
      eyebrow: locale === "es" ? "Sección ocho" : "Section eight",
      title:
        locale === "es"
          ? "Preguntas que de verdad nos hacen"
          : almanacCopy.en.faq.title,
      items: almanacCopy[locale].faq.items,
    },
    quickAnswers: {
      eyebrow: terroirCopy[locale].faq.eyebrow,
      title: terroirCopy[locale].faq.title,
      items: locale === "es" ? terroirQuickEs : terroirQuickEn,
    },
    beforeMountain: {
      eyebrow: locale === "es" ? "Bueno saber" : "Good to know",
      title:
        locale === "es"
          ? "Antes de subir la montaña"
          : "Before you come up the mountain",
      items: practical,
    },
    practical: {
      eyebrow: locale === "es" ? "Bueno saber" : "Good to know",
      title: locale === "es" ? "La parte práctica" : "The practical part",
      items: practical,
    },
    casa: {
      eyebrow: locale === "es" ? "Bueno saber" : "Good to know",
      title: locale === "es" ? "Antes de reservar" : "Before you book",
      items: practical,
    },
  };
}
