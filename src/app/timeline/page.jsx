import Activity from "@/components/Activity/Activity";

const TimelinePage = () => {

    return (
        <div className="bg-base-300">
            <div className="container mx-auto min-h-screen py-10 lg:py-20 px-5 md:px-0">
                <h1 className="font-bold text-3xl">Timeline</h1>

                <div className="mt-5 space-y-2">
                    <Activity />
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;