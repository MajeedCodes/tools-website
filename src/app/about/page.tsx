import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Web Tools</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>Web Tools</strong>, your go-to platform for optimizing and enhancing web development
            with powerful coding tools. Whether you're a seasoned developer or just starting out, our collection of online tools
            is designed to help you streamline your workflow and create faster, cleaner websites.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>Web Tools</strong>, we believe in simplifying the web development process. Our team consists of passionate
            developers and designers dedicated to creating tools that make coding more efficient and fun. We understand the importance of
            performance, scalability, and maintainability in modern web development, and our tools are built with these principles in mind.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Tools</h3>
          <p className="text-lg text-gray-700 mb-4">
            We offer a wide variety of coding tools designed to make your web development experience smoother. Some of our most popular tools
            include:
          </p>
          <ul className="space-y-4 text-lg text-gray-700 pl-6">
            <li>
              <strong>HTML Minifier:</strong> Reduce the size of your HTML files by removing unnecessary spaces, comments, and line breaks,
              leading to faster load times and better website performance.
            </li>
            <li>
              <strong>JavaScript Minifier:</strong> Compress your JavaScript code, reducing its size without affecting functionality. This helps your
              scripts load faster and improves the overall user experience.
            </li>
            <li>
              <strong>CSS Minifier:</strong> Compress your stylesheets by removing whitespace, comments, and redundant declarations to speed up
              rendering times.
            </li>
            <li>
              <strong>Image Optimizer:</strong> Optimize images without compromising quality, reducing file sizes for a faster and more responsive website.
            </li>
            <li>
              <strong>JSON Formatter:</strong> Easily format and beautify your JSON data for better readability and debugging.
            </li>
            <li>
              <strong>Base64 Encoder/Decoder:</strong> Convert text to Base64 encoding and decode it back to its original format, useful for embedding
              images and files directly in your code.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="/one.jpg" alt="Team Member 1" className="w-24 h-24 mx-auto object-cover rounded-full mb-4" />
              <h4 className="text-lg font-semibold">Alice Johnson</h4>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <img src="/two.jpg" alt="Team Member 2" className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
              <h4 className="text-lg font-semibold">Bob Smith</h4>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <img src="/three.png" alt="Team Member 3" className="w-24 h-24 mx-auto object-cover rounded-full mb-4" />
              <h4 className="text-lg font-semibold">Claire Lee</h4>
              <p className="text-sm text-gray-600">Product Manager</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Our Users Say</h3>
          <div className="space-y-6">
            <blockquote className="p-4 border-l-4 border-blue-600 bg-gray-50">
              <p className="text-lg text-gray-700 italic">"Web Tools has completely transformed the way I code. The tools are fast, efficient, and super easy to use!"</p>
              <footer className="text-sm text-gray-600 mt-2">- Jane Doe, Developer</footer>
            </blockquote>
            <blockquote className="p-4 border-l-4 border-blue-600 bg-gray-50">
              <p className="text-lg text-gray-700 italic">"I can't imagine building websites without Web Tools anymore. It's a game-changer!"</p>
              <footer className="text-sm text-gray-600 mt-2">- John Smith, Freelancer</footer>
            </blockquote>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <ul className="space-y-4">
            <li>
              <h4 className="text-lg font-semibold">Q: Are your tools free to use?</h4>
              <p className="text-gray-700">Yes, all our tools are completely free with no hidden charges.</p>
            </li>
            <li>
              <h4 className="text-lg font-semibold">Q: Do I need to create an account?</h4>
              <p className="text-gray-700">No, you can use our tools without any registration.</p>
            </li>
            <li>
              <h4 className="text-lg font-semibold">Q: How do you ensure data privacy?</h4>
              <p className="text-gray-700">All processing is done locally in your browser. We do not store any of your data on our servers.</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
