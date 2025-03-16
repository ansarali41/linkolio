import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              YOUR LINK TO
              <span className="block text-orange-500">EXPERTISE</span>
            </h1>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-orange-500">45k</span>
                <span className="ml-2 text-gray-400">Specialists</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-orange-500">200+</span>
                <span className="ml-2 text-gray-400">Projects</span>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
          <div className="relative">
            <div className="relative w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
