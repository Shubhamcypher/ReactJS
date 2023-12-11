import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 border-none">
            <nav className="bg-yellow-200 border-black-200 rounded-md px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="https://www.computerhope.com/jargon/n/nids.htm" className="flex items-center">
                        <img
                            src="http://pluspng.com/img-png/png-logo-design-design-png-hd-1250.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        <p className='text-4xl text-blue-600 font-extrabold'>NIDS</p>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <NavLink
                            to="/login"
                            className="text-gray-800 hover:bg-purple-500   focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </NavLink>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive?"underline text-blue-500":'text-orange-700'}  border-b border-gray-100 hover:bg-red-500 hover:p-1 hover:rounded-xl lg:border-0 hover:text-black lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive?"underline text-blue-500":'text-orange-700'}  border-b border-gray-100 hover:bg-blue-500 hover:p-1 hover:rounded-xl lg:border-0 hover:text-black lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive?"underline text-blue-500":'text-orange-700'}   border-b border-gray-100 hover:bg-green-500 hover:p-1 hover:rounded-xl lg:border-0 hover:text-black lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/github'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive?"underline text-blue-500":'text-orange-700'}   border-b border-gray-100 hover:bg-purple-500 hover:p-1 hover:rounded-xl lg:border-0 hover:text-black lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

