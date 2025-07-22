import { FaFileAlt, FaPlusCircle } from 'react-icons/fa';
import Particles from '../stylings/Particles';

const Create = () => {
  return (
    <div className="relative bg-navy-dark min-h-screen font-poppins text-white bg-[#19213a] p-6 md:p-12 overflow-hidden">
      
      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full filter blur-3xl animate-blob opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000 opacity-50"></div>
      </div>

      {/* Main Content - positioned above the background */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
          Create Your Content
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          
          {/* Card 1: Create Quiz */}
          <a 
            href="/create-quiz" 
            className="relative w-full max-w-sm p-1 rounded-2xl bg-gradient-to-br from-accent-blue via-pink-500 to-purple-600 
                       transform hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="h-full w-full bg-navy-light/80 backdrop-blur-md rounded-xl p-8 text-center">
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                <FaFileAlt className="text-6xl text-white/90 mx-auto" />
              </div>
              <h2 className="text-3xl font-semibold text-white mb-2">Create Quiz</h2>
              <p className="text-gray-300">
                Assemble questions into a new quiz with a title and description.
              </p>
            </div>
          </a>

          {/* Card 2: Create Questions */}
          <a 
            href="/create-question" 
            className="relative w-full max-w-sm p-1 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-accent-blue
                       transform hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="h-full w-full bg-navy-light/80 backdrop-blur-md rounded-xl p-8 text-center">
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                <FaPlusCircle className="text-6xl text-white/90 mx-auto" />
              </div>
              <h2 className="text-3xl font-semibold text-white mb-2">Create Questions</h2>
              <p className="text-gray-300">
                Add new multiple-choice questions to your question bank.
              </p>
            </div>
          </a>

        </div>
      </div>
       <div className="absolute top-10 w-full h-full flex justify-center items-center overflow-hidden">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={400}
            particleSpread={14}
            speed={0.15}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
    </div>
  );
};
export default Create;
