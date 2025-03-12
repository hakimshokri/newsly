import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    return (
        <div class="bg-gray-100 mt-28">
            <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="flex items-center">
                        <img class="h-8 w-auto" src={assets.newsly_logo} alt="Newsly" />
                        <span class="text-xl font-bold text-[#F08F26]">Newsly</span>
                        <p class="ml-4 text-gray-500">© 2025 Newsly. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer