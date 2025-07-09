'use client';

import { FaApple, FaGoogle, FaXTwitter } from 'react-icons/fa6';

import { useState } from 'react';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Login failed');
                return;
            }

            setSuccess('Login successful!');

        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen dark:bg-black flex items-center justify-center px-6">
            <div className="bg-[#111] p-8 rounded-xl shadow-md w-full max-w-md text-white">
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-900 p-3 rounded-full">

                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
                <p className="text-sm text-center text-gray-400 mt-1">
                    Don’t have an account yet?{' '}
                    <a href="/signup" className="text-white font-semibold hover:underline">
                        Sign up
                    </a>
                </p>

                <form className="mt-6 space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
                    >
                        Login
                    </button>

                </form>
                {success && <p className="text-green-500 mt-4 text-sm text-center">{success}</p>}
                {error && <p className="text-red-500 mt-4 text-sm text-center">{error}</p>}

                <div className="my-4 flex items-center justify-between">
                    <span className="h-px flex-1 bg-gray-700" />
                    <span className="text-sm text-gray-500 mx-2">OR</span>
                    <span className="h-px flex-1 bg-gray-700" />
                </div>

                <div className="flex justify-between gap-3">
                    <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222] dark:text-white py-2 rounded-md flex items-center justify-center gap-2">
                        <FaApple size={18} />
                    </button>
                    <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222] dark:text-white py-2 rounded-md flex items-center justify-center gap-2">
                        <FaGoogle size={18} />
                    </button>
                    <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222] dark:text-white py-2 rounded-md flex items-center justify-center gap-2">
                        <FaXTwitter size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}