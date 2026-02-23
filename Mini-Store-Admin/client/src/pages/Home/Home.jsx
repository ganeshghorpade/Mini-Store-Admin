import React from 'react'

function Home() {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute w-full h-full">
  <img
    src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
    alt=""
    className="w-full h-full object-cover"
  />
  {/* Your floating divs or overlays */}
  {/* <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
  <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div> */}
</div>
        
        <div className="relative z-10 text-center px-7 sm:px-7 lg:px-8">
            <div className="animate-fadeInUp">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Welcome to the Mini store
                    <span className="block bg-gradient-to-r from-indigo-200 to-blue-600 bg-clip-text text-transparent">
                        Manage your products, orders, and customers easily
                    </span>
                </h1>
                <p className="text-xl sm:text-2xl text-white-200 mb-8 max-w-3xl mx-auto">
                    Transform your business with cutting-edge solutions and professional expertise that drives real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
                        <i data-lucide="rocket" className="w-5 h-5 mr-2"></i>
                        Get Started
                    </button>
                    <button className="glass-effect text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                        <i data-lucide="play-circle" className="w-5 h-5 mr-2"></i>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home