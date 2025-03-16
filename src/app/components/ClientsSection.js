import Image from 'next/image';

export default function ClientsSection() {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO at TechCorp",
      image: "/clients/client-1.jpg",
      testimonial: "Working with the team has been an incredible experience. Their expertise and dedication helped us achieve our goals."
    },
    {
      name: "Sarah Johnson",
      position: "CTO at InnovateLab",
      image: "/clients/client-2.jpg",
      testimonial: "The quality of work and attention to detail is outstanding. They've become an invaluable partner for our projects."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          OUR CLIENT
          <span className="ml-2 inline-block w-2 h-2 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-800 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mr-4 text-gray-600">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-500">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;{testimonial.testimonial}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
