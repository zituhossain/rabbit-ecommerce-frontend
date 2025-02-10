import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between py-2 px-3">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="w-4 h-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-1">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="hidden md:block text-sm">
          <a href="tel:+123456789"> +123 456 789</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
