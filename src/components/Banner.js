const Banner = () => {
    return (
      <section className="bg-midblue hero-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Automate your recruiting and hire faster — at scale
              </h1>
              <p className="text-lg lg:text-xl text-white">
                Sense eliminates manual and repetitive work for hiring teams while delivering a delightful experience to candidates
              </p>
  
              {/* <div className="mt-4">
                <img
                  src="https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/641402958a6143f3f2f4ceae_WhRated.webp"
                  alt="Rated Image"
                  className="w-28 lg:w-40"
                />
                <img
                  src="https://cdn.prod.website-files.com/613f2494a7d5cd1817022b81/66fea0b18a90e391d799b2d7_medal.png"
                  alt="Medal Image"
                  className="w-16 lg:w-24"
                />
              </div> */}
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8 sign-form">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Book our conversation </h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
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
                  type="text"
                  placeholder="Job Title"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3 border border-gray-300 rounded-md w-full"
                    required
                />
                <div className="flex flex-row gap-4">
                   <input
                      type="checkbox"
                      name="checkbox"
                      className="form-checkbox"
                    />
                    <label htmlFor="checkbox" className=" text-sm">
                    By submitting this form, I consent to Write IT Solutions Learning contacting me through Call/SMS/Email.
                    </label>
                </div>
                
                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full button-primary text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  