import React, { useState } from 'react';
import { FaDiscord } from "react-icons/fa";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { subscribeToNewsletter } from '../api/newsletterApi';
import { showErrorToast, showSuccessToast, showWarningToast } from './ToastProvider';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            showErrorToast("Please enter a valid email address.");
            return;
        }

        try {
            const response = await subscribeToNewsletter(email);
            showSuccessToast("Successfully subscribed to newsletter");
            setEmail(''); // Reset input field on success
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Subscription failed. Please try again.';
            if (errorMessage.includes('already subscribed')) {
                showWarningToast("You're already subscribed to the newsletter.");
            } else {
                showErrorToast("Failed to subscribe to newsletter");
            }
        }
    };

    return (
        <footer className="bg-slate-900 border-t border-t-slate-700 border-opacity-35 text-gray-300 py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Social Links */}
                    <div className="max-w-sm">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                                {/* <FaDiscord className="text-3xl hover:text-indigo-500" /> */}
                                <p>discord</p>
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <TwitterIcon className="text-3xl hover:text-indigo-500" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <InstagramIcon className="text-3xl hover:text-indigo-500" />
                            </a>
                        </div>

                    </div>

                    {/* Legal Links */}
                    <div className="max-w-sm">
                        <h2 className="text-lg font-semibold mb-4">Legal</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/terms" className="hover:text-indigo-500">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy" className="hover:text-indigo-500">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-indigo-500">FAQs</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="max-w-sm">
                        <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
                        <p className="mb-4">Subscribe to our Newsletter</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="py-2 px-3 bg-zinc-700 border border-zinc-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 duration-200"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 w-full h-10 text-white px-4 rounded-md mt-2"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 flex justify-center items-center">
                    <p>&copy; 2025 Neurosystems All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
