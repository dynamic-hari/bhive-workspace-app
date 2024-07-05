function BodySection({ facilitiesList, spaceOverviewList }: any) {
  return (
    <div className="w-full px-10 py-5 sm:px-20 md:px-30 lg:px-40">
      <div className="flex items-center justify-between my-4">
        <span className="text-[#263238] font-bold text-xl sm:text-3xl md:text-4xl">
          Why Choose us?
        </span>
        <img src="/assets/right-arrow-icon.svg" className="sm:invisible" />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-0">
        {facilitiesList.map((data: any, index: number) => (
          <div
            key={data.label + ":" + index}
            className="bg-[#FFFFFF] p-4 flex flex-col justify-around md:flex-row md:justify-start items-center h-full"
          >
            <img
              src={data.icon}
              alt={data.label}
              className="md:inline-block"
              width={36}
              height={36}
            />
            <span className=" font-medium px-3">{data.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between my-4">
        <span className="text-[#263238] font-bold text-xl sm:text-3xl md:text-4xl">
          Our Spaces <span className="hidden lg:inline-block">Overview</span>
        </span>
        <img src="/assets/right-arrow-icon.svg" className="sm:invisible" />
      </div>
      <div className="grid grid-cols-1 gap-8  xl:grid-cols-3 xl:gap-4 ">
        {spaceOverviewList.map((data: any) => (
          <div
            key={data.id}
            className="bg-[#FFFFFF] px-4 py-2 rounded-lg h-full flex flex-col justify-evenly"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl text-[#263238] font-bold">
                {data.name}
              </span>
              <div className="p-1 flex flex-col bg-[#F9F9F9]  items-center">
                <img
                  src="/assets/images/data/assistant_direction.svg"
                  alt="distance-icon"
                />
                <span className="text-[#263238] text-xs font-medium">
                  {data?.distance}
                </span>
              </div>
            </div>
            <div className="inset-0 h-[60%] relative">
              <img
                src={data.image}
                alt={data.label}
                className="h-full w-full object-cover object-center rounded-lg"
              />
              <span className="bg-gradient-to-r from-[#263238] to-[#2F4B59] text-[#FFBB00] flex items-center justify-between absolute top-2 left-2 p-2 rounded-lg text-[10px] md:text-xs">
                <img src="/assets/images/data/work-space.svg" />
                Workspace
              </span>
            </div>
            <div className="flex items-center ">
              <div className="flex items-center justify-between w-full mx-1 md:mx-2  bg-[#F9F9F9] py-4 px-2 rounded-lg">
                <div className="text-[#65624C] font-medium text-[8px] md:text-[10px]">
                  <div>Day Pass</div>
                  <span className="text-xs md:text-lg  font-bold">
                    &#8377; {data.amountPerDay}
                  </span>
                  <span>/Day</span>
                </div>
                <div>
                  <span className="text-[#263238] font-extralight">{`>`}</span>
                  <span className="text-[#263238] font-medium">{`>`}</span>
                  <span className="text-[#263238] font-bold">{`>`}</span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mx-1 md:mx-2 relative  bg-[#FFCF4B] p-2 rounded-lg">
                <div className="text-[#514D2D] font-medium text-[8px] md:text-[10px]">
                  <div>Bulk Pass</div>
                  <span className="text-xs md:text-lg font-bold">
                    &#8377; {data.bulkAmount}
                  </span>
                  <span>/10 Days</span>
                </div>
                <span className="bg-[#263238] text-[#FFFDF7] font-medium text-[6px] md:text-[8px] absolute -top-2 left-[35%] rounded-md p-1">
                  20% Discount
                </span>
                <div>
                  <span className="text-[#263238] font-extralight">{`>`}</span>
                  <span className="text-[#263238] font-medium">{`>`}</span>
                  <span className="text-[#263238] font-bold">{`>`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodySection;
