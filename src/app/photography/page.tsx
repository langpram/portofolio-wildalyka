// import Image from 'next/image'; // HAPUS INI
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PhotographyPortfolio() {
  const photos = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278029/20220828_115054_api7rn.jpg", // Ganti dengan URL foto lo
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278031/20220828_114533_dkqtjl.jpg", // Ganti dengan URL foto lo
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761290040/20210725193112_IMG_3314_yrjwxe.jpg", // Ganti dengan URL foto lo
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278034/20210725192519_IMG_3308_jjoe7b.jpg", // Ganti dengan URL foto lo
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278040/20230630_141546_ifywqo.jpg", // Ganti dengan URL foto lo
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278033/20230630_143034_jiinrs.jpg", // Ganti dengan URL foto lo
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
            photography
          </h1>

          <p className="text-center text-[#660B05] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            A curated collection of photographs capturing moments, emotions, and 
            perspectives through the lens — showcasing the art of visual storytelling 
            with light, composition, and timing.
          </p>
        </div>

        {/* First Row */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {photos.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={`Photography ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-[#660B05] py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {photos.slice(2, 4).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-white/5">
                    <img
                      src={item.image}
                      alt={`Photography ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row */}
        {photos.length > 4 && (
          <div className="bg-white py-16">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {photos.slice(4, 6).map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer overflow-hidden"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={`Photography ${item.id}`}
                        className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}