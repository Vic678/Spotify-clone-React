import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Replace this with actual authentication logic

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            onClick={() => navigate("/premium")}
          >
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>

          {/* Authentication Options */}
          {!isAuthenticated ? (
            <div className="flex gap-2">
              <p
                className="bg-blue-500 text-white px-3 py-1 rounded-2xl cursor-pointer"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </p>
              <p
                className="bg-green-500 text-white px-3 py-1 rounded-2xl cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </p>
            </div>
          ) : (
            <p
              className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              V
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-[#242424] cursor-pointer px-4 py-1 rounded-2xl">
          Music
        </p>
        <p className="bg-[#242424] cursor-pointer px-4 py-1 rounded-2xl">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
