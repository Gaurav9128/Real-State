import React, { useEffect } from 'react';
import heroimg from '../assets/images/Home.jpeg';
import { FaMapMarkerAlt } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Search } from 'lucide-react';

const Hero = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <>
            <div>
                <section
                    id='hero'
                    className='w-full h-[600px] bg-cover bg-center flex justify-center items-center text-center px-10 gap-7 relative'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimg})`
                    }}
                >
                    <div className='max-w-4xl'>
                        <h1 className='text-6xl text-white font-saira leading-[70px]'>
                            Helping you find the right property across the globe
                        </h1>
                        <br />
                        <p className='text-white font-saira text-xl mt-4'>
                            Help with property selection · Audit and due diligence · Transaction support
                        </p>
                    </div>
                </section>
            </div>
            <br />

            {/* Form */}
            <div id='form'
                className='lg:w-[55%] max-w-[850px] w-full m-auto flex flex-wrap lg:flex-nowrap items-center gap-2 px-3 p-3 rounded-xl bg-white shadow-lg relative top-[-50px]'>

                {/* Location Input */}
                <div className='w-full lg:w-[24%] text-center'>
                    <h1 className='text-black font-saira font-bold flex items-center justify-center gap-2'>
                        LOCATION <FaMapMarkerAlt className='text-red-600 text-lg' />
                    </h1>
                    <input
                        type='text'
                        placeholder='Enter an address, state, city or pincode'
                        className='bg-white p-2 w-full mt-2 border-b-[2px] border-gray-400 outline-none'
                    />
                </div>

                {/* Property Type Dropdown */}
                <div className='w-full lg:w-[22%]'>
                    <h1 className='text-black font-saira font-bold'>Choose Property Type</h1>
                    <select className='bg-white p-2 border-b-[2px] w-full mt-2 border-gray-400 text-black text-md'>
                        <option value="" disabled selected>Select Property</option>
                        <option value="rentals">Rentals</option>
                        <option value="sales">Sales</option>
                        <option value="commercial">Commercial</option>
                    </select>
                </div>

                {/* Price Range Dropdown */}
                <div className='w-full lg:w-[22%]'>
                    <h1 className='text-black font-saira font-bold'>Choose Price Range</h1>
                    <select className='bg-white p-2 border-b-[2px] w-full mt-2 border-gray-400 text-black text-md'>
                        <option value="" disabled selected>Property Category</option>
                        <option value="2lpa">2 LPA</option>
                        <option value="3lpa">3 LPA</option>
                        <option value="2cr">2 CR</option>
                        <option value="3cr">3 CR</option>
                        <option value="5cr">5 CR</option>
                    </select>
                </div>

                {/* USD Label */}
                <div className='w-auto lg:w-[10%] text-center relative top-[-5px]'>
                    <h1 className='text-black font-saira font-bold'>$(USD)</h1>
                </div>


                {/* Search Button */}
                <div className='w-auto flex items-end'>
                    <button className='bg-[#c49b6c] hover:bg-[#b18a5d] p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'>
                        <Search size={25} color="white" />
                    </button>
                </div>
            </div>


        </>
    );
};

export default Hero;
