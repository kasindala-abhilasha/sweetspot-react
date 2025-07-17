import { Star } from "lucide-react";

export default function CakeCard({ cake }) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-xl overflow-hidden hover:scale-105 hover:shadow-pink-400 transition duration-300 p-2">
      <img
        src={cake.image}
        alt={cake.name}
        className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-t-xl"
      />
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
          {cake.name}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          ₹{cake.price}
        </p>
        <div className="flex items-center text-yellow-500 text-xs mt-1">
          <Star className="w-4 h-4 mr-1" />
          {cake.rating}
        </div>
      </div>
    </div>
  );
}
