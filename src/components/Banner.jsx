"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Banner Background"
        fill
        className="object-cover absolute inset-0 -z-10 opacity-80"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-base md:text-lg mb-6">
          Discover amazing features, explore new opportunities, and get started
          today with just a click.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full shadow-lg font-semibold">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
