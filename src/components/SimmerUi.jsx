const  CardShimmer= () => {
  return (
    <div className="w-full rounded-3xl shadow-md mb-2 ">
      <div className="flex justify-between items-center bg-customBlueGray rounded-t-lg p-6">
        <div className="bg-gray-300 flex items-center">
          <div className="flex items-center flex-grow">
            <div className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-md mr-4">
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2 ">
                <h1 className="bg-gray-300 animate-pulse"></h1>
              </div>
              <div className="flex items-center mb-2">
                <h2 className="text-sm"></h2>
              </div>
              <div className="flex items-center">
                <h3 className=" bg-gray-300 animate-pulse"></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-7 items-center justify-center">
          <div className="bg-gray-300 h-4 w-20 animate-pulse"></div>
          <div className="w-20 h-20 rounded-full bg-gray-300 animate-pulse"></div>
        </div>
      </div>

      <div className="bg-gray-300 p-2 flex justify-between items-center px-6 rounded-b-lg">
        <p className="text-gray-400 animate-pulse w-10"></p>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-gray-300 animate-pulse"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
const SimmerUi = () => {
    return (
      <div className="shimmer-container">
        {new Array(7).fill(0).map((element, index) => {
          return (
            <div key={index} className="m-5">
              <CardShimmer />
            </div>
          );
        })}
      </div>
    );
  };

export default SimmerUi;
