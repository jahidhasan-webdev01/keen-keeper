"use client"
import Activity from "@/components/Activity/Activity";
import { TimelineContext } from "@/context/TimelineContext";
import LoadingUI from "@/ui/LoadingUI";
import { useContext, useState } from "react";

const TimelinePage = () => {
    const { timelineData, loading } = useContext(TimelineContext);

    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("oldest");

    let filteredData = [...timelineData];

    if (filter !== "all") {
        filteredData = filteredData.filter(item => item.type === filter);
    }

    if (search) {
        filteredData = filteredData.filter(item =>
            item.friendName.toLowerCase().includes(search.toLowerCase()) ||
            item.type.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (sort === "newest") {
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (sort === "oldest") {
        filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (loading) {
        return <LoadingUI />
    }


    return (
        <div className="bg-base-300">
            <div className="container mx-auto min-h-screen py-10 lg:py-20 px-5 md:px-0">
                <h1 className="font-bold text-3xl">Timeline</h1>
                {
                    filteredData.length > 0 &&
                    <div className="mt-5 grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="select w-full"
                            >
                                <option value="all">All</option>
                                <option value="Call">Call</option>
                                <option value="Text">Text</option>
                                <option value="Video">Video</option>
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label className="input w-full">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    type="search" required placeholder="Search" />
                            </label>
                        </div>

                        <div className="col-span-1">
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="select w-full"
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                    </div>
                }

                {
                    filteredData.length > 0 ?
                        <div className="mt-5 space-y-2">
                            <Activity dataToShow={filteredData} />
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