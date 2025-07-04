import campImage1 from "../assets/dental-camp.png";
import campImage2 from "../assets/volunteering.png";
import campImage3 from "../assets/dental-conference.png";

const CommunityServices = () => {
  return (
    <section
      id="community"
      className="px-6 py-16 bg-gradient-to-b from-green-200 to-blue-300 text-gray-700"
    >
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Giving Back to the Community
      </h3>
      <p className="max-w-4xl mx-auto text-center mb-12 text-gray-700">
        We actively organize health camps in rural villages, offering free
        dental checkups, treatments, and oral health education to underserved
        communities. Join us in our mission to create healthy smiles for all.
      </p>

      {/* Image Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow rounded-lg overflow-hidden transform hover:scale-105 duration-300">
          <img
            src={campImage1}
            alt="Dental Health Camp in Lamjung"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-teal-500 mb-4">
              Dental Health Camp in Lamjung
            </h4>
            <p className="text-sm text-gray-600">
              Maryadit Team actively participated in a dental health camp in
              Lamjung, providing free checkups and oral health education to the
              community.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow rounded-lg overflow-hidden transform hover:scale-105 duration-300">
          <img
            src={campImage2}
            alt="Trash Collection Event in Kathmandu"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-teal-500 mb-4">
              Trash Collection Event in Kathmandu
            </h4>
            <p className="text-sm text-gray-600">
              As part of our community outreach, we sponsored a trash collection
              event in Kathmandu to help improve the cleanliness of the city.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow rounded-lg overflow-hidden transform hover:scale-105 duration-300">
          <img
            src={campImage3}
            alt="Dental Conference"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-teal-500 mb-4">
              Dental Conference Participation
            </h4>
            <p className="text-sm text-gray-600">
              Our doctors actively participate in national dental conferences,
              enhancing their skills and knowledge to provide better care.
            </p>
          </div>
        </div>
      </div>

      {/* Event List */}
      <ul className="max-w-3xl mx-auto space-y-4 text-gray-700">
        <li className="flex items-center">
          <span className="text-teal-500 mr-2">📍</span> Maryadit Team
          participated in Dental Health Camp in Lamjung
        </li>
        <li className="flex items-center">
          <span className="text-teal-500 mr-2">📍</span> Sponsored a trash
          collection event held at Kathmandu
        </li>
        <li className="flex items-center">
          <span className="text-teal-500 mr-2">📍</span> Maryadit Doctors
          volunteered in Rasuwa for a 5-day Dental Camp
        </li>
      </ul>
    </section>
  );
};

export default CommunityServices;
