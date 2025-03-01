import Services from "./Services";
import HeroSection from "./HeroSection";
import CommunityServices from "./CommunityServices";
import About from "./About";

const MaryaditDental = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Maryadit Dental Clinic</div>
          <div className="space-x-8 text-lg">
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#about-us" className="hover:text-yellow-400">
              About Us
            </a>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact Info
            </a>
            <a href="#community" className="hover:text-yellow-400">
              Community Activities
            </a>
            <a href="#team" className="hover:text-yellow-400">
              Meet the Team
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />

      {/* Home Section */}
      <section id="home" className="px-6 py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us?
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl text-yellow-500 mb-4">✔</div>
            <h4 className="font-semibold">Experienced & Caring Dentists</h4>
            <p>
              Our team has extensive experience in providing dental care with a
              compassionate approach.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-yellow-500 mb-4">✔</div>
            <h4 className="font-semibold">State-of-the-Art Technology</h4>
            <p>
              We use the latest technology to ensure the best care and precision
              for all dental procedures.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-yellow-500 mb-4">✔</div>
            <h4 className="font-semibold">Affordable & Insurance-Friendly</h4>
            <p>
              We offer affordable care with insurance options to make dental
              treatments accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <CommunityServices />
      <About />

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">Stay Connected</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://facebook.com"
              className="text-xl hover:text-yellow-400"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              className="text-xl hover:text-yellow-400"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              className="text-xl hover:text-yellow-400"
            >
              Twitter
            </a>
            <a
              href="mailto:dmaryadit@gmail.com"
              className="text-xl hover:text-yellow-400"
            >
              Email
            </a>
          </div>
          <p className="mt-6">
            &copy; 2025 Maryadit Dental Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MaryaditDental;
