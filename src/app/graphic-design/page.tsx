// import Image from 'next/image'; // HAPUS INI
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function GraphicDesignPortfolio() {
  const designs = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278187/interior_gm0e0q.png",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278187/Karpet_Tile_afcbla.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278188/Karpet_Kustom_a8fgjg.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278206/Free_Outdoor_Advertising_Poster_Mockup_inj6tm.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278198/17ag_up1wfi.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761291202/a4daa2228628723.6856383f5f0db_e2o12o.webp",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761291113/hpn_banner_z92wqq.png", // tambah gambar serupa
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761291112/81a2f5227981831.684a8e1031ba8_ziynfv.webp", // tambah gambar serupa
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761291114/4fb442227981831.684a8e1031465_h7nf0s.webp", // tambah gambar serupa
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278200/banner_duren-03_qhviaw.jpg", // tambah gambar serupa
    },
  ];

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
            graphic design
          </h1>

          <p className="text-center text-[#660B05] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            A curated showcase of graphic design works that merge creativity
            with purpose — featuring brand identities, layouts, and visual
            communications crafted with thoughtful design principles.
          </p>
        </div>

        {/* First Row - 3 Designs */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {designs.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-gray-50 p-8">
                    <img
                      src={item.image}
                      alt={`Graphic Design ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - 2 Large Designs */}
        <div className="bg-[#660B05] py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {designs.slice(3, 5).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-white/5 p-8 rounded-2xl">
                    <img
                      src={item.image}
                      alt={`Graphic Design ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row - 2 Large Designs */}
        <div className="bg-[#660B05] py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {designs.slice(5, 7).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-white/5 p-8 rounded-2xl">
                    <img
                      src={item.image}
                      alt={`Graphic Design ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Row - 4 Designs in Grid */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {designs.slice(7, 11).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-gray-50 p-8 rounded-xl">
                    <img
                      src={item.image}
                      alt={`Graphic Design ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
