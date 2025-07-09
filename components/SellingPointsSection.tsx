'use client';

export default function SellingPointsSection() {
    return (
        <section className="w-full bg- text-white py-20 px-6 flex flex-col items-center justify-center text-center">
            <div className="mb-6">
                <div className="bg-gray-900 p-3 rounded-full inline-block">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                 Why Choose Our Solar Calculator?
            </h2>
            <p className="max-w-2xl text-gray-400 mb-10">
                Discover the smarter way to plan your solar setup. Our calculator offers:
            </p>

            <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-8 max-w-5xl">
                <div className="bg-[#1a1a1a] p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">1. Built for Precision</h3>
                    <p className="text-gray-400">
                        We use real-world solar data, not generic formulas. Every recommendation—from panel count to battery size—is tailored to your actual energy needs and environment.
                    </p>
                </div>

                <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">2. Fully Customizable</h3>
                    <p className="text-gray-400">
                        On-grid, off-grid, or hybrid? You’re in control. Adjust sun hours, battery type, and roof space to see how each factor affects your solar setup instantly.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-green-400">3. Fast, Free & Private</h3>
                    <p className="text-gray-400">
                        No data tracking. Just quick and reliable solar estimates you can trust—completely free and right when you need them.
                    </p>
                </div>
            </div>


        </section>
    );
}