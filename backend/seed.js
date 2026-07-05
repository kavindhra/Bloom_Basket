require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

const groceryProducts = [
  {
    name: 'Fresh Tomatoes',
    price: 45,
    description: 'Ripe, juicy tomatoes fresh from farm.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 100,
    image: 'https://abcfruits.com/wp-content/uploads/2022/08/14.png',
    rating: 4.5,
    reviews: 156
  },
  {
    name: 'Potatoes',
    price: 35,
    description: 'High-quality potatoes.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 150,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtl-X292A72ITzsED05vQuq709VTvgXD4BQ&s',
    rating: 4.7,
    reviews: 203
  },
  {
    name: 'Onions',
    price: 40,
    description: 'Fresh yellow onions.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 120,
    image: 'https://m.media-amazon.com/images/I/41uWBT2Hw-L._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    reviews: 178
  },
  {
    name: 'Bell Peppers',
    price: 60,
    description: 'Colorful bell peppers.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 80,
    image: 'https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/Green-Bell-Pepper-hero@2x.png',
    rating: 4.4,
    reviews: 142
  },
  {
    name: 'Carrots',
    price: 30,
    description: 'Crunchy carrots.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 110,
    image: 'https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-06/Carrots.jpg.webp?itok=Z9YUwhCd',
    rating: 4.8,
    reviews: 189
  },

  {
    name: 'Fresh Bananas',
    price: 50,
    description: 'Golden bananas.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 200,
    image: 'https://zamaorganics.com/cdn/shop/files/banana1000_x_1000_px_1.png?v=1752738968',
    rating: 4.9,
    reviews: 256
  },
  {
    name: 'Apples',
    price: 120,
    description: 'Crisp red apples.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 90,
    image: 'https://www.bbassets.com/media/uploads/p/l/40319252_3-fresho-apple-red-delicious.jpgcd',
    rating: 4.7,
    reviews: 198
  },
  {
    name: 'Oranges',
    price: 80,
    description: 'Juicy oranges.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 130,
    image: 'https://www.healthyfood.com/wp-content/uploads/2017/03/In_season_June_Navel_oranges.jpg',
    rating: 4.6,
    reviews: 167
  },
  {
    name: 'Grapes',
    price: 150,
    description: 'Sweet grapes.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 70,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltPkn-aasgobd2r2EbfCuNm98N1Xvtqt3dA&s',
    rating: 4.5,
    reviews: 134
  },
  {
    name: 'Watermelon',
    price: 200,
    description: 'Refreshing watermelon.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 50,
    image: 'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-04/watermeloen_2.jpg?itok=CCYHLr5M',
    rating: 4.8,
    reviews: 145
  },

  {
    name: 'Fresh Milk',
    price: 55,
    description: 'Pure dairy milk.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIFsAA2Oxxjni-cUs7hsV-hAoaUITLD0Vtw&s',
    rating: 4.7,
    reviews: 312
  },
  {
    name: 'Eggs (12 Pack)',
    price: 75,
    description: 'Farm fresh eggs.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 180,
    image: 'https://m.media-amazon.com/images/I/411IYeXfFxL._AC_UF894,1000_QL80_.jpg',
    rating: 4.8,
    reviews: 267
  },
  {
    name: 'Yogurt',
    price: 40,
    description: 'Creamy yogurt.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 160,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/250px-Turkish_strained_yogurt.jpg',
    rating: 4.6,
    reviews: 189
  },
  {
    name: 'Cheese',
    price: 280,
    description: 'Cheddar cheese.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 85,
    image: 'https://www.healthyfood.com/wp-content/uploads/2017/03/Guide_to_cheese-1024x851.jpg',
    rating: 4.5,
    reviews: 123
  },
  {
    name: 'Butter',
    price: 250,
    description: 'Pure butter.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 95,
    image: 'https://cdn.britannica.com/27/122027-050-EAA86783/Butter.jpg',
    rating: 4.7,
    reviews: 156
  },

  {
    name: 'Rice (5kg)',
    price: 320,
    description: 'Premium basmati rice.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 200,
    image: 'https://www.bbassets.com/media/uploads/p/l/255843_20-daawat-super-basmati-5-kg.jpg',
    rating: 4.8,
    reviews: 287
  },
  {
    name: 'Wheat Flour (1kg)',
    price: 45,
    description: 'Pure wheat flour.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 220,
    image: 'https://www.bbassets.com/media/uploads/p/l/30006887_9-aashirvaad-atta-whole-wheat.jpg',
    rating: 4.6,
    reviews: 198
  },
  {
    name: 'Oats (500g)',
    price: 180,
    description: 'Healthy oats.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 140,
    image: 'https://m.media-amazon.com/images/I/71+VAwcqTKL.jpg',
    rating: 4.7,
    reviews: 167
  },
  {
    name: 'Cornflakes',
    price: 120,
    description: 'Crunchy cornflakes.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 165,
    image: 'https://www.quickpantry.in/cdn/shop/files/Kelloggs_Corn_Flakes.webp?v=1737307755',
    rating: 4.5,
    reviews: 134
  },
  {
    name: 'Bread (White)',
    price: 60,
    description: 'Soft white bread.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 190,
    image: 'https://www.allrecipes.com/thmb/3Bhpg3W6sjCn0VTQ_yXLUyHr-3k=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/6788-amish-white-bread-DDMFS-4x3-6faa1e552bdb4f6eabdd7791e59b3c84.jpg',
    rating: 4.6,
    reviews: 178
  },

  {
    name: 'Cooking Oil (1L)',
    price: 210,
    description: 'Pure cooking oil.',
    category: 'Oils',
    section: 'Oils & Condiments',
    stock: 250,
    image: 'https://www.bbassets.com/media/uploads/p/l/40129434_3-freedom-oil-sunflower.jpg',
    rating: 4.7,
    reviews: 234
  },
  {
    name: 'Salt (1kg)',
    price: 25,
    description: 'Iodized salt.',
    category: 'Condiments',
    section: 'Oils & Condiments',
    stock: 300,
    image: 'https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UF894,1000_QL80_.jpg',
    rating: 4.8,
    reviews: 267
  },
  {
    name: 'Sugar (1kg)',
    price: 50,
    description: 'Refined sugar.',
    category: 'Condiments',
    section: 'Oils & Condiments',
    stock: 280,
    image: 'https://m.media-amazon.com/images/I/41XDxFG9WzL.jpg',
    rating: 4.7,
    reviews: 201
  },
  {
    name: 'Chilli Powder',
    price: 120,
    description: 'Spicy chilli powder.',
    category: 'Spices',
    section: 'Oils & Condiments',
    stock: 150,
    image: 'https://martmines.com/wp-content/uploads/2021/06/plain-chilli-powder-1.jpg',
    rating: 4.6,
    reviews: 145
  },
  {
    name: 'Turmeric Powder',
    price: 150,
    description: 'Organic turmeric.',
    category: 'Spices',
    section: 'Oils & Condiments',
    stock: 130,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRFqxsL6aknS5pop5JvDkv8CusFG0xUxpNA&s',
    rating: 4.8,
    reviews: 178
  },

  {
    name: 'Tea Leaves (500g)',
    price: 280,
    description: 'Premium tea leaves.',
    category: 'Beverages',
    section: 'Snacks & Beverages',
    stock: 170,
    image: 'https://5.imimg.com/data5/XT/RH/NF/SELLER-9371693/1-500x500.jpg',
    rating: 4.7,
    reviews: 198
  },
  {
    name: 'Coffee (250g)',
    price: 320,
    description: 'Rich coffee powder.',
    category: 'Beverages',
    section: 'Snacks & Beverages',
    stock: 140,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uD6Xa-LuxW65tZWsBFzpGfR5xiBNdfkoxA&s',
    rating: 4.6,
    reviews: 167
  },
  {
    name: 'Peanuts (400g)',
    price: 180,
    description: 'Roasted peanuts.',
    category: 'Snacks',
    section: 'Snacks & Beverages',
    stock: 160,
    image: 'https://www.jiomart.com/images/product/original/rvrdtyfvyl/veganic-whole-roasted-peanuts-unsalted-groundnut-moongfali-moofali-skin-removed-peanut-200g-product-images-orvrdtyfvyl-p609593165-0-202407292007.jpg?im=Resize=(1000,1000)',
    rating: 4.5,
    reviews: 134
  },
  {
    name: 'Chocolate Biscuits',
    price: 80,
    description: 'Chocolate biscuits.',
    category: 'Snacks',
    section: 'Snacks & Beverages',
    stock: 200,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_choc_biscuits-59ca9be.jpg',
    rating: 4.6,
    reviews: 189
  },
  {
    name: 'Honey (500ml)',
    price: 350,
    description: 'Pure natural honey.',
    category: 'Snacks',
    section: 'Snacks & Beverages',
    stock: 95,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXPkE9peBJeg__gOysvdOvLUeEk3W1gnGtQ&s',
    rating: 4.8,
    reviews: 156
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    console.log('🧹 Old products cleared');

    const created = await Product.insertMany(groceryProducts);
    console.log(`✅ Inserted ${created.length} products`);

    mongoose.connection.close();
    console.log('🎉 Seeding completed');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
