"use client"
import Activity from "@/components/Activity/Activity";
import { TimelineContext } from "@/context/TimelineContext";
import { useContext } from "react";

const TimelinePage = () => {
    const { timelineData } = useContext(TimelineContext);

    return (
        <div className="bg-base-300">
            <div className="container mx-auto min-h-screen py-10 lg:py-20 px-5 md:px-0">
                <h1 className="font-bold text-3xl">Timeline</h1>
                {
                    timelineData.length > 0 ?
                        <div className="mt-5 space-y-2">
                            <Activity />
                        </div> :
                        <div className="mt-5 min-h-[70vh] flex justify-center items-center bg-white px-5 py-10 rounded-xl border border-gray-200">
                            <h1 className="font-bold text-gray-500 text-xl">No interactions yet</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default TimelinePage;