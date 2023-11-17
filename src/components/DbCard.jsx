import SearchIcon from "../assets/search.png"
// import Buttonbase from "../assets/_Button base.png";
import Buttonbase1 from "../assets/Buttonbase1.png"
import Buttonbase2 from "../assets/Buttonbase2.png"
import Checkboxbase from "../assets/Checkboxbase.png"
import Avatargroup from "../assets/Avatar-group.png"
import Avatars from "../assets/Avatars.png";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Avatar6 from "../assets/Avatar6.png"
import Avatargroup1 from "../assets/Avatar-group1.png";
import Avatargroup2 from "../assets/Avatar-group2.png";
import Avatargroup3 from "../assets/Avatar-group3.png";
import Avatargroup4 from "../assets/Avatar-group4.png";
import Checkbox from "../assets/Checkbox.png";
import Content from "../assets/Content.png";
import Progressbar from "../assets/Progressbar.png";
import Progressbar2 from "../assets/Progressbar2.png";
import Progressbar1 from "../assets/Progress-bar1.png";
import Progressbar3 from "../assets/Progress-bar3.png";
import Progressbar4 from "../assets/Progress-bar4.png";
import Progressbar5 from "../assets/Progress-bar5.png";
import Tablecell from "../assets/Table-cell.png";
import Tablecell1 from "../assets/Table-cell1.png";


export default function DbCard() {
  return (
    <div>
      <div className="pl-20 flex p-0 mt-12 mt-10 mb-10 ml-6">
    <button
      className="mr-10 pr-20 block select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-purple-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-3"
      type="button"
      data-ripple-dark="true"
    >
      All time X
    </button>
    <button
      className="mr-10 pr-20 block select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-purple-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-3"
      type="button"
      data-ripple-dark="true"
    >
    US, AU, +4 X 

    </button>
    <button
      className="pr-10 mr-60 block select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-black-200 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-3"
      type="button"
      data-ripple-dark="true"
    >
      More filters
    </button>

    <div className=" flex relative bg-white rounded border border-gray-300">
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

{/* customers subdashboard panel */}

<div className="pl-20 ml-6">
<div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="flex text-xl font-bold leading-none text-gray-900 dark:text-white">
        <img src={Checkbox} alt="Description of the image" className="pr-3" />
Company 
        <svg
                    data-name="1-Arrow Up"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    strokeWidth="2"
                    stroke="green"
                    aria-hidden="true"
                    className="w-4 h-4"
                    transform="rotate(180)"
                  >
                    <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"></path>
                  </svg></h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            license use
        </a>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Status
        </a>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            user
        </a>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            About
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div> */}
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
</div>
    </div>
  )
}
