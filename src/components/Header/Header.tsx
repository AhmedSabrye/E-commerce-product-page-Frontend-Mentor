import { useState } from 'react';
import Cart from '../Cart/Cart';
import { ShoppingCart } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface HeaderProps {
  cartItems?: CartItem[];
  onRemoveItem?: (id: number) => void;
}

const Header = ({ cartItems = [], onRemoveItem = () => {} }: HeaderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 start-0 end-0 md:relative z-50 bg-white border-b border-grayish-blue/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-12">
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <img src="/images/icon-menu.svg" alt="Menu" />
            </button>
            
            {/* Logo */}
            <div className="mr-2 md:mr-0">
              <img src="/images/logo.svg" alt="Sneakers" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li className="relative py-8 hover:text-very-dark-blue group">
                  <a href="#" className="text-dark-grayish-blue hover:text-very-dark-blue">Collections</a>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
                <li className="relative py-8 hover:text-very-dark-blue group">
                  <a href="#" className="text-dark-grayish-blue hover:text-very-dark-blue">Men</a>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
                <li className="relative py-8 hover:text-very-dark-blue group">
                  <a href="#" className="text-dark-grayish-blue hover:text-very-dark-blue">Women</a>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
                <li className="relative py-8 hover:text-very-dark-blue group">
                  <a href="#" className="text-dark-grayish-blue hover:text-very-dark-blue">About</a>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
                <li className="relative py-8 hover:text-very-dark-blue group">
                  <a href="#" className="text-dark-grayish-blue hover:text-very-dark-blue">Contact</a>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Right side - Cart and Profile */}
          <div className="flex items-center gap-6">
            {/* Cart */}
            <button 
              className="relative" 
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingCart className="size-6 text-gray-600" />
              {/* Cart count - Shown when items > 0 */}
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            
            {/* Profile */}
            <button className="relative w-10 h-10 rounded-full border-2 border-transparent hover:border-orange transition-colors">
              <img src="/images/image-avatar.png" alt="Profile" className="w-full h-full rounded-full" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/75 z-40">
          <div className="bg-white h-full w-2/3 p-6">
            <div className="flex justify-start">
              <button onClick={toggleMobileMenu} className="mb-10 text-very-dark-blue">
                <img src="/images/icon-close.svg" alt="Close" />
              </button>
            </div>
            <nav>
              <ul className="flex flex-col space-y-4">
                <li className='text-start'><a href="#" className="text-very-dark-blue font-bold">Collections</a></li>
                <li className='text-start'><a href="#" className="text-very-dark-blue font-bold">Men</a></li>
                <li className='text-start'><a href="#" className="text-very-dark-blue font-bold">Women</a></li>
                <li className='text-start'><a href="#" className="text-very-dark-blue font-bold">About</a></li>
                <li className='text-start'><a href="#" className="text-very-dark-blue font-bold">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      
      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute top-24 start-1/2 -translate-x-1/2 md:start-auto md:translate-x-0 md:right-12 w-full max-w-sm bg-white rounded-lg shadow-xl z-30">
          <div className="p-6 border-b border-grayish-blue/20">
            <h3 className="font-bold text-very-dark-blue">Cart</h3>
          </div>
          <Cart items={cartItems} onRemoveItem={onRemoveItem} />
        </div>
      )}
    </header>
  );
};

export default Header;
