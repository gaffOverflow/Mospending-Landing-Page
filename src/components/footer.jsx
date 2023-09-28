import "../App.css";

export default function footer() {
  return (
    <>
      <footer className="mt-24">
        <div className="text-white bg-black font-Manrope p-7 pt-20">
                      <div className="-z-30 flex flex-col gap-2">
              <h5 className="relative text-xs before:content-[''] before:w-4 before:h-4 before:absolute before:bg-Orange-Accent before:rounded-full before:-left-2 before:-z-20 z-20">
                Mospending
              </h5>
              <p className="text-[10px] font-extralight">
                Discover the power of our fintech app!
              </p>
              <ul className="flex gap-3 text-white my-5 text-sm">
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-[9px] font-extralight flex justify-between">
              <ul className="flex flex-col gap-2">
                <h5 className="font-medium text-[10px] pb-2">Product</h5>
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <h5 className="font-medium text-[10px] pb-2">Company</h5>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <h5 className="font-medium text-[10px] pb-2">Utility</h5>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">404 page</a>
                </li>
                <li>
                  <a href="#">Protected Page</a>
                </li>
              </ul>
            </div>
          </div>
        
        <div className="text-[10px] text-white bg-black py-3 px-6 border-t border-[#444444]">
          © Mospending. Powered bySilver George
        </div>
      </footer>
    </>
  );
}
