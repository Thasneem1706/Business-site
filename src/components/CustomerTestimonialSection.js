import React from "react";

const testimonials = [
  {
    // imgMain: "https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/641406ce2676dc99344f0862_Group%20874.webp",
    // imgExtra: "https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/641406f06452a9ec1b45fbad_Image%20155.webp",
    name: "Sucheta Phadke",
    position: "Sr Vice President",
    company: " Global Learning Solutions | CORE Education Technologies",
    quote:
      "“This is to thank Write IT Solutions, who has worked with CORE Education and Technologies Ltd. for almost seven months. During this tenure, the team of Write IT maintained the reputation and reliability by providing quality services to execute time bound projects in vocational domains. We would like to take this opportunity to appreciate and thank every team member for their timely support, enthusiasm and expertise throughout.”",
  },
  {
    name: "Sammir Inamdar",
    position: "CEO",
    company: " Enthrall Technologies",
    quote:
      "“We love working with you and your team, Write IT Solutions have been a valuable partner in progress. Thank you for your support, we will continue to work on new projects and take the partnership to the next level.”",
  },
];

const CustomerTestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-testi">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className=" text-lg font-bold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm">
                    {testimonial.position} 
                  </div>
                </div>

                <div className="flex justify-center">
                  <p>{testimonial.company}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-base">
                {testimonial.quote}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonialSection;
