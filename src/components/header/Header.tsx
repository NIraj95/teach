import { Logo } from "../../assets/image.js";

import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container">
        <div className="flex items-center justify-between gap-12">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>

          <Nav />

          <div className="flex items-center gap-12">
            <button>Login</button>
            <button className="px-4 py-2 border-2 border-blue-grey-900 text-blue-grey-900 rounded hover:bg-blue-grey-900 hover:text-white rounded-lg">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
