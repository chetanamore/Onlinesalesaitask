


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineChartPie } from "react-icons/hi";
// import { RiMessage2Line } from "react-icons/ri";
// import { LuBarChart } from "react-icons/lu";
// import { IoHomeOutline } from "react-icons/io5";
// import { IoSettingsOutline } from "react-icons/io5";

// const Sidebar = () => {
//   const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false); // State to manage the Analytics side bar

//   // Function to toggle the Analytics sidebar
//   const toggleAnalyticsSidebar = () => {
//     setIsAnalyticsOpen(!isAnalyticsOpen);
//   };

//   return (
//     <div className="flex w-[100%]">
//       {/* Main Sidebar */}
//       <div className="bg-[#3B175E] text-white h-screen flex flex-col justify-between fixed w-64 transition-all duration-300">
//         <div>
//           {/* Sidebar Heading */}
//           <h1 className="text-xl font-bold p-4">Sidebar</h1>

//           {/* Sidebar Links */}
//           <ul className="space-y-2">
//             <li className="p-4 hover:bg-purple-700">
//               <Link to="/home" className="flex items-center">
//                 <IoHomeOutline />
//                 <h1 className="ml-2">Home</h1>
//               </Link>
//             </li>

//             {/* Analytics Section */}
//             <li className="p-4 hover:bg-purple-700 cursor-pointer" onClick={toggleAnalyticsSidebar}>
//               <div className="flex items-center">
//                 <LuBarChart />
//                 <h1 className="ml-2">Analytics</h1>
//               </div>
//             </li>

//             {/* Other Sidebar Links */}
//             <li className="p-4 hover:bg-purple-700">
//               <Link to="/schedule-report" className="flex items-center">
//                 <RiMessage2Line />
//                 <h1 className="ml-2">Schedule Report</h1>
//               </Link>
//             </li>
//             <li className="p-4 hover:bg-purple-700">
//               <Link to="/demand-wise" className="flex items-center">
//                 <HiOutlineChartPie />
//                 <h1 className="ml-2">Demand Wise</h1>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Bottom Links */}
//         <div className="space-y-2">
//           <ul>
//             {/* Additional bottom sidebar links if needed */}
//           </ul>
//           <ul className="p-4">
//             <li className="hover:bg-purple-700 p-4 rounded">
//               <Link to="/settings" className="flex items-center">
//                 <span role="img" aria-label="settings"><IoSettingsOutline /></span>
//                 <h1 className="ml-2">Settings</h1>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Analytics Sidebar (Slides out next to the main sidebar) */}
//       <div
//         className={`bg-[#4D2370] text-white h-screen transition-transform duration-300 ${
//           isAnalyticsOpen ? "w-64" : "w-0"
//         } overflow-hidden`}
//       >
//         <div className="p-4">
//           <h2 className="text-xl font-bold">Analytics Menu</h2>
//           <ul className="mt-4 space-y-2">
//             <li className="p-2 hover:bg-purple-600">
//               <Link to="/live-insights" className="flex items-center">
//                 <LuBarChart />
//                 <h1 className="ml-2">Live Insights</h1>
//               </Link>
//             </li>
//             <li className="p-2 hover:bg-purple-600">
//               <Link to="/program-insights" className="flex items-center">
//                 <LuBarChart />
//                 <h1 className="ml-2">Program Insights</h1>
//               </Link>
//             </li>
//             <li className="p-2 hover:bg-purple-600">
//               <Link to="/product-ads-insight" className="flex items-center">
//                 <LuBarChart />
//                 <h1 className="ml-2">Product Ads Insight</h1>
//               </Link>
//             </li>
//             <li className="p-2 hover:bg-purple-600">
//               <Link to="/display-ads-insight" className="flex items-center">
//                 <LuBarChart />
//                 <h1 className="ml-2">Display Ads Insight</h1>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HiOutlineChartPie } from "react-icons/hi";
import { RiMessage2Line } from "react-icons/ri";
import { LuBarChart } from "react-icons/lu";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";

