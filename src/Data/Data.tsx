export interface PropsAllFoods {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  description: string;
}

export const AllFoods: PropsAllFoods[] = [
  {
    id: 1,
    title: "Pizza Margherita",
    category: "Pizza e Hamburguer",
    price: 12.99,
    img: "pizza-margherita.jpg",
    description:
      "Uma pizza clássica italiana com molho de tomate, mussarela, manjericão e azeite de oliva.",
  },
  {
    id: 2,
    title: "Hambúrguer Clássico",
    category: "Pizza e Hamburguer",
    price: 9.99,
    img: "hamburguer-classico.jpg",
    description:
      "Um suculento hambúrguer de carne bovina com alface, tomate, queijo cheddar e molho especial.",
  },
  {
    id: 3,
    title: "Massa à Carbonara",
    category: "Massas",
    price: 10.99,
    img: "massa-carbonara.jpg",
    description:
      "Espaguete cozido al dente com molho à base de ovos, queijo parmesão, pancetta e pimenta preta.",
  },
  {
    id: 4,
    title: "Torta de Maçã",
    category: "Sobremesas",
    price: 6.99,
    img: "torta-maca.jpg",
    description:
      "Uma deliciosa torta de maçã caseira com uma crosta de massa folhada.",
  },
  {
    id: 5,
    title: "Lasanha de Frango",
    category: "Massas",
    price: 11.99,
    img: "lasanha-frango.jpg",
    description:
      "Uma lasanha deliciosa feita com camadas de massa, molho de tomate, queijo e frango desfiado.",
  },
  {
    id: 6,
    title: "Sorvete de Chocolate",
    category: "Sobremesas",
    price: 4.99,
    img: "sorvete-chocolate.jpg",
    description:
      "Uma sobremesa refrescante com sorvete de chocolate e cobertura de calda de chocolate.",
  },
  {
    id: 7,
    title: "Pizza Vegetariana",
    category: "Pizza e Hamburguer",
    price: 13.99,
    img: "pizza-vegetariana.jpg",
    description:
      "Uma pizza vegetariana com molho de tomate, queijo, pimentão, cogumelos e azeitonas.",
  },
  {
    id: 8,
    title: "Cheeseburger Duplo",
    category: "Pizza e Hamburguer",
    price: 11.99,
    img: "cheeseburger-duplo.jpg",
    description:
      "Um hambúrguer duplo com queijo, alface, tomate e maionese especial.",
  },
  {
    id: 9,
    title: "Sushi Variado",
    category: "Outros Pratos",
    price: 15.99,
    img: "sushi-variado.jpg",
    description:
      "Um conjunto de sushi fresco, incluindo nigiri, sashimi e rolos de maki.",
  },
  {
    id: 10,
    title: "Salada César",
    category: "Outros Pratos",
    price: 7.99,
    img: "salada-cesar.jpg",
    description:
      "Uma salada fresca com alface romana, croutons, queijo parmesão e molho Caesar.",
  },
  {
    id: 11,
    title: "Tacos de Camarão",
    category: "Outros Pratos",
    price: 11.99,
    img: "tacos-camarao.jpg",
    description:
      "Tacos de camarão grelhado com abacate, coentro e molho picante.",
  },
  {
    id: 12,
    title: "Sopa de Tomate",
    category: "Outros Pratos",
    price: 5.99,
    img: "sopa-tomate.jpg",
    description: "Uma sopa de tomate caseira com manjericão e croutons.",
  },
  {
    id: 13,
    title: "Salmão Grelhado",
    category: "Outros Pratos",
    price: 14.99,
    img: "salmao-grelhado.jpg",
    description:
      "Filé de salmão grelhado servido com legumes frescos e molho de limão.",
  },
  {
    id: 14,
    title: "Torta de Limão",
    category: "sobremesa",
    price: 8.99,
    img: "torta-limao.jpg",
    description: "Uma deliciosa torta de limão caseira com uma crosta de massa folhada."
  },
];
