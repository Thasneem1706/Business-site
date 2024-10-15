const Header = () => {
    return (
      <header className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="flex justify-center md:justify-start">
              <img
                src="/writeit-logo.png"
                alt="Demo Image"
                className="logo-img"
                loading="lazy"
              />
            </div>
  
            <div className="flex justify-center md:justify-end">
              <a
                href="#demo"
                className="text-white button-primary"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  