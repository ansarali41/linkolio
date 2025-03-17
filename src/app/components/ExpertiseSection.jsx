export default function ExpertiseSection() {
  const expertiseItems = [
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "We develop comprehensive strategies tailored to your business objectives and market dynamics."
    },
    {
      icon: "💡",
      title: "Innovation Solutions",
      description: "Our team creates innovative solutions using cutting-edge technologies and methodologies."
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description: "We provide continuous support and guidance throughout your project journey."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          OUR EXPERTISE
          <span className="ml-2 inline-block w-2 h-2 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
