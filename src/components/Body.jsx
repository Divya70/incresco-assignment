import JobListPage from "./JobListPage";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="w-full flex">
      <Sidebar className="w-3/2" />
      <JobListPage />
    </div>
  );
};

export default Body;
