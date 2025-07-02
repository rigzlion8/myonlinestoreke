"use client";
import Link from "next/link";
import { FiShoppingCart, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyStoreKE
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-red-600 transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Right Section (Theme + Cart) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mounted ? (
              theme === "dark" ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )
            ) : (
              <div className="w-5 h-5" /> // Placeholder while mounting
            )}
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative">
            <FiShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}