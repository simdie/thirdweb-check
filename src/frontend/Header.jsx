import { useState } from "react";
import { Link } from "react-scroll";
import { ConnectWallet } from "@thirdweb-dev/react";
import { GoThreeBars } from 'react-icons/go';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#F5F7FF] mx-auto px-4 sm:px-6 md:px-8 max-w-6xl py-6">
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/" smooth={true} duration={500}>
                        <h2 className="text-2xl">
                            <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">EOSI</span>
                            <span className="text-2xl text-violet-900 font-semibold"> Finance</span>
                        </h2>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-10">

                        <Link to="/" smooth={true} duration={500}>
                            <div className="cursor-pointer">Home</div>
                        </Link>

                        <Link to="" >
                            <div className="cursor-pointer" onClick={() => handleLinkClick('https://ogurov5hndz.typeform.com')} >Products</div>
                        </Link>


                        <Link to="roadmap-section" smooth={true} duration={500}>
                            <div className="cursor-pointer">Roadmap</div>
                        </Link>

                        <Link to="team-section" smooth={true} duration={500}>
                            <div className="cursor-pointer">Team</div>
                        </Link>


                        <Link to="" >
                            <div className="cursor-pointer" onClick={() => handleLinkClick('https://medium.com/@v.hamann')} >Blog</div>
                        </Link>



                        <Link to="" >
                            <div className="cursor-pointer" onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-litepaper/')} >Litepaper</div>
                        </Link>


                        {/* Add other menu items */}
                    </div>
                    <div className="flex items-center gap-3 md:ml-4">
                        <div className=" text-gray-100 hidden md:block">
                            <ConnectWallet className="rounded-xl bg-[#4C205B] text-sm" />
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-3xl hover:text-amber-600 text-[#4C205B]">
                                <GoThreeBars />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-[#4C205B] text-white rounded gap-y-4 divide-y-2 divide-gray-300">

                    <Link to="" >
                        <div className="cursor-pointer p-2 font-bold " onClick={() => handleLinkClick('https://ogurov5hndz.typeform.com')} >Products</div>
                    </Link>

                    <div></div>

                    <Link to="footer-section" smooth={true} duration={500}>
                        <div className="cursor-pointer p-2 font-bold">Roadmap</div>
                    </Link>

                    <div></div>

                    <Link to="" >
                        <div className="cursor-pointer p-2 font-bold" onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-litepaper/')} >Litepaper</div>
                    </Link>

                    <div></div>

                    <Link to="team-section" smooth={true} duration={500}>
                        <div className="cursor-pointer p-2 font-bold">Team</div>
                    </Link>

                    <div></div>

                    <Link to="" >
                        <div className="cursor-pointer p-2 font-bold" onClick={() => handleLinkClick('https://medium.com/@v.hamann')} >Blog</div>
                    </Link>

                    <div className=" text-gray-100 ">
                        <ConnectWallet className="rounded-xl bg-[#4C205B] text-sm" />
                    </div>



                    {/* Add other mobile menu items */}
                </div>
            )}
        </div>
    )
}

export default Header;
