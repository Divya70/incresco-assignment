import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
function App() {
  const [data, setData] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(" https://demo4647612.mockable.io");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setData(responseData);
      setFilterJobs(responseData);
    } catch (error) {
    console.log("Error:",error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = (input) => {
    const filteredData = data.jobs.filter((job) =>
      job.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilterJobs({jobs:filteredData});
  };
  return (
    <>
    <div className="bg-customDarkBlue">
    <Header handleSearch={handleSearch}/>
      <Body filterJobs={filterJobs} data={data} setFilterJobs={setFilterJobs}/>
    </div>
    
    </>
  );
}

export default App;
