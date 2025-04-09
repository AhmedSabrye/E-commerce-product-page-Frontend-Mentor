import { useState } from 'react';
import product1 from '../../../public/images/image-product-1.jpg';
import product2 from '../../../public/images/image-product-2.jpg';
import product3 from '../../../public/images/image-product-3.jpg';
import product4 from '../../../public/images/image-product-4.jpg';
import thumbnail1 from '../../../public/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../../public/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../../public/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../../public/images/image-product-4-thumbnail.jpg';
import { X } from 'lucide-react';

// Use the actual product images from the public folder
const productImages = [
  product1,
  product2,
  product3,
  product4
];

const thumbnails = [
  thumbnail1,
  thumbnail2, 
  thumbnail3,
  thumbnail4
];

const ProductGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="md:w-1/2">
      {/* Mobile Gallery with arrows */}
      <div className="relative md:hidden">
        <img 
          src={productImages[currentImageIndex]} 
          alt={`Product ${currentImageIndex + 1}`}
          className="w-full h-auto"
        />
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <img src="/images/icon-previous.svg" alt="Previous" />
        </button>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center"
          onClick={nextImage}
          aria-label="Next image"
        >
          <img src="/images/icon-next.svg" alt="Next" />
        </button>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:block">
        {/* Main Image */}
        <div className="mb-8">
          <button 
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            onClick={openLightbox}
          >
            <img 
              src={productImages[currentImageIndex]} 
              alt={`Product ${currentImageIndex + 1}`}
              className="w-full h-auto rounded-2xl"
            />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-6">
          {thumbnails.map((thumbnail, index) => (
            <button 
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                currentImageIndex === index ? 'ring-2 ring-orange' : ''
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img 
                src={thumbnail} 
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-auto ${
                  currentImageIndex === index ? 'opacity-40' : 'hover:opacity-70'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center">
          <div className="max-w-2xl w-full px-4">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={closeLightbox}
                className="text-white hover:text-orange bg-transparent"
                aria-label="Close lightbox"
              >
                <X className="size-8" />  
              </button>
            </div>
            
            {/* Main Image */}
            <div className="relative mb-8">
              <img 
                src={productImages[currentImageIndex]} 
                alt={`Product ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Navigation Arrows */}
              <button 
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <img src="/images/icon-previous.svg" alt="Previous" />
              </button>
              
              <button 
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center"
                onClick={nextImage}
                aria-label="Next image"
              >
                <img src="/images/icon-next.svg" alt="Next" />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-6 max-w-sm mx-auto">
              {thumbnails.map((thumbnail, index) => (
                <button 
                  key={index}
                  className={`relative rounded-xl overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-orange' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={thumbnail} 
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-auto ${
                      currentImageIndex === index ? 'opacity-40' : 'hover:opacity-70'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
