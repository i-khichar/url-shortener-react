import React from 'react'
import {FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
        <div className="bg-white w-full sm:py-10 py-8">
            <h1 className="sm:text4xl text-slate-800 text-3xl font-bold italic mb-3">
                About Ishita's URL Shortener
            </h1>
            <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
                This is a URL shortener made in 2025 as a learning project by Ishita Khichar. It can generate and track the shortened URLs. It helps in sharing longer links in a neat format. Built using React Vite, Tailwind CSS and Java SpringBoot.
            </p>
            <div className="space-y-5 xl:w-[60%] lg:w[70%] sm:w-[80%] w-full">
                <div className="flex items-start">
                    <FaLink className = "text-blue-500 text-3xl mr-4"/>
                    <div>
                        <h2 className="sm:text-2xl font-bold text-slate-800">
                            Simple URL Shortening
                        </h2>
                        <p className="text-gray-600">
                            Experience the ease of creating short, neat URLs in just a few clicks. The friendly interface and fast setup process ensure minimum hassle as you start shortening URLs using this service.
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <FaShareAlt className="text-green-500 text-3xl mr-4" />
                    <div>
                        <h2 className="sm:text-2xl font-bold text-slate-800">
                            Powerful Analytics
                        </h2>
                        <p className="text-gray-600">
                            Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.
                        </p>
                    </div> 
                </div>
                <div className = "flex items-start">
                    <FaEdit className="text-purple-500 text-3xl mr-4"/>
                    <div>
                        <h2 className="sm:text-2xl font-bold text-slate-800">
                            Enhanced Security
                        </h2>
                        <p className="text-gray-600">
                            Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <FaChartLine className="text-red-500 text-3xl mr-4" />
                    <div>
                        <h2 className="sm:text-2xl font-bold text-slate-800">
                            Fast and Reliable
                        </h2>
                        <p className="text-gray-600">
                            Enjoy lightening-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AboutPage