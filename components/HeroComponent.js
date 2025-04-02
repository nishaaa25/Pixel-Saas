export default function HeroComponent() {
  return (
    <section className="w-full relative h-screen overflow-hidden pt-[20vh] bg-gradient-to-b from-purple-900/30 from-10%  to-black/1 to-90%">
      <div className="w-[82vw] h-full ml-auto relative mr-12">
        {/* <div className="w-1/12 h-full relative"></div> */}
        <div className="w-full h-full py-[6vh] relative flex flex-col pr-[30px]">
          <div className="gap-8 flex flex-col pt-[2vh]">
            <h1 className="text-[8.2vw] leading-[8.2vw] uppercase tracking-[1px] text">
              MAXIMIZE GROWTH
            </h1>
            <div className="division"></div>
            <p className="sub-text">Learn More</p>
          </div>
          <div className="relative h-full flex-center place-self-end w-[25vw]">
            <div className="w-[20px] h-full relative bg-white mr-3"></div>
            <div className="relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
