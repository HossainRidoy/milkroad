import React from "react";
import Image from "next/image";
import Shape from "../../../public/milkroadshap.png";

const footerMenu = [
  {
    id: 1,
    name: "Most Popular",
    list: [
      {
        id: 1,
        name: "Crypto Interest Rates",
      },
      {
        id: 2,
        name: "Crypto Exchanges",
      },
      {
        id: 3,
        name: "Stake Crypto",
      },
      {
        id: 4,
        name: "Crypto Loans",
      },
      {
        id: 5,
        name: "Crypto Credit Cards",
      },
      {
        id: 6,
        name: "Buy Crypto",
      },
    ],
  },
  {
    id: 2,
    name: "Earn",
    list: [
      {
        id: 1,
        name: "BTC Interest Rates",
      },
      {
        id: 2,
        name: "USDC Interest Rates",
      },
      {
        id: 3,
        name: "DAI Interest Rates",
      },
      {
        id: 4,
        name: "Staking ETH",
      },
      {
        id: 5,
        name: "Staking SOL",
      },
      {
        id: 6,
        name: "Crypto Courses",
      },
    ],
  },
  {
    id: 3,
    name: "Learn",
    list: [
      {
        id: 1,
        name: "How We Rate",
      },
      {
        id: 2,
        name: "Nexo Review",
      },
      {
        id: 3,
        name: "Binance.us Review",
      },
      {
        id: 4,
        name: "ByBit Referral Code",
      },
      {
        id: 5,
        name: "Crypto Predictions",
      },
      {
        id: 6,
        name: "Crypto Influencers",
      },
    ],
  },
  {
    id: 4,
    name: "Learn more",
    list: [
      {
        id: 1,
        name: "Crypto Wallets",
      },
      {
        id: 2,
        name: "Crypto Tax Software",
      },
      {
        id: 3,
        name: "Crypto Mortgages",
      },
      {
        id: 4,
        name: "Crypto Stocks",
      },
      {
        id: 5,
        name: "Crypto Fear & Greed Index",
      },
      {
        id: 6,
        name: "Crypto Conferences",
      },
    ],
  },
  {
    id: 5,
    name: "About",
    list: [
      {
        id: 1,
        name: "About Us",
      },
      {
        id: 2,
        name: "Contact Us",
      },
      {
        id: 3,
        name: "Careers",
      },
      {
        id: 4,
        name: "Advertise With Us",
      },
      {
        id: 5,
        name: "Privacy Policy",
      },
      {
        id: 6,
        name: "Terms of Use",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <svg
        viewBox="0 0 1440 221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full"
      >
        <path
          d="M0 221V69.0844C81.552 32.0229 170.392 -4.31825 280.195 -0.129401C383.121 3.83261 529.749 42.6054 679.179 82.1193C860.568 130.084 1046.09 179.142 1162.59 168.352C1268.37 158.961 1365.43 119.939 1440 64.8851V221H0Z"
          fill="#F7F7F9"
        ></path>
      </svg>
      <div className="bg-[#F7F7F9] pb-[100px]">
        <div className="container mx-auto lg:max-w-[72rem]">
          <span className="text-[40px] text-milkroad_blue font-medium relative   lg:top-[-100px]">
            Milkroad
          </span>
          <div className="grid lg:grid-cols-5 lg:gap-[100px]">
            {footerMenu.map((item, index) => (
              <div key={index}>
                <span className="font-medium block mb-5">{item.name}</span>

                <ul>
                  <li>
                    {item.list.map((itemList, index) => (
                      <li className="mb-5" key={index}>
                        <a href="#" className="block hover:text-milkroad_blue">
                          {itemList.name}
                        </a>
                      </li>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
