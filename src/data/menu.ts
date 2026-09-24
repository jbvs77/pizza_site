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

export const PIZZAS: MenuItem[] = [
  {
    id: 'la-culpable',
    name: 'La culpable',
    price: 'Q35',
    description: 'Pepperoni, queso y salsa de tomate especial.',
    image: '/images/laculpable.jpg',
    alt: 'Pizza La culpable con pepperoni y abundante queso — CasiPizza'
  },
  {
    id: 'crisis-existencial',
    name: 'Crisis existencial',
    price: 'Q40',
    description: 'Salami, pepperoni, jamón, aceitunas, champiñones, queso y salsa de tomate especial.',
    image: '/images/crisis_existencial.jpg',
    alt: 'Pizza Crisis existencial con todos los ingredientes — CasiPizza'
  },
  {
    id: 'tengo-una-cita',
    name: 'Tengo una cita',
    price: 'Q35',
    description: 'Salami, un toque extra de ajo, queso y salsa de tomate especial.',
    image: '/images/tengounacita.jpg',
    alt: 'Pizza Tengo una cita con toque de ajo — CasiPizza'
  }
];

export const DESSERTS: DessertItem[] = [
  {
    id: 'baba-al-ron',
    name: 'Babá al ron',
    price: 'Q10',
    description: 'Bizcocho ligero y jugoso, emborrachado generosamente con almíbar perfumado con ron.',
    image: '/images/postre.jpg',
    alt: 'Postre Babá al ron — CasiPizza'
  },
  {
    id: 'choco-flan',
    name: 'Choco flan',
    price: 'Q10',
    description: 'Base rica de pastel de chocolate denso y capa superior de flan de vainilla cremoso bañada en caramelo.',
    image: '/images/chocoflan.jpg',
    alt: 'Postre Choco flan artesanal — CasiPizza'
  }
];