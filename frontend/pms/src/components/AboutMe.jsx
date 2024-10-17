import React from 'react';

const AboutMe = () => {
  return (
    <>
      <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Text Section */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl font-sans">
                Hey 👋 I am <br className="block sm:hidden" />
                Sudip Sharma
              </h2>
              
              <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 font-serif">
                A passionate aspiring Full-Stack Developer with a strong focus on JavaScript. My journey in web development is driven by a deep enthusiasm for both learning and creating, and I am dedicated to mastering the intricacies of both front-end and back-end technologies.
              </p>
              
              {/* Contact Box */}
              <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Me</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Email:{" "}
                  <a
                    href="mailto:info@sudipsharma.com.np"
                    className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                  >
                    info@sudipsharma.com.np
                  </a>
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Mobile:{" "}
                  <span className="font-semibold">+977 9816662624</span>
                </p>
              </div>

              {/* Social Link */}
              <p className="mt-8 text-lg text-gray-600 dark:text-gray-300">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative">Have a question?</span>
                </span>{" "}
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="https://www.linkedin.com/in/sudipsharmanp/"
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            {/* Right Image Section with Background and Styling */}
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-sky-200 to-blue-300 p-4 rounded-lg shadow-lg flex justify-center items-center">
                <img
                  className="relative w-80 h-80 object-cover rounded-full transition-transform duration-300 hover:scale-105"
                  src="/images/profile.png"
                  alt="Sudip Sharma"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
