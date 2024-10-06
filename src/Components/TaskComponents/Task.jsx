import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { LiaHandshake } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { LuClipboardList } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { TbListDetails, TbUserUp } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbColumns } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import { SlCallIn } from "react-icons/sl";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { SiFireship } from "react-icons/si";
import owner from "../../Img/sch2.jpeg"
// import { FaArrowUpDown, FaDownload, FaBars } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, FunnelChart, Funnel, LabelList } from 'recharts';

const DropdownItem = ({ label, count, isSelected, onToggle }) => (
    <div className="flex items-center justify-between py-1">
        <label className="flex items-center">
            <input
                type="checkbox"
                checked={isSelected}
                onChange={onToggle}
                className="mr-2"
            />
            <span>{label}</span>
        </label>
        <span>{count}</span>
    </div>
);

const Dropdown = ({ title, items, selectedItems, onItemToggle, onClearAll, isOpen, onToggle }) => {
    return (
        <div className="bg-white rounded shadow-md w-full">
            <div
                className="p-3 border-b flex justify-between items-center cursor-pointer"
                onClick={onToggle}
            >
                <span className="font-semibold">{title}</span>
                {isOpen ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
            </div>
            {isOpen && (
                <div className="p-3">
                    <div className="flex justify-between items-center mb-2">
                        <span>Selected: {selectedItems.length}/{items.length}</span>
                        <button className="text-blue-500" onClick={onClearAll}>Clear all</button>
                    </div>
                    {items.map((item) => (
                        <DropdownItem
                            key={item.label}
                            label={item.label}
                            count={item.count}
                            isSelected={selectedItems.includes(item.label)}
                            onToggle={() => onItemToggle(item.label)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const PaginationItem = ({ isActive }) => (
    <button
        className={`w-8 h-1 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300'
            } hover:bg-gray-400 transition-colors duration-200`}
    />
);

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="px-4 py-2 flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
                <PaginationItem
                    key={index}
                    isActive={index === currentPage}
                    onClick={() => onPageChange(index)}
                />
            ))}
        </div>
    );
};

const Task = () => {



    const metrics = [
        { title: 'Sent', value: '500K', borderColor: 'border-[#7C69BF]', bgColor: 'bg-[#F2EFFF]' },
        { title: 'Delivered', value: '420K', borderColor: 'border-[#F6BD4B]', bgColor: 'bg-[#FFF6E8]' },
        { title: 'Opened', value: '328K', borderColor: 'border-[#D5DAE5]', bgColor: 'bg-[#FFFFFF]' },
        { title: 'Engagement', value: '135K', borderColor: 'border-[#D5DAE5]', bgColor: 'bg-[#FFFFFF]' },
        { title: 'Engagement Rate', value: '14%', borderColor: 'border-[#D5DAE5]', bgColor: 'bg-[#FFFFFF]' },
    ];

    const data1 = [
        { date: '07/27', sent: 10000, delivered: 8000 },
        { date: '07/28', sent: 18000, delivered: 20000 },
        { date: '07/29', sent: 20000, delivered: 16000 },
        { date: '07/30', sent: 14000, delivered: 12000 },
        { date: '07/31', sent: 18000, delivered: 22000 },
        { date: '08/01', sent: 18000, delivered: 16000 },
        { date: '08/02', sent: 19000, delivered: 18000 },
    ];

    const initialData = [
        {
            name: "Jamie Chen",
            store: "lowe's of jonesboro",
            city: "Wasilla",
            region: "Southwest",
            totalOpportunities: 20,
            chase: 8,
            proposal: 4,
            contracting: 2,
            escalatedOpportunity: 2,
            won: 1,
            lost: 0,
            hygieneScore: "22%"
        },
        {
            name: "Morgan Green",
            store: "lowe's of carefree, az",
            city: "Carefree",
            region: "west",
            totalOpportunities: 35,
            chase: 12,
            proposal: 6,
            contracting: 5,
            escalatedOpportunity: 5,
            won: 3,
            lost: 1,
            hygieneScore: "35%"
        },
        {
            name: "Dana White",
            store: "lowe's of prescott",
            city: "Chandler",
            region: "southeast",
            totalOpportunities: 28,
            chase: 10,
            proposal: 5,
            contracting: 4,
            escalatedOpportunity: 4,
            won: 2,
            lost: 0,
            hygieneScore: "23%"
        },
        {
            name: "Riley Brown",
            store: "lowe's of sierra vista",
            city: "Mesa",
            region: "Midwest",
            totalOpportunities: 37,
            chase: 14,
            proposal: 6,
            contracting: 5,
            escalatedOpportunity: 5,
            won: 9,
            lost: 1,
            hygieneScore: "50%"
        }
    ];
    const funnelData = [
        { name: 'Stage 1', value: 1000, fill: '#D6DEFA' },
        { name: 'Stage 2', value: 800, fill: '#ACBEF4' },
        { name: 'Stage 3', value: 500, fill: '#829AEE' },
        { name: 'Stage 4', value: 200, fill: '#6688E8' },
        { name: 'Stage 5', value: 50, fill: '#6688E8' }
    ];

    const opportunities = [
        {
            title: "Stock Clearance Offer",
            value: "High Value",
            hygiene: "5/10",
            status: "Proposal",
            products: 5,
            revenue: 40000,
            salesPerson: "Alex Lobo",
            expectedClosureDate: "20 Aug 24",
            daysRemaining: 33,
            latestActivity: "19 Jul 24",
            latestActivityDetails: "Presentation attached",
            icon: <SiFireship className='text-orange-500' />,
            name: "Andrew George",
            ownerImage: owner
        },
        {
            title: "Summer Patio Furniture Sale",
            value: "High Value",
            hygiene: "5/10",
            status: "Proposal",
            products: 5,
            revenue: 40000,
            salesPerson: "Alex Lobo",
            expectedClosureDate: "20 Aug 24",
            daysRemaining: 33,
            latestActivity: "19 Jul 24",
            latestActivityDetails: "Presentation attached",
            icon: "🔥",
            name: "Andrew George",
            ownerImage: owner
        },
        {
            title: "Stock Clearance Offer",
            value: "Low Value",
            hygiene: "5/10",
            status: "Contracting",
            products: 5,
            revenue: 80000,
            salesPerson: "Alex Lobo",
            expectedClosureDate: "20 Aug 24",
            daysRemaining: 12,
            latestActivity: "19 Jul 24",
            latestActivityDetails: "Presentation attached",
            icon: "❄️",
            name: "Andrew George",
            ownerImage: owner
        }
    ];

    const [salesRepItems] = useState([
        { label: 'All Leads', count: 52 },
        { label: 'Alex Smith', count: 3 },
        { label: 'Morgan Green', count: 44 },
        { label: 'Dena White', count: 0 },
        { label: 'Riley Brown', count: 7 },
        { label: 'Jordan Lee', count: 0 },
        { label: 'Jamie Chen', count: 0 },
    ]);

    const [pivotByItems] = useState([
        { label: 'All Opportunities', count: 52 },
        { label: 'Chase', count: 3 },
        { label: 'Proposal', count: 0 },
        { label: 'Contracting', count: 0 },
        { label: 'Won', count: 12 },
        { label: 'Lost', count: 12 },
    ]);

    const [selectedSalesReps, setSelectedSalesReps] = useState(['Alex Smith', 'Morgan Green', 'Riley Brown']);
    const [selectedPivotBy, setSelectedPivotBy] = useState(['All Opportunities']);
    const [openDropdown, setOpenDropdown] = useState(null);

    const [view, setView] = useState('table');


    const toggleSalesRep = (label) => {
        setSelectedSalesReps(prev =>
            prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
        );
    };

    const togglePivotBy = (label) => {
        setSelectedPivotBy(prev =>
            prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
        );
    };

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };



    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedData = [...initialData].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const summaryData = [
        { name: 'All Opportunities', value: 50000, totalOpportunities: 264, opportunityCount: 124, averageTime: '10 Days', conversionProbability: 50 },
        { name: 'Chase', value: 30000, totalOpportunities: 172, opportunityCount: 50, averageTime: '15 Days', conversionProbability: 70 },
        { name: 'Proposals', value: 20000, totalOpportunities: 48, opportunityCount: 20, averageTime: '5 Days', conversionProbability: 75 },
        { name: 'Contracting', value: 10000, totalOpportunities: 21, opportunityCount: 9, averageTime: '9 Days', conversionProbability: 75 },
        { name: 'Won', value: 5000, totalOpportunities: 18, opportunityCount: 5, averageTime: '13 Days', conversionProbability: 100 },
        { name: 'Lost', value: 3000, totalOpportunities: 3, opportunityCount: 5, averageTime: '23 Days', conversionProbability: 0 },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border border-gray-200 shadow-md">
                    <p className="font-bold">{label}</p>
                    {payload.map((pld) => (
                        <p key={pld.dataKey} style={{ color: pld.color }}>
                            {pld.name}: {pld.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 5;

    // const TableView = () => (
    //     <table className="min-w-full table-auto border-collapse bg-white">
    //         <thead>
    //             <tr>
    //                 {Object.keys(initialData[0]).map((key) => (
    //                     <th
    //                         key={key}
    //                         onClick={() => handleSort(key)}
    //                         className="cursor-pointer px-4 py-2 border"
    //                     >
    //                         {key.charAt(0).toUpperCase() + key.slice(1)}
    //                         {sortColumn === key && (
    //                             sortDirection === 'asc' ? <HiChevronUp className="inline ml-1" /> : <HiChevronDown className="inline ml-1" />
    //                         )}
    //                     </th>
    //                 ))}
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {sortedData.map((row, index) => (
    //                 <tr key={index}>
    //                     {Object.values(row).map((value, cellIndex) => (
    //                         <td key={cellIndex} className="px-4 py-6 border">{value}</td>
    //                     ))}
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // );

    // const SummaryView = () => (
    //     <div className="flex flex-row gap-3 space-y-4 bg-white">
    //         {/* <ResponsiveContainer width="100%" height={300}>
    //             <LineChart data={data1}>
    //                 <CartesianGrid strokeDasharray="3 3" />
    //                 <XAxis dataKey="date" />
    //                 <YAxis />
    //                 <Tooltip content={<CustomTooltip />} />
    //                 <Legend />
    //                 <Line type="monotone" dataKey="sent" stroke="#8884d8" />
    //                 <Line type="monotone" dataKey="delivered" stroke="#82ca9d" />
    //             </LineChart>
    //         </ResponsiveContainer> */}
    //         <div className="w-[35%]">
    //             <ResponsiveContainer width="100%" height={300}>
    //                 <FunnelChart>
    //                     <Tooltip />
    //                     <Funnel dataKey="value" data={funnelData} isAnimationActive>
    //                         <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
    //                     </Funnel>
    //                 </FunnelChart>
    //             </ResponsiveContainer>
    //         </div>
    //         <div className="w-[65%]">
    //             <table className="min-w-full table-auto border-collapse">
    //                 <thead>
    //                     <tr>
    //                         <th className="px-4 py-2 border">Funnel Type</th>
    //                         <th className="px-4 py-2 border">Value</th>
    //                         <th className="px-4 py-2 border">Total Opportunities</th>
    //                         <th className="px-4 py-2 border">Opportunity Count</th>
    //                         <th className="px-4 py-2 border">Average Time</th>
    //                         <th className="px-4 py-2 border">Conversion Probability</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {summaryData.map((row, index) => (
    //                         <tr key={index}>
    //                             <td className="px-4 py-2 text-right border-r border-l">{row.name}</td>
    //                             <td className="px-4 py-2 text-right border-r border-l">${row.value.toLocaleString()}</td>
    //                             <td className="px-4 py-2 text-right border-r border-l">{row.totalOpportunities}</td>
    //                             <td className="px-4 py-2 text-right border-r border-l">{row.opportunityCount}</td>
    //                             <td className="px-4 py-2 text-right border-r border-l">{row.averageTime}</td>
    //                             <td className="px-4 py-2 text-right border-r border-l">{row.conversionProbability}%</td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // );
    const TableView = () => (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white">
                <thead>
                    <tr>
                        {Object.keys(initialData[0]).map((key) => (
                            <th
                                key={key}
                                onClick={() => handleSort(key)}
                                className="cursor-pointer px-2 md:px-4 py-2 border text-left"
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                {sortColumn === key && (
                                    sortDirection === 'asc' ? <HiChevronUp className="inline ml-1" /> : <HiChevronDown className="inline ml-1" />
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, cellIndex) => (
                                <td key={cellIndex} className="px-2 md:px-4 py-4 border">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const SummaryView = () => (
        <div className="flex flex-col md:flex-row gap-3 space-y-4 md:space-y-0 bg-white">
            {/* Funnel Chart Section */}
            <div className="w-full md:w-[35%]">
                <ResponsiveContainer width="100%" height={300}>
                    <FunnelChart>
                        <Tooltip />
                        <Funnel dataKey="value" data={funnelData} isAnimationActive>
                            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                        </Funnel>
                    </FunnelChart>
                </ResponsiveContainer>
            </div>

            {/* Table Section */}
            <div className="w-full md:w-[65%] overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Funnel Type</th>
                            <th className="px-4 py-2 border">Value</th>
                            <th className="px-4 py-2 border">Total Opportunities</th>
                            <th className="px-4 py-2 border">Opportunity Count</th>
                            <th className="px-4 py-2 border">Average Time</th>
                            <th className="px-4 py-2 border">Conversion Probability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summaryData.map((row, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 text-right border-r border-l">{row.name}</td>
                                <td className="px-4 py-2 text-right border-r border-l">${row.value.toLocaleString()}</td>
                                <td className="px-4 py-2 text-right border-r border-l">{row.totalOpportunities}</td>
                                <td className="px-4 py-2 text-right border-r border-l">{row.opportunityCount}</td>
                                <td className="px-4 py-2 text-right border-r border-l">{row.averageTime}</td>
                                <td className="px-4 py-2 text-right border-r border-l">{row.conversionProbability}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className='bg-[#F2EFFF] p-3'>

            <div className="flex flex-wrap items-center justify-between py-2 px-4 sm:px-10 m-2 bg-white shadow-md border overflow-hidden">
                <div className="flex gap-3 items-center mb-4 sm:mb-0 w-full sm:w-auto">
                    <div className='bg-gray-200 p-2'>
                        <LiaHandshake className="text-[32px] font-extralight text-gray-600" />
                    </div>
                    <div className='text-start'>
                        <h1 className="text-[16px] sm:text-[18px] font-normal text-gray-500">Demand Wise</h1>
                        <span className="text-[20px] sm:text-[22px] font-medium text-gray-500">Opportunity</span>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Find anything"
                            className="pl-8 pr-2 py-2 w-full sm:w-auto border shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <IoSearchOutline className="text-[20px] text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <div className="flex items-center gap-2 px-2 py-2 border shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto">
                        <span className="text-sm">12 Jul 24 - 22 Jul 24</span>
                        <SlCalender className="text-[20px] text-gray-600" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 p-4">
                {/* Priority Focus Card */}
                <div className="bg-[#7C69BF] text-white rounded-lg p-6 flex-1">
                    <div className="flex  justify-between items-center mb-10">
                        <h2 className="text-xl text-[#FFFFFF] font-semibold">Priority Focus</h2>
                        <button className="text-sm hover:underline">See All</button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start gap-8">
                        <div className="flex items-center gap-2">
                            <LuClipboardList size={20} />
                            <div>
                                <p className="text-sm">Today's Todo</p>
                                <p className="text-2xl font-bold">7</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <CiCalendar size={20} />
                            <div>
                                <p className="text-sm">Today's Closure Date</p>
                                <p className="text-2xl font-bold">3</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <BsStars size={20} />
                            <div>
                                <p className="text-sm">AI Suggested</p>
                                <p className="text-2xl font-bold">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goals Achievements Card */}
                <div className="bg-white rounded-lg p-6 flex-1 shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Goals Achievements</h2>
                        <button className="text-sm text-blue-600 hover:underline">See All Goals</button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="relative w-32 h-32">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#E5E7EB"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#8B5CF6"
                                    strokeWidth="3"
                                    strokeDasharray="80, 100"
                                />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-3xl font-bold">80%</p>
                                <p className="text-xs">Of Total Goals Achieved</p>
                            </div>
                        </div>
                        <div className="flex gap-24">
                            <div>
                                <p className="text-sm text-gray-600">Active Goals</p>
                                <p className="text-3xl font-bold">15</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Completed Goals</p>
                                <p className="text-3xl font-bold">11</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">*Date filter doesn't apply to this data</p>
                </div>
            </div>
            {/* <div>
                <div className='p-3 border border-gray-300"'>
                    <div className='flex flex-row gap-3 items-center'>
                        <h1>Sent </h1>
                        <i><CiCircleInfo /></i>
                    </div>
                    <div>
                        <h1>500k</h1>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-2 px-3 py-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {metrics.map((metric, index) => (
                    <div key={index} className={`p-3 border flex flex-col gap-2 ${metric.borderColor} ${metric.bgColor} rounded-lg`}>
                        <div className="flex flex-row gap-3 items-center">
                            <h1 className="text-sm font-normal">{metric.title}</h1>
                            <i><CiCircleInfo className="text-gray-500" /></i>
                        </div>
                        <div>
                            <h1 className="text-2xl font-normal">{metric.value}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold flex items-center">
                        <div className='bg-[#F2EFFF] p-2'>
                            <svg className=" w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        Performance Trend
                    </h2>
                    <div className="flex space-x-2">
                        <button className="px-2 py-1 bg-gray-100 rounded">D</button>
                        <button className="px-2 py-1 bg-gray-100 rounded">W</button>
                        <button className="px-2 py-1 bg-gray-100 rounded">M</button>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line type="monotone" dataKey="sent" stroke="#7C3AED" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="delivered" stroke="#FBBF24" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mt-4 p-2 bg-white">
                <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                    <div className='bg-[#F2EFFF] p-2 rounded-md'>
                        <TbUserUp className="text-gray-500 text-[32px]" />
                    </div>
                    <h2 className="text-lg font-semibold">Sales Rep</h2>
                    <div>
                        <CiCircleInfo className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:gap-3 items-start sm:items-center w-full sm:w-auto'>
                    <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                        <div className='flex border p-2'>
                            <TbColumns className="text-[20px] text-gray-500" />
                            <MdOutlineArrowDropDown className="text-[20px] text-gray-500" />
                        </div>
                    </div>
                    <div className="relative w-full sm:w-auto mb-3 sm:mb-0">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full sm:w-auto border p-2 rounded pl-10"
                        />
                        <IoSearchOutline className="absolute top-3 left-3 text-[20px] text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                        <div className='flex border p-2'>
                            <GoDownload className="text-[20px] text-gray-500" />
                        </div>
                    </div>
                    <div className="relative w-full sm:w-auto">
                        <select
                            value={view}
                            onChange={(e) => setView(e.target.value)}
                            className='border py-2 px-16 w-full sm:w-auto'
                        >
                            <option value="table">Table</option>
                            <option value="summary">Summary</option>
                        </select>
                        <FaBars className="absolute top-3 left-3 text-[20px] text-gray-500" />
                    </div>
                </div>
            </div>


            {view === 'table' ? <TableView /> : <SummaryView />}



            <div className="bg-gray-100 p-4 w-full min-h-screen">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 w-full">
                    <h1 className="text-2xl font-bold">Opportunities (80)</h1>
                    <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-8 pr-2 py-1 border rounded w-full max-w-xs"
                            />
                            {/* <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} /> */}
                        </div>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
                            {/* <Plus size={16} className="mr-1" />  */}
                            {/* <ChevronDown size={16} className="ml-1" /> */}
                            Create Opportunity
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 w-full">
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <Dropdown
                            title="Sales rep"
                            items={salesRepItems}
                            selectedItems={selectedSalesReps}
                            onItemToggle={toggleSalesRep}
                            onClearAll={() => setSelectedSalesReps([])}
                            isOpen={openDropdown === 'salesRep'}
                            onToggle={() => toggleDropdown('salesRep')}
                        />
                        <Dropdown
                            title="Pivot By"
                            items={pivotByItems}
                            selectedItems={selectedPivotBy}
                            onItemToggle={togglePivotBy}
                            onClearAll={() => setSelectedPivotBy([])}
                            isOpen={openDropdown === 'pivotBy'}
                            onToggle={() => toggleDropdown('pivotBy')}
                        />
                    </div>

                    <div className="w-full lg:w-3/4">
                        {opportunities.map((opportunity, index) => (
                            <div key={index} className="bg-white rounded shadow mb-4 w-full">
                                <div className="p-4 sm:flex justify-between items-start border-b-2">
                                    <div className="flex items-start space-x-3">
                                        <div className={`w-10 h-10 rounded flex items-center justify-center text-2xl ${opportunity.icon === "🔥" ? "bg-red-100" : "bg-blue-100"}`}>
                                            {opportunity.icon}
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-lg">{opportunity.title}</h2>
                                            <div className="flex space-x-2 mt-1">
                                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">{opportunity.value}</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Hygiene: {opportunity.hygiene}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sm:flex flex-row gap-6'>
                                        <div className='flex flex-col justify-center'>
                                            <img src={opportunity.ownerImage} alt="Owner" className="w-10 h-10 rounded-full" />
                                        </div>
                                        <div className='sm:flex flex-col gap-3'>
                                            <div>
                                                <h1 className='text-black text-xl font-semibold'>{opportunity.name}</h1>
                                            </div>
                                            <div className='flex flex-row sm:justify-end gap-2 sm:gap-4'>
                                                <div className='p-2 bg-gray-200 rounded-3xl'>
                                                    <SlCallIn className='sm:text-lg text-gray-600' />
                                                </div>
                                                <div className='p-2 bg-gray-200 rounded-3xl'>
                                                    <MdWhatsapp className='text-lg text-gray-600' />
                                                </div>
                                                <div className='p-2 bg-gray-200 rounded-3xl'>
                                                    <MdOutlineEmail className='text-lg text-gray-600' />
                                                </div>
                                                <div className='p-2 bg-gray-200 rounded-3xl'>
                                                    <TbListDetails className='text-lg text-gray-600' />
                                                </div>
                                                <div className='p-2 bg-gray-200 rounded-3xl'>
                                                    <PiSquaresFour className='text-lg text-gray-600' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 pb-4 mt-1 grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row gap-2'>
                                            <p className="text-gray-500">Status</p>
                                            <p>{opportunity.status}</p>
                                        </div>
                                        <div>
                                            <Pagination
                                                totalPages={totalPages}
                                                currentPage={currentPage}
                                                onPageChange={setCurrentPage}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Products</p>
                                        <p>{opportunity.products} Products</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Revenue</p>
                                        <p>${opportunity.revenue.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Sales Person</p>
                                        <p>{opportunity.salesPerson}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Expected Closure Date</p>
                                        <p>{opportunity.expectedClosureDate} ({opportunity.daysRemaining} days)</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Latest Activity</p>
                                        <p>{opportunity.latestActivity}</p>
                                        <p className="text-blue-500">{opportunity.latestActivityDetails}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Task;