import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaGlobe, FaXmark } from 'react-icons/fa6';
import logo from '../assets/images/logo.png';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { link: 'Residential', path: 'home' },
        { link: 'Commercial', path: 'about' },
        { link: 'Invest', path: 'services' },
        { link: 'Residence and passports', path: 'portfolio' },
        { link: 'Rent', path: 'contact' },
    ];

    return (
        <nav className="header flex justify-between items-center lg:px-20 px-4 py-3 sticky top-0 z-50 bg-white shadow-md">
            {/* Logo */}
            <div id="logo">
                <img src={logo} alt="company logo" className="lg:w-[150px] w-[120px] dark:invert" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex justify-center items-center gap-8">
                {navItems.map(({ link, path }) => (
                    <Link
                        key={path}
                        className="text-black text-[15px] uppercase font-saira cursor-pointer px-3 py-2 dark:text-black rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
                        to={path}
                        spy={true}
                        offset={-100}
                        smooth={true}
                    >
                        {link}
                    </Link>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black text-2xl cursor-pointer">
                    {isMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-3/4 bg-slate-800 text-white transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out lg:hidden shadow-lg`}
            >
                <button onClick={closeMenu} className="absolute top-5 right-5 text-white text-2xl">
                    <FaXmark />
                </button>
                <ul className="flex flex-col items-center justify-center h-full gap-6">
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={path}
                            className="text-white text-lg font-saira cursor-pointer px-5 py-3 rounded-lg hover:bg-red-600 hover:text-black transition-all duration-300 w-full text-center"
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            onClick={closeMenu}
                        >
                            {link}
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Right-side Icons */}
            <div className="flex items-center gap-4">
                <FaGlobe className="size-5 text-black cursor-pointer" />
                <div className="flex items-center gap-2 border rounded-full px-3 py-2 cursor-pointer">
                    <FaBars className="size-5 text-black" />
                    <FaUserCircle className="size-6 text-gray-700" />
                </div>
            </div>
        </nav>
    );
};

export default Header;
