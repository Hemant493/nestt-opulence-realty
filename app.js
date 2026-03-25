"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Luxury Homes <br /> Crafted for You
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Discover premium properties in Noida & beyond. Verified listings, exclusive deals, seamless experience.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#properties" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            Explore Properties
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="border border-white px-6 py-3 rounded-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Trusted by Premium Buyers</h2>
        <div className="flex justify-center gap-10 mt-10 text-gray-400">
          <span>500+ Clients</span>
          <span>₹100Cr+ Deals</span>
          <span>Top Developers</span>
        </div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="py-20 px-6">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-gray-900 rounded-2xl overflow-hidden">
              <img
                src="/property.jpg"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Sobha Sector 1</h3>
                <p className="text-gray-400 mt-2">3/4 BHK Luxury Apartments</p>
                <p className="mt-3 font-bold">Starting ₹2.5 Cr</p>

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full"
                >
                  Get Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 px-6 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/hemant.jpg"
          className="w-72 h-72 object-cover rounded-2xl"
        />

        <div>
          <h2 className="text-3xl font-semibold">
            Hemant Srivastava
          </h2>
          <p className="text-gray-400 mt-2">
            Founder | CTO | CFO | COO
          </p>

          <p className="mt-4 text-gray-300 max-w-xl">
            AI Developer, IIM MBA, IIT MTech. Building intelligent real estate systems to help buyers make smarter decisions.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full"
          >
            Talk to Founder
          </a>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Explore Projects via Video
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((item) => (
            <iframe
              key={item}
              className="w-full h-64 rounded-xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-semibold">
          Ready to Find Your Dream Home?
        </h2>

        <a
          href="https://wa.me/+91 9818594713"
          className="mt-6 inline-block bg-white text-black px-8 py-4 rounded-full text-lg"
        >
          Get Exclusive Deals on WhatsApp
        </a>
      </section>

    </main>
  );

npm install framer-motion
}
