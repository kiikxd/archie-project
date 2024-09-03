const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 mt-6 flex flex-wrap items-center justify-between px-4 md:px-12 lg:px-24 z-40 bg-transparent overflow-x-auto">
      <div className="flex items-center w-auto">
        <img
          src="./assets/icons/logo.svg"
          alt="Logo"
          className="w-[120px] md:w-[177px] h-auto"
        />
      </div>
      <div className="flex flex-wrap space-x-6 lg:space-x-16 md:text-2xl items-center">
        <button className="px-3 py-1.5 lg:px-[50px] lg:py-[20px] border border-white rounded-full text-custom-white hover:bg-white hover:text-black transition duration-300 cursor-pointer">
          Let's talk
        </button>
        <button className="text-custom-white underline md:ml-16">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
