export const PRODUCTS = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    price: 45,
    description: 'Ripe, juicy tomatoes fresh from farm. Rich in vitamins and antioxidants.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 100,
    image: 'https://abcfruits.com/wp-content/uploads/2022/08/14.png',
    rating: 4.5,
    reviews: 156
  },
  {
    id: 2,
    name: 'Potatoes',
    price: 35,
    description: 'High-quality potatoes, perfect for cooking. Rich source of carbohydrates.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 150,
    image: 'https://m.media-amazon.com/images/I/51QxYlvGtbL._AC_UF894,1000_QL80_.jpg',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 3,
    name: 'Onions',
    price: 40,
    description: 'Fresh yellow onions with great flavor. Essential for daily cooking.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 120,
    image: 'https://images.unsplash.com/photo-1618512496248-a01a9a8e8e13?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 178
  },
  {
    id: 4,
    name: 'Bell Peppers',
    price: 60,
    description: 'Colorful bell peppers - red, yellow, and green. Rich in vitamin C.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 80,
    image: 'https://images.unsplash.com/photo-1561136594-7f68413e8b7b?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 142
  },
  {
    id: 5,
    name: 'Carrots',
    price: 30,
    description: 'Sweet and crunchy carrots. Excellent source of beta-carotene.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 110,
    image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 189
  },

  // Fruits
  {
    id: 6,
    name: 'Fresh Bananas',
    price: 50,
    description: 'Golden yellow bananas. Rich in potassium and natural energy.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 200,
    image: 'https://images.unsplash.com/photo-1603833665858-e61e17a86224?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 256
  },
  {
    id: 7,
    name: 'Apples',
    price: 120,
    description: 'Crisp red apples. One apple a day keeps the doctor away!',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 90,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 198
  },
  {
    id: 8,
    name: 'Oranges',
    price: 80,
    description: 'Juicy oranges packed with vitamin C. Perfect for fresh juice.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 130,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 167
  },
  {
    id: 9,
    name: 'Grapes',
    price: 150,
    description: 'Sweet purple grapes. Perfect for snacking and salads.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 70,
    image: 'https://images.unsplash.com/photo-1537640518143-67d2f9e1a2f4?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 134
  },
  {
    id: 10,
    name: 'Watermelon',
    price: 200,
    description: 'Refreshing watermelon. Perfect for summer hydration.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 145
  },

  // Dairy & Eggs
  {
    id: 11,
    name: 'Fresh Milk',
    price: 55,
    description: '1L bottle of fresh dairy milk. Pure and nutritious.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 250,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7977e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 312
  },
  {
    id: 12,
    name: 'Eggs (12 Pack)',
    price: 75,
    description: 'Farm fresh eggs. Good source of protein and nutrients.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 180,
    image: 'https://images.unsplash.com/photo-1582722872445-70da27a7a1a0?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 267
  },
  {
    id: 13,
    name: 'Yogurt',
    price: 40,
    description: 'Creamy plain yogurt. Great for health and digestion.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 160,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 189
  },
  {
    id: 14,
    name: 'Cheese',
    price: 280,
    description: 'Delicious cheddar cheese. Perfect for snacks and cooking.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 85,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 123
  },
  {
    id: 15,
    name: 'Butter',
    price: 250,
    description: 'Pure dairy butter. Essential for baking and cooking.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 95,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 156
  }
];

// Utility functions
export const getProductById = (id) =>
  PRODUCTS.find(product => product.id === Number(id));

export const getProductsByCategory = (category) =>
  PRODUCTS.filter(product => product.category === category);

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return PRODUCTS.filter(
    product =>
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q)
  );
};
