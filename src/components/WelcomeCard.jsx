import DownloadIcon from "../assets/Icon.png";
// import DropdownIcon from "../assets/DropdownIcon.png"
import PlusIcon from "../assets/PlusIcon.png";

export default function WelcomeCard() {
  return (
    <div className="px-4 pt-10 ml-10 pl-12">
      <div className="md:flex items-center space-x-2">
        <div className="pl-5 pr-20 Welcomecard text-black text-2xl pb-0 mb-0 font-bold leading-none text-gray-900 dark:text-white">
          <h2>Welcome back, Olivia</h2>{" "}
        </div>
        <div></div>
        <div className="emptydiv hidden md:flex items-right space-x-2 pl-20 pr-40">
          {" "}
        </div>
        <div className="hidden md:flex items-right space-x-1 pl-80">
          <a
            href="#"
            className="flex py-2 px-3 bg-white hover:bg-gray text-black hover:text-purple border border-gray-300 rounded transition duration-300"
          >
            <img
              src={DownloadIcon}
              alt="Description of the image"
              width={20}
              height={5}
              style={{ marginRight: "6px" }}
            />
            Import
          </a>
        </div>
        <a
          href="#"
          className="md:flex items-right py-2 px-6 bg-purple-500 hover:bg-purple-600 text-white hover:text-black rounded  transition duration-300"
        >
          <img
            src={PlusIcon}
            alt="Description of the image"
            width={10}
            height={2}
            style={{ marginRight: "5px" }}
          />
          Add
        </a>
      </div>

      <h4 className="pl-5">
        Track, manage and forecast your customers and orders.
      </h4>
    </div>
  );
}
