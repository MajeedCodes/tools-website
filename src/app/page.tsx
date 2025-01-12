import { FiSearch, FiCode, FiImage, FiBarChart } from 'react-icons/fi';

const tools = [
  { name: 'SEO Analyzer', icon: FiSearch },
  { name: 'Code Optimizer', icon: FiCode },
  { name: 'Image Compressor', icon: FiImage },
  { name: 'Performance Metrics', icon: FiBarChart },
];

export default function Home() {
  return (
    <>

     <Head>
       
        <title>Dev Tools</title>
        <meta name="description" content="We offer a wide variety of coding tools 100% free designed to make your web development experience smoother. Some of our most popular tools. " />
        <meta name="keywords" content="tools, text to speech, javascrpit minify, html minify, css minify, image optimizer" />
        <meta name="author" content="MajeedCodes" />
       
      </Head>
      
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Optimize Your Web Presence
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Powerful tools for SEO, code optimization, and more
          </p>
          <button className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
            Explore All Tools
          </button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <tool.icon className="text-4xl text-indigo-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{tool.name}</h2>
              <p className="text-gray-600">
                Optimize your website with our powerful {tool.name.toLowerCase()} tool.
              </p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Tools?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Advanced algorithms for accurate results</li>
            <li>User-friendly interface for easy optimization</li>
            <li>Comprehensive reports and actionable insights</li>
            <li>Regular updates to keep up with industry standards</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Boost Your Online Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start optimizing your website today and see the difference!
          </p>
         
        </section>
      </main>

     
    </div>
    </>
  );
}
