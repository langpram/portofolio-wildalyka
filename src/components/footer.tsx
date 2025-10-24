import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="delavelle Logo"
              width={80}
              height={80}
              className="object-contain rounded-lg"
            />
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center gap-4">
            <h3 
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: '#660B05' }}
            >
              Social Media
            </h3>
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/wildalyka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                className="group flex items-center gap-2 transition-all hover:scale-110"
              >
                <Image
                  src="/assets/logo_instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-gray-700 text-sm md:text-base group-hover:text-gray-900">@wildalyka</span>
              </Link>

              {/* Twitter/X */}
              <Link 
                href="https://x.com/wildalyka?t=sO19YRO0Eo-QvKiw39nFjA&s=08" 
                target="_blank"
                className="group flex items-center gap-2 transition-all hover:scale-110"
              >
                <Image
                  src="/assets/logo_x-twitter.png"
                  alt="X (Twitter)"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-gray-700 text-sm md:text-base group-hover:text-gray-900">@wildaalyka</span>
              </Link>

              {/* Behance */}
              <Link 
                href="https://behance.net/wildaalyka" 
                target="_blank"
                className="group flex items-center gap-2 transition-all hover:scale-110"
              >
                <Image
                  src="/assets/logo_behance.png"
                  alt="Behance"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-gray-700 text-sm md:text-base group-hover:text-gray-900">@wildaalyka</span>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: '#660B05' }}
            >
              Contact Me
            </h3>
            <Link 
              href="tel:+6285863270563"
              className="text-gray-700 text-base md:text-lg hover:text-gray-900 transition-colors"
            >
              +62 858 6327 0563
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}