import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-12 mt-16">
    <div className="container mx-auto px-6 lg:px-20">
      {/* Grid layout for sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-sm text-gray-200 leading-relaxed">
            Maryadit Dental Clinic is dedicated to providing high-quality dental
            care with a compassionate approach. Located in Kathmandu, we serve
            the community with integrity and excellence.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPinIcon className="w-5 h-5 text-yellow-300" />
              Gongabu, Tokha-11, Kathmandu
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <PhoneIcon className="w-5 h-5 text-yellow-300" />
              (976) 358-3807
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <EnvelopeIcon className="w-5 h-5 text-yellow-300" />
              dmaryadit@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6 text-xl">
            <a href="https://facebook.com" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a
              href="mailto:dmaryadit@gmail.com"
              className="hover:text-yellow-300"
            >
              <EnvelopeIcon className="w-5 h-5 inline" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-200">
        &copy; 2025 Maryadit Dental Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
