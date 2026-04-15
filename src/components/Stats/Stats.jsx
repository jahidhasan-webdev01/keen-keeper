const Stats = () => {
    const data = [
        {
            count: 10,
            badge: "Total Friends"
        },
        {
            count: 3,
            badge: "On Track"
        },
        {
            count: 6,
            badge: "Need Attention"
        },
        {
            count: 12,
            badge: "Interactions This Month"
        }
    ]
    return (
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 px-5">
            {
                data.map((d, index) =>
                    <div
                        key={index}
                        className="bg-white hover:bg-gray-50 text-center py-10 rounded-lg border border-gray-200 shadow-lg px-5"
                        >
                        <h1 className="font-bold text-3xl">{d.count}</h1>
                        <p className="mt-2 text-gray-500">{d.badge}</p>
                    </div>)
            }

        </div>
    );
};

export default Stats;