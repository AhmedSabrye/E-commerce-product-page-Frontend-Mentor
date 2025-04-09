import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ProductGallery from './components/ProductGallery/ProductGallery'
import ProductInfo from './components/ProductInfo/ProductInfo'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (quantity: number) => {
    // For now, we're only adding one product
    const newItem: CartItem = {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      price: 125.00,
      quantity,
      image: '/images/image-product-1-thumbnail.jpg'
    };

    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      // Update quantity if product exists
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen font-kumbh-sans pt-[5rem] md:pt-0">
      <Header cartItems={cartItems} onRemoveItem={handleRemoveItem} />
      
      <main className="container mx-auto md:py-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <ProductGallery />
          <ProductInfo onAddToCart={handleAddToCart} />
        </div>
      </main>

      {/* Attribution */}
      <footer className="text-center text-sm text-dark-grayish-blue py-4">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-orange">Frontend Mentor</a>. 
        Coded with ❤️
      </footer>
    </div>
  )
}

export default App
