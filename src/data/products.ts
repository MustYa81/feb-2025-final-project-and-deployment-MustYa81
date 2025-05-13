
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: 'men' | 'women' | 'unisex';
  type: 'casual' | 'sport' | 'formal';
  colors: string[];
  sizes: number[];
  description: string;
  features: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "shoe-001",
    name: "AirMax Runner",
    brand: "StepRight",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=842&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=774&auto=format&fit=crop"
    ],
    category: "men",
    type: "sport",
    colors: ["#FF5733", "#3498DB", "#2ECC71"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The AirMax Runner is the perfect blend of style and performance. Featuring our innovative air cushioning system and breathable mesh upper, these shoes are designed for serious runners who don't want to compromise on style.",
    features: [
      "Lightweight mesh upper for breathability",
      "Air cushioning system for superior comfort",
      "Durable rubber outsole for excellent traction",
      "Reflective details for visibility in low light",
      "Removable insole for custom orthotics"
    ],
    isNew: true
  },
  {
    id: "shoe-002",
    name: "Classic Urban",
    brand: "UrbanStep",
    price: 89.99,
    discountPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=843&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop"
    ],
    category: "unisex",
    type: "casual",
    colors: ["#000000", "#FFFFFF", "#D3D3D3"],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    description: "The Classic Urban sneaker is a timeless design that pairs perfectly with any casual outfit. Made with premium materials and attention to detail, these shoes are built to last while keeping you comfortable all day long.",
    features: [
      "Premium canvas upper",
      "Cushioned insole for all-day comfort",
      "Vulcanized rubber outsole for durability",
      "Classic lace-up design",
      "Signature branding details"
    ],
    isBestSeller: true
  },
  {
    id: "shoe-003",
    name: "EliteGlide Pro",
    brand: "StepRight",
    price: 159.99,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=774&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=687&auto=format&fit=crop"
    ],
    category: "women",
    type: "sport",
    colors: ["#FF69B4", "#9370DB", "#000000"],
    sizes: [5, 6, 7, 8, 9, 10],
    description: "The EliteGlide Pro is engineered for serious athletes. With our responsive cushioning technology and lightweight construction, these shoes deliver exceptional performance for your most demanding workouts and competitions.",
    features: [
      "Engineered knit upper for targeted support",
      "Responsive cushioning for energy return",
      "Anatomical heel design for natural fit",
      "Strategic rubber placement for durability and traction",
      "Lightweight construction for agility"
    ],
    isNew: true
  },
  {
    id: "shoe-004",
    name: "Oxford Elite",
    brand: "FormalStep",
    price: 179.99,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=812&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=764&auto=format&fit=crop"
    ],
    category: "men",
    type: "formal",
    colors: ["#8B4513", "#000000"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The Oxford Elite is the epitome of sophisticated footwear. Crafted from premium leather with meticulous attention to detail, these shoes are perfect for formal occasions or adding a touch of class to your business attire.",
    features: [
      "Full-grain leather upper",
      "Leather lining for comfort and durability",
      "Goodyear welted construction",
      "Memory foam insole for cushioning",
      "Hand-finished details"
    ]
  },
  {
    id: "shoe-005",
    name: "SoftWalk Comfort",
    brand: "ComfortPlus",
    price: 119.99,
    discountPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653514-4816335ffacc?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop"
    ],
    category: "women",
    type: "casual",
    colors: ["#FFC0CB", "#87CEEB", "#E6E6FA"],
    sizes: [5, 6, 7, 8, 9, 10],
    description: "The SoftWalk Comfort shoes are designed with your comfort in mind. With extra cushioning and support, these shoes are perfect for people who are on their feet all day or those who prioritize comfort without sacrificing style.",
    features: [
      "Memory foam footbed for plush comfort",
      "Arch support for healthy alignment",
      "Flexible outsole for natural movement",
      "Breathable lining to keep feet cool",
      "Wide toe box for comfort"
    ],
    isBestSeller: true
  },
  {
    id: "shoe-006",
    name: "TrailBlazer X",
    brand: "AdventureStep",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=812&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545639244-c2a4596c3e20?q=80&w=774&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=735&auto=format&fit=crop"
    ],
    category: "unisex",
    type: "sport",
    colors: ["#556B2F", "#8B4513", "#708090"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description: "The TrailBlazer X is built for outdoor adventures. With superior traction, waterproof construction, and durable materials, these shoes will keep you comfortable and secure on even the most challenging trails.",
    features: [
      "Waterproof membrane keeps feet dry",
      "Aggressive lug pattern for traction on varied terrain",
      "Rock guard for underfoot protection",
      "Padded collar and tongue for comfort",
      "Reinforced toe cap for durability"
    ]
  },
  {
    id: "shoe-007",
    name: "Stiletto Glam",
    brand: "GlamStep",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=880&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=812&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581101767113-7b6c54232458?q=80&w=880&auto=format&fit=crop"
    ],
    category: "women",
    type: "formal",
    colors: ["#FF0000", "#000000", "#C0C0C0"],
    sizes: [5, 6, 7, 8, 9, 10],
    description: "The Stiletto Glam heels are designed to make a statement. Featuring a sleek silhouette and premium materials, these heels are perfect for special occasions when you want to stand out and feel confident.",
    features: [
      "4-inch stiletto heel",
      "Cushioned footbed for comfort",
      "Non-slip outsole",
      "Padded insole for all-day wear",
      "Premium synthetic leather"
    ],
    isNew: true
  },
  {
    id: "shoe-008",
    name: "Canvas Everyday",
    brand: "UrbanStep",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=715&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=842&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653514-4816335ffacc?q=80&w=1587&auto=format&fit=crop"
    ],
    category: "unisex",
    type: "casual",
    colors: ["#FFFFFF", "#000000", "#FF5733", "#3498DB"],
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    description: "The Canvas Everyday sneakers are a wardrobe essential. With their simple design and comfortable fit, these versatile shoes pair perfectly with jeans, shorts, or casual dresses for an effortlessly cool look.",
    features: [
      "Durable canvas upper",
      "Cushioned footbed",
      "Flexible rubber outsole",
      "Reinforced toe cap",
      "Classic lace-up design"
    ],
    isBestSeller: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByType = (type: Product['type']): Product[] => {
  return products.filter(product => product.type === type);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};
