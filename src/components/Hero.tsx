import React from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32">
      <div className="container-custom">
        <div className="text-center animate-on-scroll">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Body,<br />Transform Your Life
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of fitness enthusiasts and start your journey to a healthier, stronger you today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;