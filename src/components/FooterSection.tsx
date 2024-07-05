function FooterSection() {
  return (
    <>
      <div className="w-full px-10 py-5 sm:px-20 md:px-30 lg:px-40">
        <div className="flex items-center justify-between">
          <span className="text-[#263238] font-bold text-xl sm:text-3xl md:text-4xl my-2">
            Download our app now
          </span>
          <img
            src="/src/assets/right-arrow-icon.svg"
            className="sm:invisible"
          />
        </div>
        <div className="relative">
          <div className="bg-[#FFFFFF] h-[50%] shadow-[0px_0.86px_6.92px_0px_rgba(0,0,0,0.06)] rounded-lg  md:flex">
            <div className="flex justify-center w-full ">
              <img
                src="/src/assets/images/footer/app-info-img.svg"
                alt="app-info"
                className="object-contain w-64 sm:w-72 md:w-full lg:w-[60%]  md:h-full"
              />
            </div>
            <div className="md:flex md:justify-end md:flex-col md:px-20 md:py-10">
              <div className="hidden md:block md:my-10 ">
                <span className="text-sm md:text-md lg:text-xl text-[#605F5F] font-medium">
                  Boost your productivity with the BHIVE Workspace app. Elevate
                  your workspace, collaborate efficiently, and unlock exclusive
                  perks.
                </span>
              </div>
              <div className="flex justify-center items-center md:justify-start my-2">
                <img
                  src="/src/assets/images/footer/google-play-img.svg"
                  alt="google-play"
                  className="w-28 sm:w-36 md:w-40 mx-2"
                />
                <img
                  src="/src/assets/images/footer/app-store-img.svg"
                  alt="app-store"
                  className="w-28 sm:w-36 md:w-40 mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222E34] w-full h-5vh py-2 text-[#DDDDDD] text-xs md:text-sm lg:text-md font-normal relative bottom-0 flex justify-center">
        © Copyright 2024. Bhive Private Limited
      </div>
    </>
  );
}

export default FooterSection;
