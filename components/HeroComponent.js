export default function HeroComponent() {
  return (
    <section className="w-full relative h-screen overflow-hidden pt-[20vh]">
      <div className="w-[95vw] h-full mx-auto relative flex-center">
        <ul className="flex-center flex-col gap-50 w-1/12 h-full relative">
          <li className="nav-links">Pixel flow</li>
          <li className="nav-links">Overview</li>
          <li className="nav-links">Our Story</li>
        </ul>
        <div className="w-1/12 h-full relative"></div>
        <div className="w-10/12 h-full pt-[12vh] relative gap-10 flex flex-col">
          <h1 className="text-[8.6vw] leading-[9vw] uppercase tracking-[1px]">Next Gen-Ai Application</h1>
          <div className="division"></div>
          <p className="sub-text">Learn More</p>
        </div>
      </div>
    </section>
  );
}