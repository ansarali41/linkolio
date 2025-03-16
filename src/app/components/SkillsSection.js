import Image from 'next/image';

export default function SkillsSection() {
  const skills = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Creating responsive and modern web applications using cutting-edge technologies"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Building native and cross-platform mobile applications"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user interfaces and experiences"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure and services"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Analyzing and visualizing data to drive business decisions"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Ensuring robust security measures and best practices"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          OUR SKILLS
          <span className="ml-2 inline-block w-2 h-2 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center mr-4 text-2xl">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
