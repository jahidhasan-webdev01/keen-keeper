import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { LuArchive, LuBellDot } from "react-icons/lu";
import Link from "next/link";
import { MdOutlineMessage, MdWifiCalling2 } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const getFriends = async () => {
    const response = await fetch("http://localhost:3000/data/friends.json")
    const data = await response.json()

    return data;
}

const FriendDetailPage = async ({ params }) => {
    const { id } = await params
    const friendsData = await getFriends();

    const selectedFriend = friendsData.find((data) => String(data.id) === id)

    return (
        <div className="bg-base-300">
            <div className="container mx-auto min-h-screen py-20 grid grid-cols-3 gap-5">
                <div className="space-y-2">
                    <div className="flex flex-col items-center bg-white py-5 px-2 md:px-5 gap-2 rounded-lg shadow-lg">
                        <Image className="rounded-full" src={selectedFriend.picture} alt={selectedFriend.name} width={100} height={100}></Image>
                        <h1 className="font-bold text-xl">{selectedFriend.name}</h1>
                        <p className="text-gray-500">{selectedFriend.days_since_contact}d ago</p>

                        <p className={`${selectedFriend.status === "overdue"
                            ? "bg-red-500" :
                            selectedFriend.status === "almost due"
                                ?
                                "bg-amber-500" : "bg-green-800"
                            } text-white px-2 py-1 rounded-full text-sm w-fit`}>{selectedFriend.status}</p>

                        <div className="flex flex-wrap gap-2">
                            {
                                selectedFriend.tags.map((tag, index) =>
                                    <p
                                        key={index}
                                        className="bg-green-200 w-fit px-2 py-1 rounded-full text-green-900 font-medium text-sm"
                                    >
                                        {tag.toUpperCase()}
                                    </p>
                                )
                            }
                        </div>

                        <p className="text-gray-500 italic text-center mt-1">&quot;{selectedFriend.bio}&quot;</p>
                        <p className="text-gray-500">Prefered: email</p>

                    </div>
                    <div>
                        <button className="btn w-full bg-white"><LuBellDot />Snooze 2 Weeks</button>
                    </div>
                    <div>
                        <button className="btn w-full bg-white"><LuArchive />Archive</button>
                    </div>
                    <div>
                        <button className="btn w-full text-red-600"><AiOutlineDelete />Delete</button>
                    </div>
                </div>


                <div className="col-span-2 space-y-5">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="bg-white text-center py-10 px-5 rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-500">62</h1>
                            <p className="text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-white text-center py-10 px-5 rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-500">30</h1>
                            <p className="text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="bg-white text-center py-10 px-5 rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-500">Feb 27, 2026</h1>
                            <p className="text-gray-500">Next Due</p>
                        </div>
                    </div>
                    <div className="bg-white col-span-3 flex justify-between py-10 px-5 rounded-lg">
                        <div>
                            <h1 className="font-bold text-gray-700 text-2xl">Relationship Goal</h1>
                            <p className="text-gray-500 mt-2">Connect every
                                <span className="font-bold text-black"> 30 days</span>
                            </p>
                        </div>
                        <button className="btn">Edit</button>
                    </div>
                    <div className="bg-white col-span-3 py-10 px-5 rounded-lg">
                        <h1 className="font-bold text-gray-700 text-2xl">Quick Check-In</h1>

                        <div className="grid grid-cols-3 gap-5 mt-5">
                            <Link href={""} className=" bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-1 py-5">
                                <MdWifiCalling2 className="text-2xl"/>
                                Call
                            </Link>
                            <Link href={""} className=" bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-1 py-5">
                                <MdOutlineMessage className="text-2xl"/>
                                Call
                            </Link>
                            <Link href={""} className=" bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-1 py-5">
                                <CiVideoOn className="text-2xl" />
                                Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailPage;