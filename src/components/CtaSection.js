
import { useState } from 'react';

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div id="accelerate-hiring" >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div>
            <h1 className="text-6xl font-bold text-gray-800 ">
              Get your own <br/> Custom eLearning 
            </h1>
            <p className="text-lg text-3xl text-gray-600 mt-4">
            See how 1,000+ enterprises is learning with WriteIT solutions.

            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">See WriteIT Solution in action</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Company*"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Job Title*"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Work Email*"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center text-green-600 text-lg">
                Thank you! Your submission has been received!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
