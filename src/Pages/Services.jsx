import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Cloud, Palette, ShieldCheck, TrendingUp } from 'lucide-react';

// Modern Service Card with glowing effects
const ServiceCard = ({ title, content, icon, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden rounded-xl p-6 flex flex-col items-center h-full transition-all duration-300 ease-out ${isHovered ? 'transform scale-105' : ''}`}
            style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
                boxShadow: isHovered
                    ? `0 0 25px 2px ${color}40, 0 0 10px 1px ${color}30`
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glowing orb behind icon */}
            <div
                className="absolute opacity-20 rounded-full blur-xl transition-all duration-300"
                style={{
                    width: isHovered ? '150px' : '100px',
                    height: isHovered ? '150px' : '100px',
                    background: color,
                    top: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    filter: `blur(${isHovered ? '40px' : '30px'})`
                }}
            />

            {/* Icon container with glass effect */}
            <div
                className="relative mb-6 rounded-full p-4 z-10 transition-all duration-300"
                style={{
                    background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${color}30`
                }}
            >
                {React.cloneElement(icon, {
                    size: 32,
                    color: color,
                    className: 'transition-all duration-300',
                    style: {
                        filter: isHovered ? `drop-shadow(0 0 6px ${color})` : 'none'
                    }
                })}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 text-center z-10">
                {title}
            </h3>
            <p className="text-gray-300 text-center z-10">
                {content}
            </p>

            {/* Bottom highlight line */}
            <div
                className="absolute bottom-0 left-0 h-1 transition-all duration-300 ease-out"
                style={{
                    width: isHovered ? '100%' : '30%',
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    opacity: isHovered ? 0.8 : 0.3,
                }}
            />
        </div>
    );
};

// Animated Section Header
const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12 relative">
            <h2 className="text-4xl font-bold text-white mb-3 relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    );
};

const Services = () => {
    // Define the services with proper icons and colors
    const serviceItems = [
        {
            title: 'Software Development',
            content: 'We craft custom software solutions to meet your unique needs and business goals.',
            icon: <Code />,
            color: '#8b5cf6' // Purple
        },
        {
            title: 'Web & Mobile Apps',
            content: 'We build responsive and user-friendly web and mobile applications with cutting-edge technologies.',
            icon: <Smartphone />,
            color: '#3b82f6' // Blue
        },
        {
            title: 'Cloud Solutions',
            content: 'We offer scalable and secure cloud services designed to power your business infrastructure.',
            icon: <Cloud />,
            color: '#06b6d4' // Cyan
        },
        {
            title: 'UI/UX Design',
            content: 'Our designers create intuitive and visually appealing user interfaces that enhance user experience.',
            icon: <Palette />,
            color: '#ec4899' // Pink
        },
        {
            title: 'Quality Assurance',
            content: 'We ensure the quality and reliability of your software through comprehensive testing protocols.',
            icon: <ShieldCheck />,
            color: '#10b981' // Green
        },
        {
            title: 'Digital Marketing',
            content: 'We enhance your online presence with SEO, content strategy, and data-driven marketing campaigns.',
            icon: <TrendingUp />,
            color: '#f59e0b' // Amber
        }
    ];

    // Parallax scroll effect for header
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">

            {/* Hero Section with Parallax */}
            <div className="relative h-96 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.7), rgba(15, 23, 42, 0.9))',
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-80" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Innovative solutions designed to transform your business
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <SectionHeader
                    title="What We Offer"
                    subtitle="Explore our comprehensive range of services designed to help your business thrive in the digital landscape."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceItems.map((item, index) => (
                        <ServiceCard
                            key={index}
                            title={item.title}
                            content={item.content}
                            icon={item.icon}
                            color={item.color}
                        />
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-80" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader
                        title="Why Choose Us"
                        subtitle="We combine technical expertise with creative innovation to deliver exceptional results"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/4" />

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-blue-500 bg-opacity-10 rounded-lg p-3">
                                            <ShieldCheck className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-white">Uncompromising Quality</h3>
                                            <p className="mt-2 text-gray-300">We adhere to the highest standards of quality in every project we undertake.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-purple-500 bg-opacity-10 rounded-lg p-3">
                                            <Smartphone className="h-6 w-6 text-purple-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-white">Cutting-Edge Technology</h3>
                                            <p className="mt-2 text-gray-300">We leverage the latest technologies to provide innovative solutions.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-cyan-500 bg-opacity-10 rounded-lg p-3">
                                            <TrendingUp className="h-6 w-6 text-cyan-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-white">Result-Driven Approach</h3>
                                            <p className="mt-2 text-gray-300">We focus on delivering measurable results that drive business growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl" />
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
                                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                    </div>
                                    {/* Replace problematic placeholder with a colored div */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-4">Empowering Your Business</h3>
                                    <p className="text-gray-300 mb-6">
                                        Our team of experts is dedicated to helping your business reach its full potential through innovative digital solutions.
                                    </p>
                                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700 rounded-full opacity-10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700 rounded-full opacity-10 blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how our services can help you achieve your business goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                            Get in Touch
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-blue-500 rounded-full text-blue-400 font-semibold transition-all duration-300 hover:bg-blue-500/10">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;