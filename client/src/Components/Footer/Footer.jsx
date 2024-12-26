import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-lg font-bold mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">
              MyWebsite
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.787 4.658-4.787 1.324 0 2.462.099 2.793.143v3.24h-1.917c-1.505 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.322-.593 1.322-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3.2a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.822 4.822 0 001.524 6.573A4.902 4.902 0 01.964 9.16v.063a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.922 4.922 0 004.6 3.417A9.868 9.868 0 010 21.539a13.94 13.94 0 007.548 2.211c9.058 0 16.306-7.504 16.306-16.306 0-.249-.006-.497-.018-.744A11.658 11.658 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-gray-400"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.316.975.975 1.253 2.242 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.242 1.253-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.253-2.242-1.316-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.316-3.608.975-.975 2.242-1.253 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.015 7.053.07 5.78.125 4.509.364 3.352 1.522 2.196 2.679 1.957 3.951 1.901 5.224c-.055 1.279-.07 1.682-.07 4.977s.015 3.698.07 4.977c.056 1.273.295 2.545 1.451 3.702 1.157 1.158 2.429 1.396 3.702 1.451 1.279.055 1.682.07 4.977.07s3.698-.015 4.977-.07c1.273-.056 2.545-.295 3.702-1.451 1.158-1.157 1.396-2.429 1.451-3.702.055-1.279.07-1.682.07-4.977s-.015-3.698-.07-4.977c-.056-1.273-.295-2.545-1.451-3.702C19.545.364 18.273.125 17 .07 15.721.015 15.318 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-400 mt-6">
          © 2024 MyWebsite. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
