'use client';

import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center dark:text-white px-6 text-center">
            <div className="mb-15">
                <div className="bg-gray-900 p-3 rounded-full">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                </div>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
                Powering the Future with Solar Tech
            </h1>
            <p className="text-gray-400 max-w-xl mb-6">
                Join the revolution. Explore premium-grade solar components and innovative energy solutions tailored for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition"
                >
                    Get Started
                </a>
                <a
                    href="/services"
                    className="bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 text-white py-3 px-6 rounded-md transition"
                >
                    Learn More
                </a>
            </div>
        </section>
    );
}