import JobListPage from "./JobListPage";
import Sidebar from "./Sidebar";

const Body = ({filterJobs}) => {
  return (
    <div className="w-full flex">
      <Sidebar className="w-3/2" />
      <JobListPage filterJobs={filterJobs}/>
    </div>
  );
};

export default Body;
