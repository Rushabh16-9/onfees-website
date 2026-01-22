interface StatProps {
    value: string;
    label: string;
}

const StatsDisplay = ({ stats }: { stats: StatProps[] }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                        {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsDisplay;
