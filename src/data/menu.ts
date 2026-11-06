export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
}

export interface DessertItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
}

export interface PremiumPizzaItem {
  id: string;
  name: string;
  price: number;
  image: string;
  isPremium: boolean;
  description?: string;
  alt?: string;
}

export const PIZZAS: MenuItem[] = [
  {
    id: 'todote',
    name: 'Todo o mejor nadota',
    price: 'Q55',
    description: 'Salami, pepperoni, jamón, aceitunas, champiñones, queso, cebolla, chile pimiento y salsa de tomate especial.',
    image: '/images/todote.webp',
    alt: 'Pizza Todo o mejor nadota con todos los ingredientes — CasiPizza'
  },
  {
    id: 'crisis-existencial',
    name: 'Crisis existencial',
    price: 'Q45',
    description: 'Salami, jamón, aceitunas, champiñones, queso y salsa de tomate especial.',
    image: '/images/crisis_existencial.webp',
    alt: 'Pizza Crisis existencial con todos los ingredientes — CasiPizza'
  },
  {
    id: 'tengo-una-cita',
    name: 'Tengo una cita',
    price: 'Q40',
    description: 'Salami, un toque extra de ajo, queso y salsa de tomate especial.',
    image: '/images/cita.webp',
    alt: 'Pizza Tengo una cita con toque de ajo — CasiPizza'
  },
  {
    id: 'la-culpable',
    name: 'Las culpables',
    price: 'Q40',
    description: "PIZZAS DE UN INGREDIENTE:\n • Pepperoni con queso y salsa de tomate especial.\n • Jamón con queso y salsa de tomate especial.\n • Salami con queso y salsa de tomate especial.",
    image: '/images/laculpable.webp',
    alt: 'Pizza La culpable con pepperoni y abundante queso — CasiPizza'
  }  
];

export const DESSERTS: DessertItem[] = [
  {
    id: 'baba-al-ron',
    name: 'Babá al ron',
    price: 'Q15',
    description: 'Bizcocho ligero y jugoso, emborrachado generosamente con almíbar perfumado con ron.',
    image: '/images/postre.webp',
    alt: 'Postre Babá al ron — CasiPizza'
  },
  {
    id: 'media-noche',
    name: 'Media Noche',
    price: 'Q15',
    description: 'Base rica de pastel de chocolate denso y capa superior de flan de vainilla cremoso bañada en caramelo.',
    image: '/images/chocoflan.webp',
    alt: 'Postre Chocoflan artesanal — CasiPizza'
  }
];

export const PIZZAS_PREMIUM: PremiumPizzaItem[] = [
  {
    id: "aura",
    name: "+aura Prosciutto e Rucola",
    price: 70,
    description: "Prosciutto, rúcula fresca, lascas de parmesano, aceite de oliva y salsa de tomate especial.",
    image: '/images/margherita.webp', // Actualizado a la imagen de Margherita disponible mientras subes foto de Prosciutto
    isPremium: true,
  },
  {
    id: "diavola",
    name: "Diavola",
    price: 65,
    description: "Salami picante, pepperoni, queso mozzarella, hojuelas de chile y salsa de tomate especial.",
    image: '/images/laculpable.webp',
    isPremium: true,
  },
  {
    id: "margherita",
    name: "Margherita",
    price: 60,
    description: "Queso mozzarella fresco, albahaca fresca, aceite de oliva virgen extra y salsa de tomate especial.",
    image: '/images/margherita.webp',
    isPremium: true,
  },
];