import React, { useState } from 'react';
import { Plane, MapPin, Users, FileText, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import logo from './assets/logo.png';
import heroBg from './assets/hero-bg.png';
import simulator from './assets/simulator.png';
import flightPath from './assets/flight-path.png';
import ApplyForm from './ApplyForm';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="min-h-screen flex flex-col font-sans text-navy-900">
            {/* Global Navigation Bar */}
            {/* Placeholder: Add Global Navigation Bar here. */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <img src={logo} alt="Aviation Routes Logo" className="h-10 w-auto" />
                            <span className="font-bold text-xl tracking-tight text-navy-900">Aviation Routes</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-gray-700 hover:text-sky-400 transition-colors font-medium">About Us</a>
                            <a href="#services" className="text-gray-700 hover:text-sky-400 transition-colors font-medium">Services</a>
                            <a href="#locations" className="text-gray-700 hover:text-sky-400 transition-colors font-medium">Locations</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-sky-400 transition-colors font-medium">Testimonials</a>
                            <a
                                href="#apply"
                                className="bg-navy-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-400/30"
                            >
                                Apply Now
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-navy-900 hover:text-sky-400 focus:outline-none">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#about" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-sky-400 hover:bg-gray-50 rounded-md">About Us</a>
                            <a href="#services" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-sky-400 hover:bg-gray-50 rounded-md">Services</a>
                            <a href="#locations" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-sky-400 hover:bg-gray-50 rounded-md">Locations</a>
                            <a href="#testimonials" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-sky-400 hover:bg-gray-50 rounded-md">Testimonials</a>
                            <a
                                href="#apply"
                                onClick={toggleMenu}
                                className="block w-full text-center mt-4 bg-navy-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-400 transition-all"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={heroBg} alt="Modern Aircraft" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-navy-900/85"></div>
                </div>

                {/* Flight Path Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <img src={flightPath} alt="Flight Path" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Identifying Remarkable Opportunities in the <span className="text-sky-400">Aviation Industry.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                            We define the route to your aviation career through in-depth market research and unwavering student support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#apply"
                                className="inline-flex items-center justify-center bg-sky-400 text-navy-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                            >
                                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-navy-900 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us / Our Story */}
            <section id="about" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-sky-400/20 rounded-2xl transform rotate-3"></div>
                            <img src={simulator} alt="Student in Simulator" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
                            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                                <p className="text-4xl font-bold text-sky-400 mb-1">15+</p>
                                <p className="text-navy-900 font-semibold">Years of Experience in Aviation Training</p>
                            </div>
                        </div>
                        <div>
                            <div className="inline-block px-4 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">Our Story</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">More Than Just a Flight School</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At Aviation Routes, we believe that becoming a pilot is more than just logging flight hours. It's about mentorship, community, and building a foundation for a lifelong career.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                With over 15 years of experience, we pride ourselves on our supportive environment. We don't just train pilots; we guide individuals through every step of their journey, ensuring they have the confidence and skills to succeed in the global aviation market.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-sky-400 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Unwavering student support from day one.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-sky-400 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Career guidance and mentorship programs.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-sky-400 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">A community-oriented approach to learning.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive support for every stage of your aviation career.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Future Pilots */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-sky-400">
                            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600">
                                <Plane size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Future Pilots</h3>
                            <p className="text-gray-600">Comprehensive training paths designed to take you from zero experience to a commercial pilot license.</p>
                        </div>

                        {/* Air Traffic Controllers */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-navy-900">
                            <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center mb-6 text-navy-900">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Air Traffic Controllers</h3>
                            <p className="text-gray-600">Specialized support and training programs for those aspiring to manage the skies.</p>
                        </div>

                        {/* Aviation Professionals */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-sky-400">
                            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Aviation Professionals</h3>
                            <p className="text-gray-600">Career advancement opportunities and advanced certifications for experienced professionals.</p>
                        </div>

                        {/* Financial & Admin Support */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-navy-900">
                            <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center mb-6 text-navy-900">
                                <FileText size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Financial & Admin Support</h3>
                            <ul className="space-y-2 text-gray-600 text-sm mt-4">
                                <li className="flex items-start"><span className="mr-2 text-sky-400">•</span>Financial Planning and Promotions</li>
                                <li className="flex items-start"><span className="mr-2 text-sky-400">•</span>Different Offerings and Discounts</li>
                                <li className="flex items-start"><span className="mr-2 text-sky-400">•</span>Visa Assistance</li>
                                <li className="flex items-start"><span className="mr-2 text-sky-400">•</span>Licensing Paperwork</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flight School Locations */}
            <section id="locations" className="scroll-mt-20 py-20 bg-navy-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Training Locations</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Internationally Standardized and Recognized Training across all our centers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {['United Kingdom', 'United States of America', 'Canada'].map((location) => (
                            <div key={location} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                                <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 shadow-lg shadow-sky-400/50">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{location}</h3>
                                <p className="text-gray-300">World-class facilities & standardized curriculum.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Student Success Stories</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our global community of future aviators.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* UAE National */}
                        <div className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-sky-400 text-6xl absolute top-4 left-6 opacity-20">"</div>
                            <p className="text-gray-700 italic mb-6 relative z-10">
                                "The supportive environment at Aviation Routes made all the difference. The instructors truly care about your success and are always there to guide you."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
                                <div>
                                    <p className="font-bold text-navy-900">Ahmed Al-Mansoori</p>
                                    <p className="text-sm text-gray-500">UAE National</p>
                                </div>
                            </div>
                        </div>

                        {/* Chinese National */}
                        <div className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-sky-400 text-6xl absolute top-4 left-6 opacity-20">"</div>
                            <p className="text-gray-700 italic mb-6 relative z-10">
                                "The technical training quality is exceptional. The simulators and aircraft are state-of-the-art, preparing us perfectly for the airline industry."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold mr-3">L</div>
                                <div>
                                    <p className="font-bold text-navy-900">Li Wei</p>
                                    <p className="text-sm text-gray-500">Chinese National</p>
                                </div>
                            </div>
                        </div>

                        {/* Indian National */}
                        <div className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-sky-400 text-6xl absolute top-4 left-6 opacity-20">"</div>
                            <p className="text-gray-700 italic mb-6 relative z-10">
                                "The financial and visa support was incredible. They helped me navigate all the paperwork and planning, so I could focus entirely on flying."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
                                <div>
                                    <p className="font-bold text-navy-900">Rahul Sharma</p>
                                    <p className="text-sm text-gray-500">Indian National</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="py-20 bg-gray-50 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Apply Now</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tell us about yourself and your goals, and our team will help you chart your route.</p>
                    </div>
                    <ApplyForm />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-sky-400">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Ready to Start Your Aviation Journey?</h2>
                    <p className="text-xl text-navy-900/80 mb-10 max-w-2xl mx-auto">
                        Join our global community of pilots and aviation professionals today. Your future in the skies awaits.
                    </p>
                    <a
                        href="#apply"
                        className="inline-flex items-center justify-center bg-navy-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Apply Now <ArrowRight className="ml-2 h-6 w-6" />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-navy-900 text-white py-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-6 md:mb-0">
                            <img src={logo} alt="Aviation Routes Logo" className="h-8 w-auto brightness-0 invert" />
                            <span className="font-bold text-xl tracking-tight">Aviation Routes</span>
                        </div>
                        <div className="flex space-x-6 mb-6 md:mb-0">
                            <a href="https://www.facebook.com/ebusinesspeople/" className="text-gray-400 hover:text-sky-400 transition-colors">Facebook</a>
                            <a href="https://www.linkedin.com/company/aviationroutes/" className="text-gray-400 hover:text-sky-400 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between text-gray-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} Aviation Routes. All rights reserved.</p>
                        <div className="mt-4 md:mt-0 space-x-4">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                        </div>
                    </div>
                    {/* Placeholder: Insert Google Analytics Script here. */}
                </div>
            </footer>
        </div>
    );
};

export default Home;