// Sample components for each route
const Home = () => <div className="w-full h-full bg-gray-100 p-0"></div>;
const ScheduleReport = () => <div className="w-full h-full bg-gray-100 p-0"></div>;
const DemandWise = () => <div className="w-full h-full bg-gray-100 p-0"></div>;
const Settings = () => <div className="w-full h-full bg-gray-100 p-0"></div>;

const Sidebar = () => {
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false); // State to manage the Analytics side bar

  // Function to toggle the Analytics sidebar
  const toggleAnalyticsSidebar = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  return (
    <div className="flex">
      {/* Main Sidebar (Fixed position) */}
      <div className="bg-[#3B175E] text-white h-screen flex flex-col justify-between w-32 fixed top-0 left-0 z-50">
        <div>
          {/* Sidebar Heading */}
          <h1 className="text-xl font-bold p-4">Sidebar</h1>

          {/* Sidebar Links */}
          <ul className="flex flex-col gap-10 space-y-2">
            <li className=" hover:bg-purple-700">
              <Link to="/home" className="flex flex-col gap-2 items-center">
                <IoHomeOutline className='text-[32px]'/>
                <h1 className="text-[13px] font-semibold">Home</h1>
              </Link>
            </li>

            {/* Analytics Section */}
            <li className=" hover:bg-purple-700 cursor-pointer" onClick={toggleAnalyticsSidebar}>
              <div className="flex flex-col gap-2 items-center">
                <LuBarChart className='text-[32px]'/>
                <h1 className="text-[13px] font-semibold">Analytics</h1>
              </div>
            </li>

            {/* Other Sidebar Links */}
            <li className=" hover:bg-purple-700">
              <Link to="/schedule-report" className="flex flex-col gap-2 items-center">
                <RiMessage2Line className='text-[32px]'/>
                <h1 className="text-[13px] font-semibold">Schedule Report</h1>
              </Link>
            </li>
            <li className=" hover:bg-purple-700">
              <Link to="/demand-wise" className="flex flex-col gap-2 items-center">
                <HiOutlineChartPie className='text-[32px]'/>
                <h1 className="text-[13px] font-semibold">Demand Wise</h1>
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Links */}
        <div className="space-y-2">
          <ul>
            {/* Additional bottom sidebar links if needed */}
          </ul>
          <ul className="p-4">
            <li className="hover:bg-purple-700 p-4 rounded">
              <Link to="/settings" className="flex flex-col items-center">
                <span role="img" aria-label="settings"><IoSettingsOutline className='text-[32px] font-semibold'/></span>
                <h1 className="ml-2">Settings</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Analytics Sidebar (Slides out next to the main sidebar, fixed as well) */}
      <div
        className={`bg-[#4D2370] text-white h-screen fixed top-0 left-44 transition-transform duration-300 ${
          isAnalyticsOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Analytics Menu</h2>
          <ul className="mt-4 space-y-2">
            <li className="p-2 hover:bg-purple-600">
              <Link to="/live-insights" className="items-center">
                <LuBarChart />
                <h1 className="ml-2">Live Insights</h1>
              </Link>
            </li>
            <li className="p-2 hover:bg-purple-600">
              <Link to="/program-insights" className="items-center">
                <LuBarChart />
                <h1 className="ml-2">Program Insights</h1>
              </Link>
            </li>
            <li className="p-2 hover:bg-purple-600">
              <Link to="/product-ads-insight" className="items-center">
                <LuBarChart />
                <h1 className="ml-2">Product Ads Insight</h1>
              </Link>
            </li>
            <li className="p-2 hover:bg-purple-600">
              <Link to="/display-ads-insight" className="items-center">
                <LuBarChart />
                <h1 className="ml-2">Display Ads Insight</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full h-screen overflow-auto bg-gray-100 p-14">
       
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/schedule-report" element={<ScheduleReport />} />
          <Route path="/demand-wise" element={<DemandWise />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;




