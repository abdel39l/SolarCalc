// components/SolarCalculatorExplanation.tsx
'use client';

export default function SolarCalculatorExplanation() {
    return (
        <section className="w-full  text-white py-20 px-6 flex flex-col items-center justify-center text-center">
            <div className="mb-6">
                <div className="bg-gray-900 p-3 rounded-full inline-block">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Our Solar Calculator Works
            </h2>
            <p className="max-w-2xl text-gray-400 mb-10">
                Our tool helps you estimate how many solar panels and batteries you need based on your energy consumption and system preference (on-grid, off-grid, or hybrid). We also consider factors like average sun hours, battery type, and available roof space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                <div className="bg-[#1a1a1a] p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">1. Choose System Type</h3>
                    <p className="text-gray-400">
                        Select whether you're using an on-grid, off-grid, or hybrid solar setup. This affects panel and battery requirements.
                    </p>
                </div>

                <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">2. Enter Consumption</h3>
                    <p className="text-gray-400">
                        Provide your electricity usage (in kWh) for daily, monthly, or yearly periods — the calculator will normalize it to daily usage.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-green-400">3. Customize Conditions</h3>
                    <p className="text-gray-400">
                        Select average sun hours, confirm roof space, and choose your preferred battery type. These help us provide a more accurate estimate.
                    </p>
                </div>
            </div>

            <p className="text-gray-500 mt-10 max-w-2xl">
                Based on your inputs, we’ll calculate the number of solar panels you’ll need and recommend the best battery capacity using real-world efficiency factors.
            </p>
        </section>
    );
}