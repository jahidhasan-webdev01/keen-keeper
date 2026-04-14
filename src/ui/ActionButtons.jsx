"use client"
import { MdOutlineMessage, MdWifiCalling2 } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import toast from "react-hot-toast";

const ActionButtons = ({ friend }) => {
    const { addEntry } = useContext(TimelineContext)
    const handleActions = (type) => {
        const entry = {
            ...friend,
            title: `${type} with ${friend.name}`,
            date: new Date().toISOString(),
        };

        toast.success(`${type} with ${friend.name}`)

        addEntry(entry)
    }
    return (
        <>
            <button onClick={() => handleActions("Call")} className="cursor-pointer bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-1 py-5">
                <MdWifiCalling2 className="text-2xl" />
                Call
            </button>
            <button onClick={() => handleActions("Text")} className="cursor-pointer bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-1 py-5">
                <MdOutlineMessage className="text-2xl" />
                Text
            </button>
            <button onClick={() => handleActions("Video")} className="cursor-pointer bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-1 py-5">
                <CiVideoOn className="text-2xl" />
                Video
            </button>
        </>
    );
};

export default ActionButtons;