import JobListPage from "./JobListPage";
import Sidebar from "./Sidebar";

const Body = ({filterJobs ,data ,setFilterJobs}) => {
  return (
    <div className="w-full flex">
      <Sidebar className="w-3/2" data={data} setFilterJobs={setFilterJobs}/>
      <JobListPage filterJobs={filterJobs}/>
    </div>
  );
};

export default Body;
