"use client";

import { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export default function UIUXPortfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Catalog HJ Karpet",
      description: "A modern, user-friendly web catalog for HJ Karpet — designed to simplify product browsing and ordering while reinforcing brand identity through clean UI and thoughtful UX.",
      images: [
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761294017/catalog_cover_hquexa.jpg",
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761294015/catalog_about_xbxixg.jpg",
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761294016/catalog_what_i_do-_ahuyhf.jpg",
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761294016/catalog_porto_lb5sl7.jpg",
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761294021/catalog_all_artboards_igfe8x.jpg",
      ]
    },
    // Nanti tambah project di sini
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projects[currentProject];

  // Auto slide setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, project.images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF]">
        <Navbar />
        <div className="h-20"></div>

        <div className="container mx-auto px-6 py-12 md:py-20">
          <h1
            className="text-[100px] md:text-[140px] lg:text-[120px] leading-none tracking-tight text-center"
            style={{
              fontFamily: "Shigokae, serif",
              color: "#660B05",
            }}
          >
            ui/ux design
          </h1>

          <p className="text-center text-[#660B05] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            A collection of user interface and experience design projects — 
            crafting intuitive, beautiful, and functional digital experiences 
            that prioritize user needs and business goals.
          </p>
        </div>

        {/* Project Slider Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Project Title & Description */}
              <div className="text-center mb-12">
                <h2 
                  className="text-4xl md:text-5xl mb-4"
                  style={{
                    fontFamily: "Shigokae, serif",
                    color: "#660B05",
                  }}
                >
                  {project.title}
                </h2>
                <p className="text-[#660B05] text-lg max-w-xl mx-auto">
                  {project.description}
                </p>
              </div>

              {/* Slider Container */}
              <div className="relative group">
                {/* Main Slider */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-gray-100">
                  <div 
                    className="flex transition-transform duration-700 ease-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {project.images.map((image: string, index: number) => (
                      <div key={index} className="min-w-full h-full">
                        <img
                          src={image}
                          alt={`${project.title} - Slide ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Previous Button */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#660B05] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#660B05] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Slide Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentSlide + 1} / {project.images.length}
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-6 gap-2">
                  {project.images.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentSlide === index 
                          ? 'w-8 h-3 bg-[#660B05]' 
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-8 grid grid-cols-5 gap-4">
                {project.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                      currentSlide === index 
                        ? 'ring-4 ring-[#660B05] scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder untuk project berikutnya */}
        {projects.length > 1 && (
          <div className="bg-gray-50 py-8 text-center">
            <p className="text-[#660B05]">More projects coming soon...</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}