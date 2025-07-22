import QuizLogo from "../assets/Quiz_Logo.png";
import StarBorder from "../stylings/StarBorder";

const NavbarBefore = ({ ClickLogin, ClickSignup }) => {
  return (
    <div className="mt-8 z-50 relative">
      <div className="px-4">
        <div className="pl-5 flex justify-evenly items-center">

          {/* Logo */}
          <img src={QuizLogo} alt="Quizlogo" className="Quizlogo h-13 w-auto" />

          {/* Play & Create Buttons */}
          <div className="font-Shantell text-2xl text-white flex gap-6 z-50">
            <button
              className="hover:underline"
              onClick={() => {
                ClickLogin && ClickLogin(); 
              }}
            >
              Play
            </button>
            <button
              className="hover:underline"
              onClick={() => {
                ClickSignup && ClickSignup(); 
              }}
            >
              Create
            </button>
          </div>

          {/* Login & Signup Buttons */}
          <div className="hidden md:flex gap-2 z-50">
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="2s"
              onClick={ClickLogin}
            >
              Login
            </StarBorder>

            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="2s"
              onClick={ClickSignup}
            >
              Sign up
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBefore;
