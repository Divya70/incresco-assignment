import { useState, useEffect } from "react";
import { API_DATA } from "./constant";

const useApiData = () => {
  const [data, setData] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_DATA);
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

    fetchData();

    // return () => {};
  }, []);

  return { data, setData, filterJobs, setFilterJobs };
};

export default useApiData;
