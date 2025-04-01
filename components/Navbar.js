export default function Navbar() {
  return (
    <nav className="w-full absolute flex-center">
      <div className="w-[90vw] relative mx-auto flex-between py-8">
        <h2 className="text-[2.6vw] leading-[2.6vw] tracking-[4px] outline-text">PIXEL</h2>
        <ul className="flex-center gap-20 font-medium uppercase tracking-[1px]">
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
          <li>
            <button type="button" className="px-8 py-3 border border-white uppercase">Learn More</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
