'use client';

import { useState } from 'react';
import { FaApple, FaGoogle, FaXTwitter } from 'react-icons/fa6';

export default function SignUp() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name,surname, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Registration failed');
                return;
            }

            setSuccess('Account created successfully!');
        } catch (err) {
            console.error('Signup error:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen dark:bg-black flex items-center justify-center px-4">
            <div className="bg-[#111] p-8 rounded-xl shadow-md w-full max-w-md text-white">
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-900 p-3 rounded-full">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center">Create Account</h2>
                <p className="text-sm text-center text-gray-400 mt-1">
                    Already have an account?{' '}
                    <a href="/login" className="text-white font-semibold hover:underline">
                        Log in
                    </a>
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
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
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* ✅ Success or Error Message */}
                {success && <p className="text-green-500 mt-4 text-sm text-center">{success}</p>}
                {error && <p className="text-red-500 mt-4 text-sm text-center">{error}</p>}

                <div className="my-4 flex items-center justify-between">
                    <span className="h-px flex-1 bg-gray-700" />
                    <span className="text-sm text-gray-500 mx-2">OR</span>
                    <span className="h-px flex-1 bg-gray-700" />
                </div>

                <div className="flex justify-between gap-3">
                    <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222] text-white py-2 rounded-md flex items-center justify-center gap-2">
                        <FaApple size={18} />
                    </button>
                    <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222] text-white py-2 rounded-md flex items-center justify-center gap-2">
                        <FaGoogle size={18} />
                    </button>
                    <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222] text-white py-2 rounded-md flex items-center justify-center gap-2">
                        <FaXTwitter size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}