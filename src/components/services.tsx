import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Services() {
  const services = [
    { name: "UI & UX", href: "/ui-ux" },
    { name: "Illustration", href: "/illustration" },
    { name: "Graphic Design", href: "/graphic-design" },
    { name: "Product Design", href: "/product-design" },
    { name: "Photography", href: "/photography" },
    { name: "3D Animation", href: "/3d-animation" },
    { name: "Social Media Design", href: "/social-media-design" },
    { name: "Logo Design", href: "/logo-design" },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-32 pb-32 sm:pb-48 relative overflow-hidden"
      style={{ backgroundColor: "#660B05" }}
    >
      <div className="max-w-7xl w-full relative">
        {/* Title */}
        <h2
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-12 sm:mb-16 text-white tracking-widest"
          style={{ fontFamily: "var(--font-shigokae)" }}
        >
          WILDA ALYKA FAHSA
        </h2>

        {/* MOBILE LAYOUT - Stack Design */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="relative group mb-6">
            <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BD] p-3 sm:p-4 rounded-2xl shadow-2xl">
              <div className="w-48 h-64 sm:w-56 sm:h-80 relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/pro.jpg"
                  alt="Wilda Alyka Fahsa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20"
              >
                <span
                  className={`${poppins.className} text-white text-sm sm:text-base font-semibold text-center block transition-all duration-300 group-hover:scale-110`}
                >
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* DESKTOP LAYOUT - Original Scattered Design */}
        <div className="hidden lg:block relative min-h-[650px]">
          {/* Center Modern Card Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group">
            <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BD] p-4 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="w-64 h-96 xl:w-72 xl:h-[420px] relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/pro.jpg"
                  alt="Wilda Alyka Fahsa"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Left Side Services */}
          <div className="absolute left-12 xl:left-20">
            <div className="relative" style={{ top: "-70px", left: "5px" }}>
              <ServiceItem
                name="UI & UX"
                side="left"
                font={poppins}
                href="/ui-ux"
              />
            </div>
            <div className="relative" style={{ top: "30px", left: "-10px" }}>
              <ServiceItem
                name="Illustration"
                side="left"
                font={poppins}
                href="/illustration"
              />
            </div>
            <div className="relative" style={{ top: "160px", left: "15px" }}>
              <ServiceItem
                name="Graphic Design"
                side="left"
                font={poppins}
                href="/graphic-design"
              />
            </div>
          </div>

          {/* Right Side Services */}
          <div className="absolute right-12 xl:right-20">
            <div className="relative" style={{ top: "-35px", left: "-5px" }}>
              <ServiceItem
                name="Product Design"
                side="right"
                font={poppins}
                href="/product-design"
              />
            </div>
            <div className="relative" style={{ top: "75px", left: "10px" }}>
              <ServiceItem
                name="Photography"
                side="right"
                font={poppins}
                href="/photography"
              />
            </div>
            <div className="relative" style={{ top: "155px", left: "-15px" }}>
              <ServiceItem
                name="3D Animation"
                side="right"
                font={poppins}
                href="/3d-animation"
              />
            </div>
          </div>

          {/* Bottom Services */}
          <div className="absolute bottom-0 xl:-bottom-8 left-1/2 -translate-x-1/2 flex gap-48 xl:gap-64">
            <div style={{ position: "relative", left: "-15px", top: "10px" }}>
              <ServiceItem
                name="Social Media Design"
                side="bottom-left"
                font={poppins}
                href="/social-media-design"
              />
            </div>
            <div style={{ position: "relative", left: "15px", top: "10px" }}>
              <ServiceItem
                name="Logo Design"
                side="bottom-right"
                font={poppins}
                href="/logo-design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  name,
  side,
  font,
  href,
}: {
  name: string;
  side: "left" | "right" | "bottom-left" | "bottom-right";
  font: any;
  href: string;
}) {
  return (
    <Link href={href} className="group relative block">
      <div className="flex items-center gap-2">
        {side === "left" && (
          <>
            <span
              className={`${font.className} text-white/50 text-base lg:text-xl font-semibold whitespace-nowrap transition-all duration-300 group-hover:text-white group-hover:translate-x-2 group-hover:scale-110`}
            >
              {name}
            </span>
            <svg
              width="70"
              height="50"
              viewBox="0 0 70 50"
              className="transition-all duration-300 group-hover:translate-x-2"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 5 25 Q 25 8, 45 25 Q 55 32, 62 24"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
              <path
                d="M 62 24 L 57 20 M 62 24 L 57 28"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
            </svg>
          </>
        )}

        {side === "right" && (
          <>
            <svg
              width="70"
              height="50"
              viewBox="0 0 70 50"
              className="transition-all duration-300 group-hover:-translate-x-2"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 65 25 Q 45 8, 25 25 Q 15 32, 8 24"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
              <path
                d="M 8 24 L 13 20 M 8 24 L 13 28"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
            </svg>
            <span
              className={`${font.className} text-white/50 text-base lg:text-xl font-semibold whitespace-nowrap transition-all duration-300 group-hover:text-white group-hover:-translate-x-2 group-hover:scale-110`}
            >
              {name}
            </span>
          </>
        )}

        {side === "bottom-left" && (
          <div className="flex flex-col items-center gap-1">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              className="transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-2"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 5 65 Q 35 30, 45 40 Q 55 50, 65 10"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
              <path
                d="M 65 10 L 60 14 M 65 10 L 61 17"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
            </svg>
            <span
              className={`${font.className} text-white/50 text-base lg:text-xl font-semibold text-center transition-all duration-300 group-hover:text-white group-hover:translate-y-2 group-hover:scale-110 max-w-[140px] leading-tight`}
            >
              {name}
            </span>
          </div>
        )}

        {side === "bottom-right" && (
          <div className="flex flex-col items-center gap-1">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-2"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 65 65 Q 35 30, 25 40 Q 15 50, 5 10"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
              <path
                d="M 5 10 L 10 14 M 5 10 L 9 17"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 group-hover:stroke-white"
              />
            </svg>
            <span
              className={`${font.className} text-white/50 text-base lg:text-xl font-semibold text-center transition-all duration-300 group-hover:text-white group-hover:translate-y-2 group-hover:scale-110 max-w-[140px] leading-tight`}
            >
              {name}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}