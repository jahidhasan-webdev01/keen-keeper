"use client"
import { createContext, useEffect, useState } from "react";

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {
    const [timelineData, setTimelineData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const stored = localStorage.getItem("timeline");
        if (stored) {
            setTimelineData(JSON.parse(stored));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem("timeline", JSON.stringify(timelineData));
    }, [timelineData]);

    const addEntry = (data) => {
        setTimelineData((prev) => [...prev, data]);
    };

    return (
        <TimelineContext.Provider value={{ timelineData, addEntry, loading }}>
            {children}
        </TimelineContext.Provider >
    );
};

export default TimelineContextProvider;