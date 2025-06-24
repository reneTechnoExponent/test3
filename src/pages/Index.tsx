import React, { useEffect } from "react";
// COMPONENT IMPORTS: Add all component imports here
// Example: import Navbar from "@/components/Navbar";
// Example: import Hero from "@/components/Hero";
// Example: import Footer from "@/components/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* COMPONENTS SECTION: Always use separate component files */}
      {/* 
        IMPORTANT: Always create separate component files in src/components/ 
        and import them above, then use them here. Never write component 
        code directly in this file.
        
        CRITICAL: Each component must wrap its content in a <section> element
        internally for proper component tagging and selection.
        
        Example structure:
        <Navbar />
        <main className="space-y-4 sm:space-y-8">
          <Hero />
          <Features />
          <Testimonials />
        </main>
        <Footer />
        
        Each component internally should have:
        const Component = () => {
          return (
            <section>
              {component content}
            </section>
          );
        };
      */}
      
      <main className="w-full">
        <div className="text-center py-16 px-4">
          <div className="animate-on-scroll">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Your App</h1>
            <p className="text-lg text-gray-600 mb-8">Components will be added here dynamically</p>
            <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Ready for Components
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;