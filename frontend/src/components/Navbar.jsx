import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div class="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a onClick={() => {navigate('/'); scrollTo(0, 0)}} class="flex-shrink-0 flex items-center">
                            <img class="h-8 w-auto" src={assets.newsly_logo} alt="Newsly" />
                            <span class="text-xl font-bold text-[#F08F26]">Newsly</span>
                        </a>
                        <div class="hidden md:ml-6 md:flex md:space-x-8">
                            <NavLink
                                to="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                Home
                            </NavLink>

                            <NavLink
                                to="news/business"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                Business
                            </NavLink>

                            <NavLink
                                to="news/general"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                General
                            </NavLink>

                            <NavLink
                                to="news/health"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                Health
                            </NavLink>

                            <NavLink
                                to="news/science"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                Science
                            </NavLink>

                            <NavLink
                                to="news/sports"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                Sports
                            </NavLink>

                            <NavLink
                                to="news/technology"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) => isActive
                                    ? "border-b-2 border-[#F08F26] text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"}>
                                Technology
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar