import React from 'react'
import Card from './Card'

const LandingPage = () => {
    let desc = "Generate short and neat links wiht ease using my URL Shortener website and its friendly user interface. Share URLs effectively across multiple platforms and track usage of your shortened URLs with the powerful analytics."
  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col lg:py-5 pt-15 lg:gap-10 gap-8 flex justify-between items-center">
            <div className="flex-1">
                <h1 className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">
                    Ishita's URL Shortener for Easier Sharing
                </h1>
                <p className='text-slate-700 text-sm my-5'>
                This is a URL shortener made in 2025 as a learning project by Ishita Khichar. It can generate and track the shortened URLs. It helps in sharing longer links in a neat format. Built using React Vite, Tailwind CSS and Java SpringBoot.
                </p>
                <div className="flex items-center gap-3">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 w-40 text-white rounded-md py-2">
                        Manage Links
                    </button>
                    <button className="color-btn border-blue-500 border-width:5px border text-blue-500 w-40 rounded-md py-2">
                        Create Short URL
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center w-full">
                <img className="sm:w-[480px] w-[400px] object-cover rounded-md"
                    src="/images/banana.png"
                    alt=""
                />
            </div>
        </div>
        <div className="sm:pt-12 pt-7">
            <p className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center">
                Trusted by individuals and teams at the world's best companies
            </p>
            <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
            <Card
                title="Simple URL Shortening"
                desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
                />
                <Card
                    title="Powerful Analytics"
                    desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
                />
                <Card
                    title="Enhanced Security"
                    desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
                />
                <Card
                    title="Fast and Reliable"
                    desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
                />
    
</div>

        </div>
    </div>
  )
}

export default LandingPage