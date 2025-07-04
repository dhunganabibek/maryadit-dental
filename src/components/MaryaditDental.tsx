import Services from "./Services";
import HeroSection from "./HeroSection";
import CommunityServices from "./CommunityServices";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MaryaditDental = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

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
      <Footer />
    </div>
  );
};

export default MaryaditDental;
