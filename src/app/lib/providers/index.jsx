"use client";
import TimelineContextProvider from "@/context/TimelineContext";

const Providers = ({ children }) => {
    return <TimelineContextProvider>{children}</TimelineContextProvider>;
};

export default Providers;