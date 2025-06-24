import React from "react";
import { Dumbbell, Heart, Users, Calendar } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive tools and support for your fitness journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Dumbbell className="h-8 w-8 text-primary-600" />,
              title: "Custom Workouts",
              description: "Personalized training programs tailored to your goals"
            },
            {
              icon: <Heart className="h-8 w-8 text-primary-600" />,
              title: "Health Tracking",
              description: "Monitor your progress and vital statistics"
            },
            {
              icon: <Users className="h-8 w-8 text-primary-600" />,
              title: "Community Support",
              description: "Connect with like-minded fitness enthusiasts"
            },
            {
              icon: <Calendar className="h-8 w-8 text-primary-600" />,
              title: "Flexible Scheduling",
              description: "Work out on your own time and pace"
            }
          ].map((feature, index) => (
            <div key={index} className="card animate-on-scroll">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;