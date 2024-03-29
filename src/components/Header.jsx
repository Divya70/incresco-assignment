import { LuUser2 } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Header = ({ handleSearch}) => {
  const [searchJobs, setSearchJobs] = useState("");
  // search handler
  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setSearchJobs(userInput);
    handleSearch(userInput);
  };
  return (
    <nav className="bg-[#303B54] px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">Jobs</h1>
        <div className="flex items-center justify-center text-[#E3F1FD] px-4 py-2 bg-[#242D40] rounded-3xl w-80">
          <input
            type="text"
            placeholder="Search..."
            value={searchJobs}
            onChange={handleInputChange}
            className="outline-none focus:outline-none w-full  border-none bg-[#242D40] "
          />
          <FaSearch onClick={handleInputChange} />
        </div>
        <div className="flex gap-6">
          <div className="w-11 h-11 rounded-full bg-[#242D40] flex items-center justify-center">
            <LuUser2 className="  text-[#FFFFFF] w-9 h-6" />
          </div>
          <div className="w-11 h-11 rounded-full bg-[#242D40] flex items-center justify-center relative">
            <IoNotificationsOutline className=" text-[#FFFFFF] w-7 h-7" />
            <span className="absolute top-0 right-0 inline-block bg-notificationColor text-white text-xs font-semibold px-1 rounded-full">
              12
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
