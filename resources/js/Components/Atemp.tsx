import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      <form
        action="https://fabform.io/f/insert-form-id"
        method="POST"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Send Message
        </button>
        <p className="mt-5">
          If you are not a fan of forms, you can email us instead{" "}
          <a
            className="font-medium text-blue-600 hover:underline"
            href="https://veilmail.io/irish-geoff"
          >
            https://veilmail.io/irish-geoff
          </a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
