"use client"

import { MdOutlineMessage, MdWifiCalling2 } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";

const Activity = () => {
    const { timelineData } = useContext(TimelineContext);

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
                timelineData.map((data, index) => {
                    const Icon = identifyIcon(data.type)
                    return <div key={index} className="bg-white shadow p-5 rounded-lg flex items-center gap-5 hover:bg-gray-100 border border-gray-200">
                        <div>
                            <Icon className="text-4xl" />
                        </div>
                        <div>
                            <h1 className="text-xl"><span className="font-bold">{data.type} </span>with {data.friendName}</h1>
                            <p className="text-gray-500">{data.date}</p>
                        </div>
                    </div>
                })
            }
        </>
    );
};

export default Activity;