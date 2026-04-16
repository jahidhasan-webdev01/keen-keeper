import { MdOutlineMessage, MdWifiCalling2 } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const Activity = ({dataToShow}) => {

    const identifyIcon = (type) => {
        if (type === "Call") {
            return MdWifiCalling2
        } else if (type === "Text") {
            return MdOutlineMessage
        } else if (type === "Video") {
            return CiVideoOn
        }
    }

    return (
        <>
            {
                dataToShow.map((data, index) => {
                    const Icon = identifyIcon(data.type)
                    return <div key={index} className="bg-white shadow p-5 rounded-lg flex items-center gap-5 hover:bg-gray-100 border border-gray-200">
                        <div>
                            <Icon className="text-2xl" />
                        </div>
                        <div>
                            <h1><span className="font-bold">{data.type} </span>with {data.friendName}</h1>
                            <p className="text-gray-500 text-sm">
                                {
                                    new Date(data.date)
                                        .toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                }
                            </p>
                        </div>
                    </div>
                })
            }
        </>
    );
};

export default Activity;