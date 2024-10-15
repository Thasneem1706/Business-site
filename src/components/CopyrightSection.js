// components/CopyrightSection.js

const CopyrightSection = () => {
    return (
        <section className="copybg py-5">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className=" text-bold">
                        Copyright © {new Date().getFullYear()} Write IT Solutions. All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CopyrightSection;
