import React, { useState } from "react";
import cakes from "../data/cakes.json";
import CakeCard from "../components/CakeCard";
import { ShoppingCart, User } from "lucide-react";

const categories = [
  "All",
  ...new Set(cakes.map((cake) => cake.category)),
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCakes =
    selectedCategory === "All"
      ? cakes
      : cakes.filter((cake) => cake.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-white text-gray-800 dark:text-white">
      {/* Header with background image */}
      <div
        className="bg-cover bg-center py-12 text-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/frame-food-ingredients-baking-gently-pink-pastel-background-cooking-flat-lay-with-copy-space-top-view-baking-concept-flat-lay_127032-2200.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center">
           Welcome to SweetSpot 🍰
        </h1>
        <p className="mt-2 text-lg italic text-black text-center">
           Where every bite tells a sweet story
        </p>
        <div className="absolute top-4 right-6 flex gap-4">
          <ShoppingCart className="w-6 h-6 text-black" />
          <User className="w-6 h-6 text-black" />
        </div>
    </div>
      </div>

      {/* Marquee */}
      <div className="bg-white-200 text-black py-2 overflow-hidden">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🎉 Flat 20% off on all Chocolate Cakes! | 🍓 New Fruit Flavours Just
          Dropped! | 🎁 Buy 1 Get 1 Free on Sundays!
        </marquee>
      </div>

      {/* Background for Categories + Cake Section */}
      <div
        className="py-8 px-6"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/R.8338e3a77525d16074cdb4b720e80727?rik=25sJOXbTzOfaiw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fHdw6Roq.png&ehk=zFcUWMSeD3bCN2eL0pyz53QXBMznUPtVq8yFMZ2dn%2bU%3d&risl=&pid=ImgRaw&r=0')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cake Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-8">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p>Email: sweetspot@example.com | Phone: +91 98765 43210</p>
        <p>© 2025 SweetSpot. All rights reserved.</p>
      </footer>
    </div>
  );
}
