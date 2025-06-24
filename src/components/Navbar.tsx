import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <section>
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-primary-600">FitLife</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary-600">Home</a>
              <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;