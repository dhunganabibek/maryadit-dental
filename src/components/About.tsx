import { PhoneIcon, MapPinIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/outline';

const TeamMembers = [
  {
    name: 'Dr. Raman Karki',
    title: 'BDS, NMC:31523',
    image: 'https://via.placeholder.com/150', // Placeholder image, replace with actual image URL
  },
  {
    name: 'Dr. Sarbagya Lal Pradhan',
    title: 'BDS, NMC:30589',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. Shrijana Acharya',
    title: 'BDS, NMC:36601',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. Sujita Shrestha',
    title: 'BDS, NMC: [Add NMC ID]',
    image: 'https://via.placeholder.com/150',
  },
];

const About = () => {
  return (
    <>
      {/* Meet the Team Section */}
      <section id="team" className="px-6 py-16 bg-gradient-to-b from-teal-500 to-blue-600 text-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Meet the Team</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TeamMembers.map((member, index) => (
            <div key={index} className="bg-white text-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-semibold text-xl text-teal-500 mb-2">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact" className="px-6 py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-8">Contact Us</h3>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <MapPinIcon className="w-6 h-6 text-teal-500" />
            <p className="text-lg">📍 Address: Gongabu, Ganesthan, Tokha-11 Kathmandu, Nepal</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <PhoneIcon className="w-6 h-6 text-teal-500" />
            <p className="text-lg">📞 Phone: (976)358-3807</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <EnvelopeIcon className="w-6 h-6 text-teal-500" />
            <p className="text-lg">✉ Email: dmaryadit@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <CalendarIcon className="w-6 h-6 text-teal-500" />
            <p className="text-lg">📅 Hours: Sun-Sat: 8 AM - 8 PM</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
