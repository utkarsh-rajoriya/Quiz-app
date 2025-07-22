import NavbarBefore from "./NavbarBefore";
import RoboMsg from "./RoboMsg";
import Particles from "../stylings/Particles";
import StarBorder from "../stylings/StarBorder";
import Register from "./Register";
import { useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const clickLogin = () => {
    setLogin(true);
    setSignup(false);
  };
  
  const clickSignup = () => {
    setSignup(true);
    setLogin(false);
  };

  return (
    <div className="relative bg-[#19213a] overflow-hidden">
      <div className="relative  w-full h-[100vh] md:h-[100vh] overflow-hidden">
        <div className="z-20">
          <NavbarBefore ClickLogin={clickLogin} ClickSignup={clickSignup}/>
        </div>

        <div className="relative z-20 pt-[5rem] top-[1.5rem] md:top-[10rem] lg:top-0 flex-col justify-center items-center">
          <h1 className="p-2 text-[2.5rem] md:text-[3rem] font-bold  text-white text-center">
            Welcome to Quiz Mania
          </h1>

          <p className="max-md:hidden my-4 text-lg tracking-wide text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ea
            natus. Nostrum nulla recusandae
          </p>

          <div className="text-center">
            <StarBorder
              as="button"
              className="custom-class"
              color="white"
              speed="1.5s"
              onClick={clickSignup}
            >
              Get Started
            </StarBorder>
          </div>
        </div>

        <div className="absolute top-10 w-full h-full flex justify-center items-center overflow-hidden">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={400}
            particleSpread={15}
            speed={0.06}
            particleBaseSize={200}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="z-20 absolute bottom-[4vh] right-15 md:right-20 lg:bottom-0">
          <RoboMsg
            msg={
              "Hi Dear, Welcome to Quiz Mania. Here you score and compete others"
            }
            type={"happyRobo"}
            delay={1.5}
          />    
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Register showLogin={login} showSignup={signup} ClickLogin={clickLogin} />
      </div>
    </div>
  );
};

export default Home;
