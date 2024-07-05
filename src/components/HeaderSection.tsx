function HeaderSection() {
  return (
    <>
      <div className="flex justify-between px-10 py-5 sm:px-20 md:px-30 lg:px-40">
        <div>
          <img
            src="/src/assets/images/bhive_logo.svg"
            alt="logo"
            className="w-28 lg:w-32"
          />
        </div>
        <div className="p-1.5 sm:p-2 lg:2.5 h-full  border-2 border-[#F2B304]">
          <img
            src="/src/assets/images/telephone_icon.svg"
            alt="logo"
            className="w-3 lg:w-4"
          />
        </div>
      </div>
      <div className="w-full min-w-[80vw] px-10 sm:px-20 md:px-30 lg:px-40 md:flex md:flex-row-reverse md:items-center md:justify-between md:bg-[url('/src/assets/images/header/header-background.svg')] ">
        <div className="w-full h-full md:w-1/3 flex justify-center ">
          <video
            preload="auto"
            autoPlay
            playsInline
            loop
            muted
            className="w-80 object-contain sm:w-[60%] md:w-full "
          >
            <source
              src="/src/assets/images/header/co-working-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="w-full md:w-2/3 text-[#263238] font-bold text-wrap text-xl text-center md:text-left md:text-2xl lg:text-4xl xl:text-6xl">
          Host your meeting with world-class amenities. Starting at
          <span className="text-[#FFBB00]"> ₹199/-!</span>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
