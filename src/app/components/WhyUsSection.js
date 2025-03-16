import Image from 'next/image';

export default function WhyUsSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            WHY US?
            <span className="ml-2 inline-block w-2 h-2 bg-orange-500"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We bring together the best talent and expertise to deliver exceptional results for your projects.
            Our team of specialists ensures quality, innovation, and success in every engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Team {index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
