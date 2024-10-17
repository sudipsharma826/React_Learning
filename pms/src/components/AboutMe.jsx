import React from 'react';

const AboutMe = () => {
  return (
    <>
      <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Text Section */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                Sudip Sharma
              </h2>
              
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                A passionate aspiring Full-Stack Developer with a strong focus on JavaScript. My journey in web development is driven by a deep enthusiasm for both learning and creating, and I am dedicated to mastering the intricacies of both front-end and back-end technologies.
              </p>
              
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative">Have a question?</span>
                </span>
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

            {/* Right Image Section */}
            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 xl:max-w-lg"
                src="/images/profile.png"
                alt="Profile"
              />
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="/images/profile.png"
                alt="Sudip Sharma"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
