'use client';

export default function Footer() {
    return (
        <footer className="dark:bg-black border-t pt-10 pb-6 dark:text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center gap-2 mb-4">

                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">

            </span>
                    </div>
                    <img src="/SunVolt.png" alt="Logo" width={60} height={60} />
                    <p className="text-sm leading-relaxed">
                        At <span className="font-bold">SunVolt Solutions</span>, we’re not just a storefront — we’re a powerhouse of <span className="font-bold">cutting-edge electronics and solar technology</span>. Whether you’re a DIY enthusiast, an installer, or a business, we provide <span className="font-bold">premium-grade components, custom system design</span>, and <span className="font-bold">expert support</span> every step of the way.
                    </p>

                </div>


                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">About Us</a></li>
                        <li><a href="/calculator">Solar Calculator</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>


                <div>
                    <h1 className="font-bold">Contact Us at </h1>
                    <h1>SunVoltSolutions@gmail.com</h1>
                </div>


                <div>
                    <h3 className="font-semibold mb-4">Newsletter</h3>
                    <p className="text-sm mb-4">
                        Subscribe to our news letter for more news about Solar Solutions.
                    </p>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-md bg-gray-200 text-white text-sm placeholder-gray-400 mb-2"
                    />
                    <button className="my-2 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-300 active:bg-blue-800">
                        Subscribe
                    </button>
                </div>
            </div>


            <hr className="my-6 border-gray-300" />


            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>2025 SunVolt Solutions All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}