import React from "react";

const CustomerResults = () => {
  const results = [
    {
      src: "https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/6414060a2d9306f153fb87c3_Group%20969.webp",
      alt: "Faster time-to-hire",
      text: "Faster time-to-hire",
    },
    {
      src: "https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/6414061697f1d13e00cf4367_Group%20962.webp",
      alt: "Increase in recruiter productivity",
      text: "Increase in recruiter productivity",
    },
    {
      src: "https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/641406220eac7c4519f23c1b_Group%20938.webp",
      alt: "Increase in response rate",
      text: "Increase in response rate",
    },
    {
      src: "https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/6414062e2d9306e771fb8a44_Group%20971.webp",
      alt: "Reduced cost-per-hire",
      text: "Reduced cost-per-hire",
    },
  ];

  return (
    <div className="customer-section">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Real Customers, Real Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={result.src}
                alt={result.alt}
                className="w-full h-auto max-w-[200px] mb-5"
                loading="lazy"
              />
              <div className="text-lg font-medium">{result.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerResults;
