import React from "react";

const Contactus = () => {
  return (
    <div>
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold">Bandage</h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="#product" className="hover:text-gray-300 transition duration-300">Product</a>
          <a href="#pricing" className="hover:text-gray-300 transition duration-300">Pricing</a>
          <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
          <a
            href="#login"
            className="hover:text-gray-300 transition duration-300"
          >
            Login
          </a>
        </nav>

        {/* Call to Action Button */}
        <a
          href="#member"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Become a Member
        </a>
      </div>
    </header>


    <section className="bg-gray-100 py-10" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
        <p className="text-lg text-gray-700 mb-6">Get in touch today!</p>
        <p className="text-gray-600 mb-4">
          We know how large objects will act, but things on a small scale.
        </p>

        {/* Contact Details */}
        <div className="space-y-2 text-gray-800">
          <p>
            <span className="font-bold">Phone:</span> +451 215 215
          </p>
          <p>
            <span className="font-bold">Fax:</span> +451 215 215
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contactus;