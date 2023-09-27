import '../App.css'

export default function Nav(){
  return (
    <>
      <nav className="nav">
        <div className="text-white">
          <p>Mospending</p>
        </div>

        <ul className="flex flex-col text-[#F4F4F4] font-light">
          <li className="px-2">Product</li>
          <li className="px-2">Company</li>
          <li className="px-2">Home</li>
          <li className="px-2">Utilities</li>

          <button className="">Login</button>
        </ul>
      </nav>
    </>
  );
}