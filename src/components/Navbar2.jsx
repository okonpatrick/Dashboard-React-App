import SearchIcon from "../assets/search.png";

function Navbar2() {
  return (
    <nav className="bg-gray-auto">
      <div className="max-w-6xl mx-auto px-1">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="#"
                className="flex items-center py-0 px-2 text-gray-700 hover:text-gray-900"
              ></a>

              {/* Primary Nav (Hidden on Mobile) */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Overview
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Notifications
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Saved reports
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  User reports
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900 pr-40"
                >
                  Users
                </a>

                <div className="relative bg-white rounded border border-gray-30">
                  <span className="absolute inset-y-0 left-0 flex items-center p-3">
                    <img src={SearchIcon} alt="Description of the image" />
                  </span>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
