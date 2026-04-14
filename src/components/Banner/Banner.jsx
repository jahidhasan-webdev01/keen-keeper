import { IoAddOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className="w-full px-5 md:w-2/3 md:px-0 mx-auto py-10 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
            <p className="text-center text-gray-500">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <button className="btn bg-green-800 text-white"><IoAddOutline />Add a Friend</button>
        </div>
    );
};

export default Banner;