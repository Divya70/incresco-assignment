import Apple from "../assets/Apple.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SimmerUi from "./SimmerUi";
function JobListPage({filterJobs}) {
  const percentage = 78;
  return (
    <div className="bg-customDarkBlue p-2  rounded-lg flex-grow m-4">
      <div className="flex justify-between items-center mb-4 ">
        <div className="text-customWhite text-base font-semibold">
          SEARCH RESULTS /JOBS - 2049 results
        </div>
        <div className="flex gap-4">
          <div className="text-customLightGray p-2 text-base">Sort by</div>
          <div className="flex items-center justify-center gap-2 text-[#333333] bg-customGray rounded-sm p-2">
            <button>Latest </button>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="text-white">
        {filterJobs?.jobs?.length > 0 ? (
          filterJobs?.jobs?.map((job, index) => (
            <div className="w-full rounded-3xl shadow-md mb-2 " key={index}>
              <div className="flex justify-between items-center bg-customBlueGray rounded-t-lg p-6">
                <div className=" text-white  flex items-center">
                  <div className="flex items-center flex-grow">
                    <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md mr-4">
                      <img src={Apple} alt="" className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <h1 className="text-xl font-semibold">{job.title}</h1>
                      </div>
                      <div className="flex items-center mb-2">
                        <h2 className="text-sm">{job.company}</h2>
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-sm">{job.location}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-7 items-center justify-center">
                  <div
                    className="font-bold text-base text-[#FFFFFF]">
                    Skill Match
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    className="w-20 h-20"
                    styles={{
                      // Customize the root svg element
                      root: {},

                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `rgb(64, 162, 227, ${percentage / 100})`,
                        
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Customize transition animation
                        // transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        // transform: 'rotate(0.25turn)',
                        transformOrigin: "center center",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: "#E83363",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Rotate the trail
                        transform: "rotate(0.25turn)",
                        transformOrigin: "center center",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#FFFFFF",
                        // Text size
                        fontSize: "20px",
                        fontWeight: "600",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#E83363",
                      },
                    }}
                  />
                </div>
              </div>

              <div className="bg-gray-600 p-2 flex justify-between items-center px-6 rounded-b-lg">
                <p className="text-gray-400">
                  Posted 1 day ago • 10 applicants
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button className="bg-customBlue px-8 py-2 hover:bg-blue-600 text-white font-bold rounded-full">
                    Apply Now
                  </button>
                  <BsBookmark className="w-8 h-8" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <SimmerUi/>
        )}
      </div>
    </div>
  );
}

export default JobListPage;
