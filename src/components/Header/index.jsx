import logo from "../../assets/logo_mindthegraph.svg";

const Header = () => {
  return (
    <header className="flex 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs">
      <div
        className="ml-10 mt-8 w-2/12 cursor-pointer"
        onClick={() => {
          window.location.href = "https://mindthegraph.com";
        }}
      >
        <img src={logo} alt="Mind the Graph" />
      </div>
      <nav className="w-10/12 mr-8 mt-8">
        <ul className="flex flex-row justify-end text-white antialiased menu-items">
          <li className="py-2 px-5 pt-2.5 hover:scale-125 transition-all duration-300 ease-in-out">
            <a href="#">Templates</a>
          </li>
          <li className="py-2 px-5 pt-2.5 hover:scale-125 transition-all duration-300 ease-in-out">
            <a href="#">Prices</a>
          </li>
          <li className="py-2 px-5 pt-2.5 hover:scale-125 transition-all duration-300 ease-in-out">
            <a href="#">Blog</a>
          </li>
          <li className="py-2 px-5 pr-8 pt-2.5 hover:scale-125 transition-all duration-300 ease-in-out">
            <a href="#">Jobs</a>
          </li>
          <li
            className="mr-4 py-2 px-8 border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blackish hover:scale-110 transition-all duration-300 ease-in-out"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            <a href="#">Login</a>
          </li>
          <li
            className="py-2 px-8 pt-2.5 bg-purplish rounded-full cursor-pointer hover:bg-white hover:text-purplish hover:scale-110 transition-all duration-300 ease-in-out"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            <a href="#">Sign up free</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
