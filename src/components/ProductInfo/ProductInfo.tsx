import { useState } from 'react';

interface ProductInfoProps {
  onAddToCart: (quantity: number) => void;
}

const ProductInfo = ({ onAddToCart }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="md:w-1/2 px-6 py-6 md:py-16 md:pl-16 md:pr-32">
      {/* Company */}
      <p className="text-orange uppercase font-bold tracking-wider text-sm mb-4">Sneaker Company</p>
      
      {/* Product Name */}
      <h1 className="text-3xl md:text-5xl font-bold text-very-dark-blue mb-6">
        Fall Limited Edition Sneakers
      </h1>
      
      {/* Description */}
      <p className="text-dark-grayish-blue mb-6 md:mb-8">
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      
      {/* Price */}
      <div className="mb-6 md:mb-8 flex justify-between items-center font-bold md:block">
        <div className="flex items-end">
          <span className="text-3xl  text-very-dark-blue mr-4">$125.00</span>
          <span className="bg-black text-white px-2 py-0.5 rounded">50%</span>
        </div>
        <p className="text-gray-400 line-through mt-1 text-start">$250.00</p>
      </div>
      
      {/* Add to Cart */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-light-grayish-blue rounded-lg md:w-40 h-14">
          <button 
            className="w-14 h-full flex items-center justify-center text-orange hover:opacity-70"
            onClick={decrementQuantity}
            aria-label="Decrease quantity"
          >
            <img src="/images/icon-minus.svg" alt="Minus" />
          </button>
          
          <span className="font-bold text-very-dark-blue">{quantity}</span>
          
          <button 
            className="w-14 h-full flex items-center justify-center text-orange hover:opacity-70"
            onClick={incrementQuantity}
            aria-label="Increase quantity"
          >
            <img src="/images/icon-plus.svg" alt="Plus" />
          </button>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          className="md:flex-1 bg-orange text-white font-bold rounded-lg h-14 flex items-center justify-center gap-3 hover:opacity-70 shadow-xl shadow-orange/30"
          onClick={handleAddToCart}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-current">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/>
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
