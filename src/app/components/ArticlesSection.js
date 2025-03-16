import Link from 'next/link';
import Image from 'next/image';

export default function ArticlesSection() {
  const articles = [
    {
      title: "The Future of Web Development",
      date: "March 15, 2025",
      category: "Technology",
      image: "/blog/article-1.jpg",
      slug: "future-of-web-development"
    },
    {
      title: "Best Practices in UI Design",
      date: "March 14, 2025",
      category: "Design",
      image: "/blog/article-2.jpg",
      slug: "ui-design-best-practices"
    },
    {
      title: "Cloud Computing Trends",
      date: "March 13, 2025",
      category: "Cloud",
      image: "/blog/article-3.jpg",
      slug: "cloud-computing-trends"
    },
    {
      title: "Mobile App Development Guide",
      date: "March 12, 2025",
      category: "Development",
      image: "/blog/article-4.jpg",
      slug: "mobile-app-development-guide"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          OUR LATEST ARTICLES
          <span className="ml-2 inline-block w-2 h-2 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Link 
              href={`/blog/${article.slug}`} 
              key={index}
              className="group"
            >
              <div className="rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-750 transition-colors">
                <div className="aspect-video bg-gray-800 flex items-center justify-center text-gray-600">
                  📝 Blog Post Image
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-500 text-sm">{article.category}</span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
