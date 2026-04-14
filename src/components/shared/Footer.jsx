import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="py-10 lg:py-20 bg-green-800">
            <div className="w-full px-5 lg:w-2/3 lg:px-0 mx-auto">
                <h1 className="font-extrabold text-3xl lg:text-5xl text-white text-center">Keen<span className="font-medium">Keeper</span> </h1>
                <p className="text-gray-300 text-sm mt-2 text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div className="my-5 text-center">
                    <h1 className="text-white font-medium">Social Links</h1>
                    <div className="flex gap-2 mt-2 justify-center">
                        <Image src={instagram} alt="Instagram"></Image>
                        <Image src={facebook} alt="Facebook"></Image>
                        <Image src={twitter} alt="X"></Image>
                    </div>
                </div>
                <hr className="text-gray-500" />
                <div className="flex flex-col gap-2 md:flex-row justify-between mt-5 text-gray-300 text-sm">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className="flex gap-5">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;