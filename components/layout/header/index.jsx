import React from "react";
import Image from "next/image";
import Menu from "../../../public/icon/list.png";

const Header = () => {
  return (
    <header className="fixede inset-x-0 top-0 z-50 flex h-[74px] items-center transition-all delay-100 duration-300 ease-in-out lg:bg-blue lg:h-32 2xl:h-[200px]">
      <nav className="w-full px-4">
        <div className="hidden lg:block">
          <div className="container mx-auto lg:max-w-[72rem] flex items-center justify-between">
            <div className="flex justify-start">
              <a
                className="block text-[40px] text-milkroad_blue font-medium"
                href="/"
              >
                Milkroad
              </a>
            </div>
            <div className="flex items-center gap-x-8">
              <ul className="flex items-center gap-x-4 lg:gap-x-12">
                <li>
                  <a
                    className="text-[18px] font-medium hover:text-milkroad_blue transition-all duration-300 ease-in-out"
                    href="/lend"
                  >
                    Lend
                  </a>
                </li>
                <li>
                  <a
                    className="text-[18px] font-medium hover:text-milkroad_blue transition-all duration-300 ease-in-out"
                    href="/borrow"
                  >
                    Borrow
                  </a>
                </li>
                <li>
                  <a
                    className="text-[18px] font-medium hover:text-milkroad_blue transition-all duration-300 ease-in-out"
                    href="/staking"
                  >
                    Stake
                  </a>
                </li>
                <li>
                  <a
                    className="text-[18px] font-medium hover:text-milkroad_blue transition-all duration-300 ease-in-out"
                    href="/news"
                  >
                    News
                  </a>
                </li>
              </ul>
              <div>
                <a
                  className="bg-milkroad_blue text-white rounded-full py-3 px-8 font-medium"
                  href="/a"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="container mx-auto lg:max-w-[72rem] relative z-10 flex items-center">
            <div>
              <button className="relative flex flex-col gap-y-2">
                <span className="sr-only">Menu</span>
                <Image src={Menu} alt="menu" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center lg:flex-initial lg:justify-start">
              <a className="block text-[20px]" href="/">
                Milkroad
              </a>
            </div>
            <div className="lg:hidden">
              <a
                className="border-milkroad_blue inline-block rounded-full border px-2 py-1 "
                href="/subscribe"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
