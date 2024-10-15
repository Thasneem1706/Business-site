import React from "react";

const CompanyLogos = () => {
  const logos = [
    {
      src: "/client-logo-1.png",
      alt: "Coca Cola",
    },
    {
      src: "/client-logo-2.png",
      alt: "HCL Healthcare",
    },
    {
      src: "/client-logo-3.png",
      alt: "Dell",
    },
    {
      src: "/client-logo-4.png",
      alt: "Ventura Foods",
    },
    {
      src: "/client-logo-5.png",
      alt: "Wayne Sanderson",
    },
    {
      src: "/client-logo-6.png",
      alt: "Samsara",
    },
    {
      src: "/client-logo-7.png",
      alt: "1Password",
    },
    {
      src: "/client-logo-8.png",
      alt: "Carvana",
    },
  ];

  return (
    <div className="logo-section">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center">Trusted by Clients across the globe
      </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center mt-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center mb-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-auto max-w-[130px] md:max-w-[120px] lg:max-w-40 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
