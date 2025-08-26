import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
    <Link href={"/"}><li className='mr-6 font-semibold'>Home</li></Link>
    <Link href={"/about"}><li className='mr-6 font-semibold'>About</li></Link>
    <Link href={"/products"}><li className='mr-6 font-semibold'>Products</li></Link>
    <Link href={"/addproduct"}><li className='mr-6 font-semibold'>Addproduct</li></Link>
    <Link href={"/contact"}><li className='mr-6 font-semibold'>Contacts</li></Link>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-62 p-2 shadow">
                  {links}
                    </ul>
                </div>
                <Link href="/" className='text-xl'>
                    <Image src={'/assets/logo.svg'} width={107} height={50} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline rounded-2xl text-amber-500">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;