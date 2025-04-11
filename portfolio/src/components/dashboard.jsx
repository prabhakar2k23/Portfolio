import React from "react";
import { FaGithub, FaEnvelope, FaPhone,  FaLinkedin } from "react-icons/fa";
import MyImage from './1234.jpg';
import resumePDF from './resume.pdf';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-full p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={MyImage} className=" mb-4 h-48 w-45 rounded-full" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Prabhakar Kumar</h1>
          <p className="text-lg text-gray-600 mb-1">Full Stack Developer</p>
          <p className="text-gray-500 mb-4">Bihar, India</p>

          <div className="flex gap-4 text-indigo-500 text-xl">
            <a href="https://www.linkedin.com/in/prabhakar-kumar-bcet/" className="hover:text-indigo-700" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/prabhakar2k23" className="hover:text-indigo-700" target="_blank" rel="noreferrer"><FaGithub /></a>
             
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h2>
            <div className="text-gray-600 space-y-2">
              <div className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" /> pk912873@gmail.com</div>
              <div className="flex items-center gap-2"><FaPhone className="text-indigo-400" /> +91 7004394346</div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <span>HTML & CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Redux</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
              <span>Python, Core Java</span>
              <span>MYSQL</span>
              <span>Flask</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600">
              I am a passionate developer who enjoys building modern, responsive web applications with clean UI/UX. Always eager to learn and grow in the tech field.
            </p>
            <br />
            <a
             href={resumePDF}
             target="_blank"
             rel="noopener noreferrer"
             className="border-2 rounded-full text-white px-4 py-1    hover:bg-blue-900 transition"
             >
              View Resume
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default Dashboard;