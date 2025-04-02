export default function Navbar() {
  return (
    <nav className="w-full flex-center nav-shadow z-10 absolute top-0 ">
      <div className="w-[90vw] relative mx-auto flex-between py-8">
        <h2 className="text-[2.6vw] leading-[2.6vw] tracking-[2px] outline-text">PXL</h2>
        <ul className="flex-center gap-20 font-medium capitalize tracking-[1px] ">
          <li className="link">About</li>
          <li className="link">Contact</li>
          <li className="link">Pricing</li>
          <li>
            <button type="button" className="px-8 py-3 border border-white uppercase link">Learn More</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
