import Image from "next/image";
import Link from "next/link";

const getFriends  = async () => {
    const response = await fetch("http://localhost:3000/data/friends.json")
    const data = await response.json()

    return data;
}

const Friends = async () => {
    const friendsData = await getFriends();

    return (
        <div className="container mx-auto py-10 px-5 lg:px-0">
            <h1 className="font-bold text-xl">Your Friends</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-5">
                {
                    friendsData.map((data, index) =>
                        <Link key={index} href={`/friends/${data.id}`} >
                            <div
                                className="flex flex-col justify-center items-center bg-white py-10 gap-4 px-4 border border-gray-200 shadow-lg rounded-lg"
                            >
                                <Image className="rounded-full" src={data.picture} alt={data.name} width={100} height={100}></Image>
                                <h1 className="font-bold text-xl">{data.name}</h1>
                                <p className="text-gray-500">{data.days_since_contact}d ago</p>

                                <div className="flex flex-wrap gap-2">
                                    {
                                        data.tags.map((tag, index) =>
                                            <p
                                                key={index}
                                                className="bg-green-200 w-fit px-2 py-1 rounded-full text-green-900 font-medium text-sm"
                                            >
                                                {tag.toUpperCase()}
                                            </p>
                                        )
                                    }
                                </div>

                                <p className={`${data.status === "overdue"
                                    ? "bg-red-500" :
                                    data.status === "almost due"
                                        ?
                                        "bg-amber-500" : "bg-green-800"
                                    } text-white px-2 py-1 rounded-full text-sm`}>{data.status}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Friends;