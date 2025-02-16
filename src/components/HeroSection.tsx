import heroImage from '../assets/dental1.png'; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-600 to-blue-700 text-white py-32 h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Overlay to darken image */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 md:px-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Maryadit Dental Clinic
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          📍 Gongabu, Ganesthan, Tokha-11, Kathmandu | 📞 (976)358-3807 | ⏰ Sun-Sat: 8 AM - 8 PM
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          ✨ Your Smile, Our Priority!
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Providing expert dental care for healthy, confident smiles.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
