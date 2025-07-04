import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import RamanImage from "../assets/raman.jpeg";
import ShrijanaImage from "../assets/Shrijana.jpg";
import SujitaImage from "../assets/sujita.jpeg";
import AshikaImage from "../assets/ashika.jpeg";

const TeamMembers = [
  {
    name: "Dr. Raman Karki",
    title: "BDS, NMC:31523",
    image: RamanImage,
  },
  {
    name: "Dr. Shrijana Acharya",
    title: "BDS, NMC:36601",
    image: ShrijanaImage,
  },
  {
    name: "Dr. Sujita Shrestha",
    title: "BDS",
    image: SujitaImage,
  },
  {
    name: "Dr. Ashika Neupane",
    title: "BDS",
    image: AshikaImage,
  },
];

const About = () => {
  return (
    <>
      {/* Meet the Team Section */}
      <section
        id="team"
        className="px-6 py-16 bg-gradient-to-b from-teal-500 to-blue-600 text-white"
      >
        <h3 className="text-3xl font-semibold text-center mb-12 text-gray-700">
          Meet the Team
        </h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TeamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-xl text-teal-500 mb-2">
                {member.name}
              </h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        id="contact"
        className="relative px-6 py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800"
      >
        <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] opacity-10 bg-cover bg-center pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-gray-800">
            📞 Get In Touch With Us
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Address */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <MapPinIcon className="w-8 h-8 text-gradient-to-r from-teal-400 to-blue-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p className="text-gray-700">
                Gongabu, Ganesthan, Tokha-11 <br /> Kathmandu, Nepal
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <PhoneIcon className="w-8 h-8 text-gradient-to-r from-green-400 to-blue-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <p className="text-gray-700">(976) 358-3807</p>
            </div>

            {/* Email */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <EnvelopeIcon className="w-8 h-8 text-gradient-to-r from-pink-400 to-red-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-700">dmaryadit@gmail.com</p>
            </div>

            {/* Hours */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <CalendarIcon className="w-8 h-8 text-gradient-to-r from-yellow-400 to-orange-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Working Hours</h4>
              <p className="text-gray-700">Sun - Sat: 8 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
