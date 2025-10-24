// import Image from 'next/image'; // HAPUS INI
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ThreeDAnimationsPortfolio() {
  const animations = [
    {
      id: 1,
      type: "image",
      source: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761293633/c77ffd150010681.62f22f9cf0c80_aefbsc.webp",
    },
    {
      id: 2,
      type: "image",
      source: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761293633/a9a00e150010681.62f22f9cf0392_wopss4.webp",
    },
    {
      id: 3,
      type: "video",
      source: "https://res.cloudinary.com/dzqr3ehif/video/upload/v1761293265/uas_animasi_3d0001-0080_m14lku.mp4",
      poster: "https://res.cloudinary.com/dzqr3ehif/image/upload/v1761293652/6b73e7150011025.62f230ce6cefc_rael7n.png",
    },
  ];
  
  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF]">
        <Navbar />
        <div className="h-20"></div>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-20">
          <h1
            className="text-6xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-none tracking-tight text-center"
            style={{
              fontFamily: "Shigokae, serif",
              color: "#660B05",
            }}
          >
             animations
          </h1>

          <p className="text-center text-[#660B05] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 md:mt-6 leading-relaxed px-4">
            A showcase of 3D animation works that bring imagination to life — 
            combining motion, depth, and storytelling through dynamic visual 
            experiences crafted with technical precision.
          </p>
        </div>

        {/* First Row - 2 Items */}
        <div className="bg-white py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
              {animations.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="aspect-video bg-gray-50 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-700 overflow-hidden">
                    {item.type === "image" ? (
                      <img
                        src={item.source}
                        alt={`3D Animation ${item.id}`}
                        className="w-full h-full object-contain md:object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={item.source}
                        poster={item.poster}
                        controls
                        className="w-full h-full object-contain md:object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - 1 Large Featured Video/Image */}
        <div className="bg-[#660B05] py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="group cursor-pointer overflow-hidden">
                <div className="aspect-video bg-white/5 rounded-lg md:rounded-2xl overflow-hidden">
                  {animations[2].type === "video" ? (
                    <video
                      src={animations[2].source}
                      poster={animations[2].poster}
                      controls
                      className="w-full h-full object-contain md:object-cover transition-all duration-700 group-hover:brightness-110"
                    />
                  ) : (
                    <img
                      src={animations[2].source}
                      alt={`3D Animation ${animations[2].id}`}
                      className="w-full h-full object-contain md:object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}