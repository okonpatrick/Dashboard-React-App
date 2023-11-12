import NotificationIcon from "../assets/Actions.png"
import FemaleImg from "../assets/Dropdown.png"
import PageIcon from "../assets/Content.png"
import zapicon from "../assets/zapicon.png"

function Navbar() {
    return (
      <nav className="bg-gray-auto">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <img src={PageIcon} alt="Description of the image" />
                <span className="font-bold pl-2">Untitled UI</span>
              </a>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Projects</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Tasks</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Reporting</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Users</a>
              </div>
            </div>
  
            <div className="hidden md:flex items-center space-x-1 pl-40">
              <a href="#" className="flex items-center py-2 px-5 bg-white hover:bg-black text-black hover:text-white border border-black rounded transition duration-300">
                <img src={zapicon} alt="Description of the image" style={{ marginRight: '6px' }}/>
                Upgrade now
              </a>
            </div>
  
            <a href="#" className="py-5 px-2 text-gray-700 hover:text-gray-900">
              <img src={NotificationIcon} alt="Description of the image" />
            </a>
  
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              <img src={FemaleImg} alt="Description of the image" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
