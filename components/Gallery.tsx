
import React from 'react';

const galleryImages = [
  {
    url: 'https://picsum.photos/id/1/800/600',
    caption: 'Clean workspace for focused work'
  },
  {
    url: 'https://picsum.photos/id/180/800/600',
    caption: 'Prompt customer support responses'
  },
  {
    url: 'https://picsum.photos/id/20/800/600',
    caption: 'Accurate data entry management'
  },
  {
    url: 'https://picsum.photos/id/2/800/600',
    caption: 'Organized remote work environment'
  },
  {
    url: 'https://picsum.photos/id/119/800/600',
    caption: 'Systematic online research work'
  },
  {
    url: 'https://picsum.photos/id/3/800/600',
    caption: 'Reliable virtual administrative support'
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Gallery</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Work Environment & Examples</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Visual glimpses into my professional daily routine and the tools I use to deliver high-quality work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/3]">
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
