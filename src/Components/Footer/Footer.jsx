import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0f1422] text-white pt-16 pb-8 px-8 md:px-16 lg:px-24 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/3 text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">DigiTools</h2>
          <p className="text-gray-300 text-sm max-w-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        
        <div className="flex-1 flex flex-wrap justify-between gap-8 text-left">
          <div>
            <h6 className="font-semibold text-white mb-4">Product</h6>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><button className="hover:text-white transition-colors cursor-pointer">Features</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Pricing</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Templates</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Integrations</button></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-semibold text-white mb-4">Company</h6>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><button className="hover:text-white transition-colors cursor-pointer">About</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Blog</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Careers</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Press</button></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-semibold text-white mb-4">Resources</h6>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><button className="hover:text-white transition-colors cursor-pointer">Documentation</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Help Center</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Community</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-semibold text-white mb-4">Social Links</h6>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <button className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
          <button className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
          <button className="hover:text-white transition-colors cursor-pointer">Cookies</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
