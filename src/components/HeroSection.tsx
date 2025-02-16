import { PhoneIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
    return ( 
        <section className="relative bg-gradient-to-b from-purple-600 to-blue-700 text-white py-32">
        <div className="absolute inset-0 bg-opacity-40 bg-cover" style={{ backgroundImage: 'url(path_to_your_video_or_image.jpg)' }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Maryadit Dental Clinic</h1>
          <p className="text-xl mb-8">📍 Gongabu, Ganesthan, Tokha-11, Kathmandu | 📞 (976)358-3807 | ⏰ Sun-Sat: 8 AM - 8 PM</p>
          <h2 className="text-3xl font-semibold mb-4">✨ Your Smile, Our Priority!</h2>
          <p className="mb-6">Providing expert dental care for healthy, confident smiles.</p>
        </div>
      </section>)
}

export default HeroSection;