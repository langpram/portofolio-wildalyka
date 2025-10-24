// import Image from 'next/image'; // HAPUS INI
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function LogoDesignPortfolio() {
  const logos = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761290872/pfm-08_c2qa9p.png",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761290872/dekorasikita-01-01_wy78tu.png",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761290864/hjig-03_zkwauq.png",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761291047/FARWAH_rn2rdq.png",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761290864/hjig-01_xiolel.png",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761290864/hjig-02_wte4yd.png",
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
            logo design
          </h1>

          <p className="text-center text-[#660B05] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            A collection of distinctive logo designs that embody brand identity 
            and values — each mark thoughtfully crafted to create memorable visual 
            symbols that resonate and endure.
          </p>
        </div>

        {/* Simple Grid - 3 Columns */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {logos.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center justify-center aspect-square bg-[#660B05]/15 rounded-lg p-8 transition-all duration-500 hover:bg-[#660B05]/25">
                    <img
                      src={item.image}
                      alt={`Logo Design ${item.id}`}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
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