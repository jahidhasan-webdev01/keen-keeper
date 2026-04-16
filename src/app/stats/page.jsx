"use client";
import { TimelineContext } from "@/context/TimelineContext";
import LoadingUI from "@/ui/LoadingUI";
import { useContext } from "react";
import { Pie, PieChart, Tooltip, Legend } from "recharts";

const StatsPage = () => {
    const { timelineData, loading } = useContext(TimelineContext);

    const callCount = timelineData.filter(item => item.type === "Call").length;
    const textCount = timelineData.filter(item => item.type === "Text").length;
    const videoCount = timelineData.filter(item => item.type === "Video").length;

    const data = [
        { name: "Call", value: callCount, fill: "#065F46" },
        { name: "Text", value: textCount, fill: "#8B5CF6" },
        { name: "Video", value: videoCount, fill: "#22C55E" },
    ];

    if (loading) {
        return <LoadingUI />
    }

    return (
        <div className="bg-base-300">
            <div className="container mx-auto min-h-screen py-10 lg:py-20 px-5 md:px-0">
                <h1 className="font-bold text-3xl">Friendship Analytics</h1>

                {
                    timelineData.length > 0 ?
                        <div className="mt-5 bg-white px-5 py-10 rounded-xl border border-gray-200">
                            <p className="text-gray-500 font-medium">By Interaction Type:</p>
                            <div className="w-full flex justify-center items-center">
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={100}
                                        outerRadius={150}
                                        paddingAngle={5}
                                    />
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </div>
                        </div>
                        :
                        <div className="mt-5 min-h-[70vh] flex justify-center items-center bg-white px-5 py-10 rounded-xl border border-gray-200">
                            <h1 className="font-bold text-gray-500 text-xl">No interactions yet</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default StatsPage;