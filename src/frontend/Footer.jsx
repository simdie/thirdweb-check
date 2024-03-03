import divide from "../images/divide.png";
import { Link } from 'react-router-dom';
import twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Mail from "../images/mail.png";
import Telegram from "../images/telegram.png";

export default function Footer() {

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className=" flex flex-col w-full items-center justify-center py-8 pb-24 bg-black sm:mx-auto px-4 md:px-8 lg:px-0">

      <div className="container mx-auto flex flex-row items-center justify-center ">

        <div className=" flex flex-col ml-32 w-full md:w-2/5 mx-8  md:mx-0 mb-8 md:mb-0">
          <Link to="/" >
            <h2 className="text-2xl space-x-1 mb-6">
              <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">
                EOSI
              </span>
              <span className="text-3xl text-violet-900 font-semibold">
                Finance
              </span>
            </h2>
          </Link>
          <div className="text-xs font-semibold pb-6 text-white">
            Copyright EOSI Finance © 2023
          </div>
          <p className="text-xs font-semibold text-white">Follow us</p>
          <div className="flex flex-row space-x-5 pt-4 items-center cursor-pointer">
            <img onClick={() => handleLinkClick('mailto:eosi@tutanota.com')}
              className="hover:opacity-70"
              src={Mail}
              alt=""
            />
            <img onClick={() => handleLinkClick('https://www.instagram.com/eosi_finance')}
              className="hover:opacity-70"
              src={Instagram}
              alt=""
            />
            <img onClick={() => handleLinkClick('https://t.me/eosifinance')}
              className="hover:opacity-70"
              src={Telegram}
              alt=""
            />
            <img onClick={() => handleLinkClick('https://twitter.com/eosi__finance')}
              className="hover:opacity-70"
              src={twitter}
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-1/4 mx-8 md:mx-0 mb-10 md:mb-0">
          <div onClick={() => handleLinkClick('https://t.me/eosifinance')} className="cursor-pointer space-y-6 ">


            <Link to="" >
              <div className="text-lg font-medium text-gray-300 cursor-pointer" onClick={() => handleLinkClick('https://ogurov5hndz.typeform.com')} >Products</div>
            </Link>


            <div className="text-xs font-semibold text-white space-y-2 w-36 md:w-full">
              <p>Crypto Copy-Trading</p>
              <p>Connect Wallet</p>
              <p onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-litepaper/')} className="cursor-pointer">Litepaper</p>
              <p>EOSI Telegram</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 mx-4 md:mx-0">
          <div className="hidden md:block space-y-6">
            <p className="text-lg font-medium text-gray-300">Resources</p>
            <div className="text-xs font-semibold text-white space-y-2">
              <p>Documentation</p>
              <p>Team Blog</p>
              <p>Hackathon & Bounty</p>
              <p>Roadmap</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 mx-4 md:mx-0">
          <div className="hidden md:block space-y-6">
            <p className="text-lg font-medium text-gray-300">About</p>
            <div className="text-xs font-semibold text-white space-y-2">
              <p>Team</p>
              <p>Jobs</p>
              <p>Media Inquiries</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
