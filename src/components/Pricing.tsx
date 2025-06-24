import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic",
              price: "29",
              features: ["Basic workout plans", "Progress tracking", "Community access"]
            },
            {
              name: "Pro",
              price: "49",
              features: ["Custom workout plans", "Nutrition guidance", "Priority support", "Weekly check-ins"]
            },
            {
              name: "Elite",
              price: "99",
              features: ["1-on-1 coaching", "Personalized meal plans", "24/7 support", "Advanced analytics"]
            }
          ].map((plan, index) => (
            <div key={index} className={`card animate-on-scroll ${index === 1 ? 'border-primary-600' : ''}`}>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">${plan.price}<span className="text-lg text-gray-600">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`btn ${index === 1 ? 'btn-primary' : 'btn-secondary'} w-full`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;