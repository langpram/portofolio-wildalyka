export default function Hero() {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="text-center w-full">
          {/* Main Heading */}
          <div className="space-y-2 sm:space-y-4">
            <h1 
              className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] leading-none tracking-tight"
              style={{ 
                fontFamily: 'Shigokae, serif',
                color: '#660B05'
              }}
            >
              Portofolio
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-base sm:text-lg md:text-xl tracking-wide"
              style={{ 
                fontFamily: 'Shigokae, serif',
                color: '#660B05'
              }}
            >
              Graphic Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}