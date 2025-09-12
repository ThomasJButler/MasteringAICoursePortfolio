"use client";

import { useState, useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from '@/lib/easings';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
}

export default function ImageGallery({ images, title, className = "" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Convert string array to ImageItem array
  const imageItems: ImageItem[] = images.map((src, index) => ({
    src,
    alt: `${title} screenshot ${index + 1}`,
    title: `${title} - Screenshot ${index + 1}`
  }));

  useEffect(() => {
    if (!prefersReducedMotion && galleryRef.current) {
      const thumbnails = galleryRef.current.querySelectorAll('.gallery-thumbnail');
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      anime(thumbnails as any, {
        opacity: [0, 1],
        scale: [0.9, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(100),
        easing: animeEasings.smoothOut,
      });
    }
  }, [prefersReducedMotion]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedImage(null), 200);
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < imageItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
      if (event.key === 'Escape') closeLightbox();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, selectedImage, goToPrevious, goToNext, closeLightbox]);

  if (imageItems.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-gray-400 mb-4">
          <Maximize2 size={48} className="mx-auto mb-4 opacity-50" />
          <p>Screenshots coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Thumbnail Grid */}
      <div 
        ref={galleryRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
      >
        {imageItems.map((image, index) => (
          <button
            key={index}
            className="gallery-thumbnail group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10"
            onClick={() => openLightbox(index)}
            style={{ opacity: 0 }}
          >
            <div className="aspect-video bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center">
              {/* Placeholder for now - in real implementation, would be actual images */}
              <div className="text-center">
                <Maximize2 size={32} className="mx-auto mb-2 text-gray-400 group-hover:text-green-400 transition-colors" />
                <p className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">
                  Screenshot {index + 1}
                </p>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Expand icon */}
            <div className="absolute top-2 right-2 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Maximize2 size={16} className="text-white" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-6xl translate-x-[-50%] translate-y-[-50%] p-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            
            <Dialog.Title className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
              {selectedImage !== null ? imageItems[selectedImage]?.title : 'Image Gallery'}
            </Dialog.Title>
            
            <Dialog.Description className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
              Use arrow keys to navigate between images, or escape to close the gallery.
            </Dialog.Description>
            
            {selectedImage !== null && (
              <div className="relative">
                {/* Close button */}
                <Dialog.Close className="absolute -top-2 -right-2 z-10 p-2 bg-gray-900/90 text-white rounded-full hover:bg-gray-800/90 transition-colors border border-gray-700">
                  <X size={20} />
                </Dialog.Close>

                {/* Navigation buttons */}
                {imageItems.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      disabled={selectedImage === 0}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-900/90 text-white rounded-full hover:bg-gray-800/90 transition-colors border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      disabled={selectedImage === imageItems.length - 1}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-900/90 text-white rounded-full hover:bg-gray-800/90 transition-colors border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Main image display */}
                <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center">
                    {/* Placeholder for now - in real implementation, would be actual image */}
                    <div className="text-center">
                      <Maximize2 size={64} className="mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {imageItems[selectedImage].title}
                      </h3>
                      <p className="text-gray-400">
                        Image {selectedImage + 1} of {imageItems.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image counter */}
                {imageItems.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {imageItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === selectedImage
                            ? 'bg-green-400 w-8'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}