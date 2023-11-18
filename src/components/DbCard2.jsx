import Checkbox from "../assets/Checkbox.png"
import SearchIcon from "../assets/search.png"
// import Buttonbase from "../assets/_Button base.png";
import Buttonbase1 from "../assets/Buttonbase1.png"
import Buttonbase2 from "../assets/Buttonbase2.png"
import Checkboxbase from "../assets/Checkboxbase.png";
import Checkbox2 from "../assets/Checkbox2.png"

import Avatargroup from "../assets/Avatar-group.png"
import Avatars from "../assets/Avatars.png";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Avatar6 from "../assets/Avatar6.png";
import Avatar7 from "../assets/Avatar7.png"

import Avatargroup1 from "../assets/Avatar-group1.png";
import Avatargroup2 from "../assets/Avatar-group2.png";
import Avatargroup3 from "../assets/Avatar-group3.png";
import Avatargroup4 from "../assets/Avatar-group4.png";
import Content from "../assets/Content.png";
import Progressbar from "../assets/Progressbar.png";
import Progressbar2 from "../assets/Progressbar2.png";
import Progressbar1 from "../assets/Progress-bar1.png";
import Progressbar3 from "../assets/Progress-bar3.png";
import Progressbar4 from "../assets/Progress-bar4.png";
import Progressbar5 from "../assets/Progress-bar5.png";
import Tablecell from "../assets/Table-cell.png";
import Tablecell1 from "../assets/Table-cell1.png";



export default function DbCard2() {
  return (
    <div>
    <section className="container px-4 mx-auto">
    <div className="p-5 flex items-center gap-x-6">
    </div>

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-x-3">                                                         
             <h1 className="flex text-xl font-bold leading-none text-gray-900 dark:text-white">                          
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
                  </svg></h1>
                  </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-2">
                                        <span>License</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-2">
                                        <span>Status</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Users</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">About</th>

                                <th scope="col" className="relative py-3.5 px-4">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        {/* this is row 1 */}
                        
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr className="bg-gray-50 dark:bg-gray-800">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkboxbase} alt="Description of the image" />
                                        <img src={Avatar} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Catalog</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">catlogapp.io</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-emerald-500">customers</h2>
                                </div>
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatars} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Content Curating app</h2>
                                <h6 className="text-sm font-normal">Bring all your news into one place</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
{/* this is row 2 */}


                        <tr className="">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkboxbase} alt="Description of the image" />
                                        <img src={Avatar7} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Circooles</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">getCircooles.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar1} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-gray-200/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal">Churned</h2>
                                </div>
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatars} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Design Software</h2>
                                <h6 className="text-sm font-normal">Super lightweight design app</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>




{/* this is row 3*/}



                            <tr className="bg-gray-50 dark:bg-gray-800">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkboxbase} alt="Description of the image" />
                                        <img src={Avatar1} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Command + R</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">cmdr.ai</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar3} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-emerald-500">customers</h2>
                                </div>
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatargroup} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Data prdiction</h2>
                                <h6 className="text-sm font-normal">AI and machine learning data</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>



{/* this is row 4 */}




<tr className="">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkbox2} alt="Description of the image" />
                                        <img src={Avatar2} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Hourglass</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">hourglass.app</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-emerald-500">customers</h2>
                                </div>
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatargroup1} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Productivity app</h2>
                                <h6 className="text-sm font-normal">Time management and productivity</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>




{/* this is row 5 */}



                            <tr className="bg-gray-50 dark:bg-gray-800">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkbox2} alt="Description of the image" />
                                        <img src={Avatar3} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Layers</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">getlayers.io</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar3} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-gray-200/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-gray-500">Churned</h2>
                                </div>
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatargroup2} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Web app integrations</h2>
                                <h6 className="text-sm font-normal">Connect web apps seamlessly</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>




{/* this is row 6 */}


                            <tr className="">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkboxbase} alt="Description of the image" />
                                        <img src={Avatar5} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Quotient</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">quotient.co</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar4} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-emerald-500">customers</h2>
                                </div>
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatargroup3} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Sales CRM</h2>
                                <h6 className="text-sm font-normal">Web-based sales doc management</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>







{/* this is row 7 */}






<tr className="bg-gray-50 dark:bg-gray-800">
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                        <img src={Checkboxbase} alt="Description of the image" />
                                        <img src={Avatar6} alt="Description of the image" />

                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">Sisyphus</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">sisyphus.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                       
                                    <span className="h-1.5 w-1.5 rounded-full"></span>

                                        <h2 className="text-sm font-normal text-emerald-500">
                                         <img src={Progressbar2} alt="Description of the image" />
                                         </h2>
                                    </div>
                                   
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">


                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-emerald-500">customers</h2>
                                </div>
                            
                                </td>         

                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <img src={Avatargroup4} alt="Description of the image" />
                                </td>   

                                <td className="px-4 py-4 text font-medium text-gray-700 whitespace-nowrap">
                                <h2 className="text-sm font-normal">Automation and workflow</h2>
                                <h6 className="text-sm font-normal">Time tracking, invoicing and expenses</h6>
                                </td>  

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>














{/* this is row 8 */}


                          
                           
                           

                           
                        </tbody>
                        
                    </table>
                    <div className="flex">

<div className="pt-5 pb-5 pl-5 pr-1">
    <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
        <span>
            previous
        </span>
    </a>
    </div>
<div className="p-5">
<a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
        <span>
            Next
        </span>
    </a>
</div>

    <div className="page-row items-center hidden lg:flex">           
        <a href="#" className="ml-80 pl-rem-80 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">Page 1 of 10</a>
    </div>

   
</div>

                </div>
            </div>
        </div>
    </div>

  
</section>
    </div>
  )
}
