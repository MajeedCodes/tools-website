"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Placeholder for form submission logic (like API request or email service)
      // Example: await sendFormData(formData);

      setStatusMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-[90%] mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Contact Us</h1>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">We'd Love to Hear From You!</h3>
          <p className="text-lg text-gray-700 mb-4">
            Whether you have a question, feedback, or just want to say hello, feel free to reach out. We're here to help and will get back to you as soon as possible.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            If you need support, please use the form below, or you can also email us directly at <span className="text-blue-600">contact@getforbe.com</span>.
          </p>
        </section>

        <section>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </section>

        {statusMessage && (
          <div className="mt-8 text-center">
            <p className={`text-lg font-semibold ${statusMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {statusMessage}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
