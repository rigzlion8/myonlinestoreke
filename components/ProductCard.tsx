"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container (Smaller + Rounded) */}
      <div className="relative aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>

      {/* Product Info (Tighter Padding) */}
      <div className="p-3">
        <h3 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">
          {product.name}
        </h3>
        <p className="text-red-600 dark:text-red-400 mt-1 text-lg font-semibold">
          ${product.price}
        </p>
        <button className="mt-3 w-full bg-black dark:bg-white text-white dark:text-black py-1.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
          Add to Cart
        </button>
      </div>
    </div>
  );
}