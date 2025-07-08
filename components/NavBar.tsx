'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <nav className= "dark:text-white px-4 py-2 rounded-lg shadow-md relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between ">


                <Link href="/" className="flex items-center">
                    <img src="/SunVolt.png" alt="Logo" width={60} height={60} />
                </Link>


                <div className="text-xl hidden md:flex space-x-10">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/about" className="hover:text-gray-300">About</Link>
                    <Link href="/services" className="hover:text-gray-300">Services</Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact</Link>

                </div>


                <div className="flex">
                    <button
                        onClick={() => router.push('/login')}
                        className="dark:bg-white- focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 rounded-l-lg dark:text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 "
                    >
                        <span>Log in</span>
                    </button>

                    <button
                        onClick={() => router.push('/signup')}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 rounded-r-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <span>Sign Up</span>
                    </button>
                </div>


                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-neutral-900 rounded-xl mt-4 py-4 space-y-4 shadow-md">
                    <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="/signup" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Create Account</Link>
                </div>
            )}
        </nav>
    );
}