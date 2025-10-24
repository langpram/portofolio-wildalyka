// import Image from 'next/image'; // HAPUS INI
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function IllustrationPortfolio() {
  const illustrations = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761277860/zinnia_Scarf_rebayt.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761277861/aerith_scarf_e0etts.jpg",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/doepilwju/image/upload/v1761277776/illustration-1_rpbwn3.jpg",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761279623/arrierty_gwtvpw.jpg",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761278407/mao-mao_zapleh.jpg",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761294518/dceb0f221589381.67d78d26a48fb_ujb7sg.png",
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
            illustration
          </h1>

          <p className="text-center text-[#660B05] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            A refined collection of original illustrations that combine visual
            storytelling, technical precision, and artistic emotion — showcasing
            creativity through both digital and traditional styles.
          </p>
        </div>

        {/* First Row */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {illustrations.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={`Illustration ${item.id}`}
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
              {illustrations.slice(2, 4).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-white/5">
                    <img
                      src={item.image}
                      alt={`Illustration ${item.id}`}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row */}
        {illustrations.length > 4 && (
          <div className="bg-white py-16">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {illustrations.slice(4, 6).map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer overflow-hidden"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={`Illustration ${item.id}`}
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
