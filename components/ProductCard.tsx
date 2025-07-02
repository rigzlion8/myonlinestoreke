"use client";
import { useState } from "react";

export default function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-red-600 dark:text-red-400 mt-1">${product.price}</p>
        <button className="mt-4 w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}