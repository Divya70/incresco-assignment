import { LuUser2 } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import useApiData from "../utils/useApiData";
import { useState } from "react";
const Header = () => {
  const [searchJobs, setSearchJobs] = useState("");
  const { data, setFilterJobs } = useApiData();
  return (
    <nav className="bg-[#303B54] px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">Jobs</h1>
        <div className="flex">
          <input
            type="text"
            value={searchJobs}
            onChange={(e) => {
              setSearchJobs(e.target.value)
            }}
            className="bg-[#242D40] w-full px-20 py-2 rounded-3xl border-none focus:outline-none text-[#E3F1FD]"
          />
          <button onClick={()=>{
            const searchedJobs = data.jobs.filter((job)=>job.title.toLowerCase().includes(searchJobs.toLowerCase())
             )
             setFilterJobs(searchedJobs)
             setSearchJobs("")
          }}>search</button>
        </div>

        <div className="flex gap-6">
          <div className="w-11 h-11 rounded-full bg-[#242D40] flex items-center justify-center">
            <LuUser2 className="  text-[#FFFFFF] w-9 h-6" />
          </div>

          <div className="w-11 h-11 rounded-full bg-[#242D40] flex items-center justify-center">
            <IoNotificationsOutline className=" text-[#FFFFFF] w-7 h-7" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
